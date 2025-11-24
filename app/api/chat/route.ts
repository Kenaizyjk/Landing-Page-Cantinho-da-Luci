import { NextRequest, NextResponse } from "next/server"
import { chatbotConfig } from "@/lib/chatbot-config"

interface Message {
  role: "user" | "assistant"
  content: string
}

// Modo de desenvolvimento - Respostas simuladas
function getDevelopmentResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  // Respostas baseadas em palavras-chave
  if (message.includes("horário") || message.includes("horario") || message.includes("funciona")) {
    return "Olá! O restaurante funciona aos sábados, domingos e feriados. Já a pousada aceita reservas todos os dias. Para confirmar disponibilidade, chame a gente no WhatsApp: (31) 99648-1646!"
  }

  if (message.includes("reserva") || message.includes("reservar")) {
    return "Fico feliz que queira nos visitar! Para fazer sua reserva, é só chamar no WhatsApp (31) 99648-1646. A Luci vai te atender pessoalmente e garantir que tudo esteja perfeito pra você!"
  }

  if (message.includes("cardápio") || message.includes("cardapio") || message.includes("comida") || message.includes("prato")) {
    return "Nosso buffet é servido direto no fogão a lenha! Tem torresmo crocante, feijão tropeiro, angu mineiro, carnes suculentas e muito mais. Tudo feito com ingredientes frescos e receitas de família. Uma delícia!"
  }

  if (message.includes("preço") || message.includes("preco") || message.includes("valor") || message.includes("custo")) {
    return "Para informações sobre valores e pacotes especiais, é melhor falar direto com a Luci pelo WhatsApp: (31) 99648-1646. Ela vai te passar os melhores preços!"
  }

  if (message.includes("localização") || message.includes("localizacao") || message.includes("endereço") || message.includes("endereco") || message.includes("onde")) {
    return "Estamos na R. João Francisco Avelar, 94, Lapinha, Lagoa Santa - MG. Um cantinho especial no meio da natureza! Quer as coordenadas exatas? Chama no WhatsApp: (31) 99648-1646"
  }

  if (message.includes("piscina") || message.includes("lazer")) {
    return "Temos uma piscina linda cercada de verde! Perfeita pra relaxar, ler um livro ou só curtir o silêncio da natureza. Nossos hóspedes adoram!"
  }

  if (message.includes("quarto") || message.includes("suíte") || message.includes("suite") || message.includes("hospedagem")) {
    return "Nossas suítes são aconchegantes, com decoração rústica e todo o conforto. Oferecemos Wi-Fi grátis e café da manhã incluso. Para ver fotos e disponibilidade, chame no WhatsApp: (31) 99648-1646!"
  }

  // Resposta padrão
  return "Olá! Sou o assistente do Cantinho da Luci. Estou aqui pra te ajudar com informações sobre nosso restaurante e pousada. Para um atendimento mais completo, fale diretamente com a Luci pelo WhatsApp: (31) 99648-1646!"
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

    const provider = process.env.CHATBOT_PROVIDER
    const isDevelopment = process.env.NODE_ENV === "development"

    // Modo de desenvolvimento: usar respostas simuladas se não houver API configurada
    if (!provider || provider === "mock") {
      const lastUserMessage = messages.filter(m => m.role === "user").pop()
      const responseMessage = getDevelopmentResponse(lastUserMessage?.content || "")

      console.log("🤖 Modo de desenvolvimento ativo - usando respostas simuladas")
      return NextResponse.json({ message: responseMessage })
    }

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
        // Se o provedor for inválido, usar modo de desenvolvimento
        const lastUserMessage = messages.filter(m => m.role === "user").pop()
        responseMessage = getDevelopmentResponse(lastUserMessage?.content || "")
        console.log("⚠️ Provedor inválido - usando respostas simuladas")
    }

    return NextResponse.json({ message: responseMessage })
  } catch (error) {
    console.error("❌ Erro no chatbot:", error)

    // Em caso de erro, usar respostas simuladas como fallback
    const { messages } = await request.json()
    const lastUserMessage = messages?.filter((m: Message) => m.role === "user").pop()

    if (lastUserMessage) {
      const fallbackMessage = getDevelopmentResponse(lastUserMessage.content)
      return NextResponse.json({ message: fallbackMessage })
    }

    // Mensagem de fallback final
    return NextResponse.json({
      message: `Olá! No momento estou com dificuldades técnicas. 😊\n\nPara atendimento imediato, entre em contato pelo WhatsApp: (31) 99648-1646\n\nTeremos prazer em ajudá-lo!`,
    })
  }
}
