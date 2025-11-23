import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Star, Clock, Wifi, Coffee, MessageCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-stone-50 overflow-x-hidden">
      {/* Hero Section - Mobile First, Full Screen */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/entrada-cantinho.jpeg"
            alt="Entrada do Cantinho da Luci"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.65]"
            priority
            quality={90}
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 py-8 max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 sm:mb-6 tracking-tight drop-shadow-2xl">
            Cantinho da Luci
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 font-light leading-relaxed text-stone-100 max-w-2xl mx-auto drop-shadow-lg px-4">
            Onde a gastronomia mineira encontra o aconchego da natureza.
          </p>
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 font-bold px-8 py-6 text-base sm:text-lg rounded-lg transition-all duration-300 shadow-2xl border-2 border-[#D4AF37]"
            >
              <Link href="https://wa.me/5531996481646" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fazer Reserva
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-6 text-base sm:text-lg rounded-lg transition-all duration-300 shadow-xl"
            >
              <Link href="#menu">Ver Cardápio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fogão a Lenha - Mobile First, Full Section */}
      <section id="menu" className="min-h-screen flex items-center py-16 sm:py-20 md:py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/wood-texture-dark.jpg"
            alt="Textura de madeira"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={60}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-bold text-[#D4AF37] block">Sabor Inconfundível</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-50 px-4">O Fogão a Lenha</h2>
            <div className="w-20 sm:w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
            <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg px-4 leading-relaxed">
              A verdadeira culinária raiz, preparada lentamente para apurar os sabores e aromas que só Minas Gerais tem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[350px] sm:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/fogao-lenha.png"
                alt="Buffet no fogão a lenha"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                quality={90}
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 px-2 sm:px-0">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#D4AF37] font-bold">Um Banquete de Memórias</h3>
                <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
                  Nosso buffet é servido diretamente no fogão a lenha, mantendo a comida quentinha e com aquele gostinho
                  defumado irresistível. Torresmo crocante, feijão tropeiro, carnes suculentas e, claro, o famoso angu
                  mineiro.
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Ingredientes frescos e locais",
                    "Receitas de família passadas por gerações",
                    "Doces caseiros em compota",
                    "Café coado na hora",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-stone-200 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 border-none px-8 py-6 text-base sm:text-lg font-bold rounded-lg shadow-xl"
              >
                <Link href="https://wa.me/5531996481646" target="_blank">
                  Reservar Almoço
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Acomodações e Piscina - Mobile First */}
      <section id="hospedagem" className="min-h-screen flex items-center py-16 sm:py-20 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-bold text-stone-500 block">Descanso e Lazer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 px-4">
              Seu Refúgio na Lapinha
            </h2>
            <p className="max-w-2xl mx-auto text-stone-600 text-base sm:text-lg px-4 leading-relaxed">
              Desconecte-se da rotina e aproveite a simplicidade com conforto.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {/* Piscina Feature */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/piscina.jpeg"
                  alt="Piscina ao ar livre"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  quality={85}
                />
              </div>
              <div className="space-y-4 sm:space-y-6 px-2 sm:px-0 lg:pl-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-800">Piscina e Natureza</h3>
                <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                  Relaxe em nossa piscina cercada pelo verde e pelo canto dos pássaros. O ambiente perfeito para se
                  refrescar nos dias de sol, ler um livro à sombra das árvores ou simplesmente não fazer nada.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="flex items-center gap-2 text-stone-700 text-sm sm:text-base">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span>Área Verde</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm sm:text-base">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span>Espreguiçadeiras</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quartos Feature */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 px-2 sm:px-0 lg:pr-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-800">Suítes Aconchegantes</h3>
                <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                  Nossas acomodações são preparadas para garantir uma noite de sono tranquila. Com decoração rústica e
                  todo o conforto que você precisa após um dia de passeio na Lapinha.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="flex items-center gap-2 text-stone-700 text-sm sm:text-base">
                    <Wifi className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span>Wi-Fi Grátis</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm sm:text-base">
                    <Coffee className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span>Café da Manhã</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto mt-4 sm:mt-6 border-2 border-stone-800 text-stone-800 hover:bg-stone-900 hover:text-white bg-transparent px-8 py-6 text-base sm:text-lg font-bold rounded-lg"
                >
                  <Link href="https://wa.me/5531996481646" target="_blank">
                    Ver Disponibilidade
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/quarto-casal.jpeg"
                    alt="Quarto de Casal"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    priority
                    quality={80}
                  />
                </div>
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/quarto-familia.jpeg"
                    alt="Quarto Família"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    priority
                    quality={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos - Mobile First */}
      <section className="py-16 sm:py-20 md:py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 px-4">O que dizem nossos hóspedes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Mariana Silva",
                text: "Um pedacinho do céu! A comida é maravilhosa, com aquele tempero de vó que a gente não acha em qualquer lugar. A Luci é uma simpatia.",
                date: "Há 2 semanas",
              },
              {
                name: "Ricardo Oliveira",
                text: "Lugar perfeito para descansar. A piscina é ótima e os quartos são super limpinhos e aconchegantes. Voltarei com certeza!",
                date: "Há 1 mês",
              },
              {
                name: "Fernanda Santos",
                text: "Almoço de domingo inesquecível. O torresmo é o melhor que já comi! O ambiente é familiar e muito acolhedor.",
                date: "Há 3 semanas",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex text-[#D4AF37] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 italic leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-stone-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs text-stone-400 mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Contato - Mobile First, Full Section */}
      <section id="contato" className="min-h-screen flex items-center py-16 sm:py-20 md:py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Venha nos visitar</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-2">Endereço</h3>
                    <p className="text-stone-300 text-sm sm:text-base">R. João Francisco Avelar, 94</p>
                    <p className="text-stone-300 text-sm sm:text-base mb-2">Lapinha, Lagoa Santa - MG, 33242-000</p>
                    <a
                      href="https://www.google.com/maps/place/Restaurante%2FPousada+Cantinho+da+Luci/@-19.5648708,-43.9476011,17z"
                      target="_blank"
                      className="text-[#D4AF37] hover:text-[#B5952F] text-sm font-semibold inline-block underline underline-offset-4 transition-colors"
                      rel="noreferrer"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-2">Contato e Reservas</h3>
                    <a href="https://wa.me/5531996481646" className="text-stone-100 text-lg sm:text-xl font-bold hover:text-[#D4AF37] transition-colors">
                      (31) 99648-1646
                    </a>
                    <p className="text-stone-400 text-sm mt-1">Atendimento via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-2">Horário de Funcionamento</h3>
                    <p className="text-stone-300 text-sm sm:text-base">Restaurante: Sábado, Domingo e Feriados</p>
                    <p className="text-stone-300 text-sm sm:text-base">Pousada: Todos os dias (com reserva)</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 sm:pt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base sm:text-lg px-8 py-6 rounded-lg shadow-xl transition-all duration-300"
                >
                  <Link href="https://wa.me/5531996481646" target="_blank">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chamar no WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border-2 border-stone-700 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.117187834516!2d-43.94760112396863!3d-19.56487588173495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6657c33c5f925%3A0x3c11a77f2d93a862!2sRestaurante%2FPousada%20Cantinho%20da%20Luci!5e0!3m2!1spt-BR!2sbr!4v1709320000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Localização do Cantinho da Luci"
              ></iframe>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-700 text-center text-stone-400 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Cantinho da Luci. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
