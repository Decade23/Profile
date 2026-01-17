import type { NextApiRequest, NextApiResponse } from "next";

interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  subject?: string;
  message: string;
}

interface ApiResponse {
  message: string;
}

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

async function generateAISuggestion(data: ContactFormData): Promise<string> {
  if (!GROQ_API_KEY) {
    return "AI suggestion not available";
  }

  const prompt = `Kamu adalah asisten untuk Dedi Fardiyanto, seorang Tech Lead dengan 13+ tahun pengalaman di web/mobile development.

Seseorang mengirim pesan melalui contact form:
- Nama: ${data.name}
- Email: ${data.email}
- Subject: ${data.subject || "Tidak ada"}
- Pesan: ${data.message}

Berikan saran singkat dalam Bahasa Indonesia untuk Dedi:
1. Analisis singkat tentang kebutuhan/maksud pengirim (1-2 kalimat)
2. 2-3 pertanyaan penting yang harus ditanyakan ke pengirim
3. Estimasi kasar jika ini project (timeline/effort)
4. Prioritas follow-up (High/Medium/Low) dan alasannya

Format jawaban singkat dan to the point, maksimal 150 kata.`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      return "AI suggestion failed";
    }

    const result = await response.json();
    return result.choices?.[0]?.message?.content || "No suggestion";
  } catch (error) {
    console.error("AI suggestion error:", error);
    return "AI suggestion error";
  }
}

async function sendToTelegram(
  data: ContactFormData,
  aiSuggestion: string,
): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials not configured");
    return false;
  }

  const timestamp = new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "medium",
    timeStyle: "medium",
  });

  const formatWhatsAppNumber = (phone: string): string => {
    let number = phone.replace(/[^0-9]/g, "");
    if (number.startsWith("0")) {
      number = "62" + number.substring(1);
    } else if (number.startsWith("8") && number.length >= 9) {
      number = "62" + number;
    }
    return number;
  };

  const whatsappNumber = data.whatsapp
    ? formatWhatsAppNumber(data.whatsapp)
    : "";
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "Not provided";

  const text = `📬 *New Contact Form*

👤 *Name:* ${escapeMarkdown(data.name)}
📧 *Email:* ${escapeMarkdown(data.email)}
📱 *WhatsApp:* ${escapeMarkdown(data.whatsapp || "Not provided")}
🔗 *Chat:* ${whatsappLink}
📋 *Subject:* ${escapeMarkdown(data.subject || "No subject")}

💬 *Message:*
${escapeMarkdown(data.message)}

🤖 *AI Suggestion:*
${aiSuggestion}

⏰ ${timestamp}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      },
    );

    const result = await response.json();
    return result.ok === true;
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
    return false;
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, whatsapp, subject, message }: ContactFormData = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    // Generate AI suggestion first
    const aiSuggestion = await generateAISuggestion({
      name,
      email,
      whatsapp,
      subject,
      message,
    });

    const sent = await sendToTelegram(
      {
        name,
        email,
        whatsapp,
        subject,
        message,
      },
      aiSuggestion,
    );

    if (sent) {
      res.status(200).json({ message: "Message sent successfully" });
    } else {
      res.status(500).json({ message: "Failed to send message" });
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
