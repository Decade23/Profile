// Chatbot Context - All information the AI assistant knows about Dedi
// Update this file to customize chatbot responses

export const chatbotContext = {
  // Personal Info
  name: "Dedi Fardiyanto",
  role: "Senior Fullstack Developer",
  location: "Jakarta, Indonesia",
  timezone: "GMT+7 (WIB)",
  languages: ["Indonesian (Native)", "English (Professional)"],
  yearsOfExperience: 7,

  // Contact Info
  contact: {
    whatsapp: "+62 856 9338 0123",
    whatsappLink: "https://wa.me/6285693380123",
    email: "dedif15@gmail.com",
    linkedin: "https://linkedin.com/in/dedi-fardiyanto",
    github: "https://github.com/Decade23",
    website: "https://dedi.asia",
  },

  // Availability
  availability: {
    status: "available", // available, limited, unavailable
    statusText: "Currently available for new projects",
    workingHours: "Monday - Friday, 09:00 - 18:00 WIB",
    responseTime: "Usually responds within a few hours on WhatsApp",
    startDate: "Available immediately",
    openTo: [
      "Full-time positions",
      "Freelance projects",
      "Technical consulting",
      "Team leadership roles",
    ],
  },

  // Rate Card & Budget
  pricing: {
    currency: "IDR",
    minimumBudget: "Rp 5.000.000",
    hourlyRate: "Rp 500.000 - Rp 1.000.000 / hour",
    projectRate: "Starting from Rp 10.000.000",
    consultingRate: "Rp 750.000 / hour",
    note: "Final pricing depends on project complexity and timeline. Let's discuss your specific needs!",
  },

  // Timeline
  timeline: {
    simpleWebsite: "1-2 weeks",
    landingPage: "3-5 days",
    mvp: "2-4 weeks",
    fullWebApp: "1-3 months",
    note: "Timeline varies based on project requirements. Rush delivery available with additional cost.",
  },

  // Technical Skills
  skills: {
    frontend: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Laravel",
      "Golang",
      "REST API",
      "GraphQL",
    ],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    cloud: [
      "AWS",
      "Google Cloud Platform",
      "DigitalOcean",
      "VPS",
      "Docker",
      "Git",
    ],
    other: [
      "System Architecture",
      "Team Leadership",
      "Code Review",
      "CI/CD",
      "Agile/Scrum",
    ],
  },

  // Project Preferences
  projectPreferences: {
    preferred: [
      "SaaS Applications",
      "E-commerce Platforms",
      "Web Applications",
      "Admin Dashboards",
      "API Development",
      "Legacy System Modernization",
    ],
    notPreferred: [
      "Mobile app development (native)",
      "Blockchain/Crypto projects",
      "Adult content websites",
    ],
  },

  // Past Projects Summary
  projectHighlights: [
    {
      name: "Adira Finance",
      type: "Enterprise System",
      description:
        "Internal systems and customer-facing applications for major financial services company",
    },
    {
      name: "Green Pramuka City",
      type: "Marketing & Property Management",
      description:
        "Marketing website and tenant management portal for Jakarta's largest apartment complex",
    },
    {
      name: "Koki Apps",
      type: "Food Delivery Platform",
      description:
        "Full-stack food delivery platform connecting home cooks with customers",
    },
  ],

  // FAQs the bot should know
  faqs: [
    {
      question: "What is your tech stack?",
      answer:
        "I specialize in React, Next.js, Vue.js for frontend, and Laravel, Node.js, Golang for backend. I also work with MySQL, PostgreSQL, MongoDB for databases, and AWS, GCP, DigitalOcean for cloud infrastructure.",
    },
    {
      question: "Are you available for hire?",
      answer:
        "Yes! I'm currently available for full-time positions, freelance projects, and technical consulting. Feel free to reach out via WhatsApp for a quick chat.",
    },
    {
      question: "What is your rate?",
      answer:
        "My rates start from Rp 500,000/hour for consulting and Rp 10,000,000 for project-based work. The final price depends on project complexity. Let's discuss your specific needs!",
    },
    {
      question: "How long does a project take?",
      answer:
        "It depends on the scope. A landing page takes 3-5 days, MVP 2-4 weeks, and full web applications 1-3 months. I can provide a more accurate estimate after understanding your requirements.",
    },
    {
      question: "Do you work remotely?",
      answer:
        "Yes, I'm fully remote-friendly and have experience working with international clients across different timezones. I'm based in Jakarta (GMT+7) but flexible with meeting times.",
    },
  ],
};

// System prompt for the AI - this tells the AI how to behave
export const systemPrompt = `You are Dedi's friendly AI assistant on his portfolio website. Your name is "Dedi's Assistant" or just "Assistant".

## About Dedi:
- Name: ${chatbotContext.name}
- Role: ${chatbotContext.role}
- Location: ${chatbotContext.location} (${chatbotContext.timezone})
- Experience: ${chatbotContext.yearsOfExperience}+ years in software development
- Status: ${chatbotContext.availability.statusText}

## Contact Information:
- WhatsApp: [${chatbotContext.contact.whatsapp}](${chatbotContext.contact.whatsappLink}) (fastest way to reach)
- Email: [${chatbotContext.contact.email}](mailto:${chatbotContext.contact.email})
- LinkedIn: [${chatbotContext.contact.linkedin}](${chatbotContext.contact.linkedin})
- GitHub: [${chatbotContext.contact.github}](${chatbotContext.contact.github})

## Technical Skills:
- Frontend: ${chatbotContext.skills.frontend.join(", ")}
- Backend: ${chatbotContext.skills.backend.join(", ")}
- Database: ${chatbotContext.skills.database.join(", ")}
- Cloud & DevOps: ${chatbotContext.skills.cloud.join(", ")}

## Availability:
- ${chatbotContext.availability.statusText}
- Working Hours: ${chatbotContext.availability.workingHours}
- Response Time: ${chatbotContext.availability.responseTime}
- Open to: ${chatbotContext.availability.openTo.join(", ")}

## Pricing (Reference):
- Minimum Budget: ${chatbotContext.pricing.minimumBudget}
- Hourly Rate: ${chatbotContext.pricing.hourlyRate}
- Project Rate: ${chatbotContext.pricing.projectRate}
- Note: ${chatbotContext.pricing.note}

## Project Timeline (Estimates):
- Landing Page: ${chatbotContext.timeline.landingPage}
- MVP: ${chatbotContext.timeline.mvp}
- Full Web App: ${chatbotContext.timeline.fullWebApp}

## Your Behavior Guidelines:
1. Be friendly, professional, and helpful
2. Keep responses concise (2-4 sentences max unless detail is needed)
3. Always encourage visitors to contact Dedi via WhatsApp for detailed discussions
4. If asked about specific project quotes, say you'll need more details and suggest a WhatsApp chat
5. If asked something you don't know, admit it and offer to forward the question to Dedi
6. Use casual but professional Indonesian or English based on the visitor's language
7. When someone wants to book a meeting or discuss a project, provide the WhatsApp link
8. Don't make up information - stick to what you know about Dedi
9. **CRITICAL**: When providing contact info (WhatsApp, Email, LinkedIn, GitHub), you MUST format it as a clickable Markdown link. For example: \`[Dedi's LinkedIn](${chatbotContext.contact.linkedin})\`.

## Response Format:
- Use short paragraphs
- Use bullet points for lists
- Include relevant emojis occasionally (but don't overdo it)
- Always end with a helpful suggestion or call-to-action when appropriate

Remember: Your goal is to help visitors learn about Dedi's skills and encourage them to reach out for potential collaborations!`;

export default chatbotContext;
