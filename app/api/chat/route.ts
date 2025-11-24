import { NextRequest, NextResponse } from "next/server"
import { chatbotConfig } from "@/lib/chatbot-config"

interface Message {
  role: "user" | "assistant"
  content: string
}

// Função para chamar OpenAI
async function callOpenAI(messages: Message[]) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY não configurada")
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.CHATBOT_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: chatbotConfig.systemPrompt },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    throw new Error(`Erro na API OpenAI: ${response.statusText}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}

// Função para chamar Anthropic (Claude)
async function callAnthropic(messages: Message[]) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY não configurada")
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.CHATBOT_MODEL || "claude-3-5-sonnet-20241022",
      max_tokens: 500,
      system: chatbotConfig.systemPrompt,
      messages: messages,
    }),
  })

  if (!response.ok) {
    throw new Error(`Erro na API Anthropic: ${response.statusText}`)
  }

  const data = await response.json()
  return data.content[0].text
}

// Função para chamar Google AI (Gemini)
async function callGoogleAI(messages: Message[]) {
  const apiKey = process.env.GOOGLE_AI_API_KEY
  if (!apiKey) {
    throw new Error("GOOGLE_AI_API_KEY não configurada")
  }

  const model = process.env.CHATBOT_MODEL || "gemini-1.5-flash"
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messages.map((msg) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        })),
        systemInstruction: {
          parts: [{ text: chatbotConfig.systemPrompt }],
        },
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`Erro na API Google AI: ${response.statusText}`)
  }

  const data = await response.json()
  return data.candidates[0].content.parts[0].text
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Mensagens inválidas" },
        { status: 400 }
      )
    }

    const provider = process.env.CHATBOT_PROVIDER || "openai"
    let responseMessage: string

    switch (provider) {
      case "openai":
        responseMessage = await callOpenAI(messages)
        break
      case "anthropic":
        responseMessage = await callAnthropic(messages)
        break
      case "google":
        responseMessage = await callGoogleAI(messages)
        break
      default:
        return NextResponse.json(
          { error: "Provedor de chatbot não configurado corretamente" },
          { status: 500 }
        )
    }

    return NextResponse.json({ message: responseMessage })
  } catch (error) {
    console.error("Erro no chatbot:", error)

    // Retornar mensagem de fallback amigável
    return NextResponse.json({
      message: `Desculpe, estou com dificuldades no momento. 😊\n\nPara atendimento imediato, entre em contato pelo WhatsApp: (31) 99648-1646\n\nTeremos prazer em ajudá-lo!`,
    })
  }
}
