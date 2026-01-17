import type { NextApiRequest, NextApiResponse } from "next";
import { systemPrompt } from "../../data/chatbot-context";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequest {
  messages: Message[];
}

interface ChatResponse {
  message?: string;
  error?: string;
}

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>,
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check if API key is configured
  if (!GROQ_API_KEY) {
    return res.status(500).json({
      error: "AI assistant is not configured. Please contact Dedi directly.",
    });
  }

  try {
    const { messages } = req.body as ChatRequest;

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages are required" });
    }

    // Limit conversation history to last 10 messages to save tokens
    const recentMessages = messages.slice(-10);

    // Prepare messages with system prompt
    const chatMessages: Message[] = [
      { role: "system", content: systemPrompt },
      ...recentMessages,
    ];

    // Call Groq API
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // Free, fast, and capable
        messages: chatMessages,
        temperature: 0.7,
        max_tokens: 500, // Limit response length
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Groq API error:", errorData);
      return res.status(response.status).json({
        error: "Failed to get response from AI. Please try again.",
      });
    }

    const data = await response.json();

    // Extract the assistant's message
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      return res.status(500).json({ error: "No response from AI" });
    }

    return res.status(200).json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
}
