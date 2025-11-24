import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Instagram, Star, Clock, Wifi, Coffee, MessageCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col font-sans text-stone-800 bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/entrada-cantinho.jpeg"
            alt="Entrada do Cantinho da Luci"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
            Cantinho da Luci
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide text-stone-100 max-w-2xl mx-auto drop-shadow-md">
            Onde a gastronomia mineira encontra o aconchego da natureza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 font-semibold px-8 py-6 text-lg rounded-sm transition-all duration-300 shadow-xl border border-[#D4AF37]/50"
            >
              <Link href="https://wa.me/5531996481646" target="_blank">
                Fazer Reserva
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-stone-900 px-8 py-6 text-lg rounded-sm transition-all duration-300 backdrop-blur-sm"
            >
              <Link href="#menu">Ver Cardápio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fogão a Lenha - Destaque Gastronômico */}
      <section id="menu" className="min-h-screen flex items-center py-16 md:py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/wood-texture-dark.jpg" alt="Textura de madeira" fill className="object-cover" loading="eager" />
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="text-center mb-16 space-y-4">
            <span className="uppercase tracking-widest text-sm font-semibold text-[#D4AF37]">Sabor Inconfundível</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-5">O Fogão a Lenha</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
            <p className="max-w-2xl mx-auto text-stone-400 text-lg">
              A verdadeira culinária raiz, preparada lentamente para apurar os sabores e aromas que só Minas Gerais tem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-sm overflow-hidden shadow-2xl border border-stone-800">
              <Image
                src="/fogao-lenha.png"
                alt="Buffet no fogão a lenha"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
                quality={90}
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif text-[#D4AF37]">Um Banquete de Memórias</h3>
                <p className="text-stone-300 text-lg leading-relaxed">
                  Nosso buffet é servido diretamente no fogão a lenha, mantendo a comida quentinha e com aquele gostinho
                  defumado irresistível. Torresmo crocante, feijão tropeiro, carnes suculentas e, claro, o famoso angu
                  mineiro.
                </p>
                <ul className="space-y-4">
                  {[
                    "Ingredientes frescos e locais",
                    "Receitas de família passadas por gerações",
                    "Doces caseiros em compota",
                    "Café coado na hora",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-stone-300">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className="bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 border-none px-8 py-6 text-lg mt-4"
              >
                <Link href="https://wa.me/5531996481646" target="_blank">
                  Reservar Almoço
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Acomodações e Piscina */}
      <section id="hospedagem" className="min-h-screen flex items-center py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-sm font-semibold text-stone-500">Descanso e Lazer</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">
              Seu Refúgio na Lapinha
            </h2>
            <p className="max-w-2xl mx-auto text-stone-600 text-lg">
              Desconecte-se da rotina e aproveite a simplicidade com conforto.
            </p>
          </div>

          <div className="space-y-24">
            {/* Piscina Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-xl">
                <Image src="/piscina.jpeg" alt="Piscina ao ar livre" fill className="object-cover" quality={85} />
              </div>
              <div className="space-y-6 lg:pl-10">
                <h3 className="text-3xl font-serif font-bold text-stone-800">Piscina e Natureza</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Relaxe em nossa piscina cercada pelo verde e pelo canto dos pássaros. O ambiente perfeito para se
                  refrescar nos dias de sol, ler um livro à sombra das árvores ou simplesmente não fazer nada.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-stone-700">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                    <span>Área Verde</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                    <span>Espreguiçadeiras</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quartos Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6 lg:pr-10">
                <h3 className="text-3xl font-serif font-bold text-stone-800">Suítes Aconchegantes</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Nossas acomodações são preparadas para garantir uma noite de sono tranquila. Com decoração rústica e
                  todo o conforto que você precisa após um dia de passeio na Lapinha.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-stone-700">
                    <Wifi className="w-5 h-5 text-[#D4AF37]" />
                    <span>Wi-Fi Grátis</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <Coffee className="w-5 h-5 text-[#D4AF37]" />
                    <span>Café da Manhã</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 border-stone-800 text-stone-800 hover:bg-stone-100 bg-transparent"
                >
                  <Link href="https://wa.me/5531996481646" target="_blank">
                    Ver Disponibilidade
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="relative h-[300px] rounded-sm overflow-hidden shadow-lg mt-8">
                  <Image src="/quarto-casal.jpeg" alt="Quarto de Casal" fill className="object-cover" quality={85} />
                </div>
                <div className="relative h-[300px] rounded-sm overflow-hidden shadow-lg mb-8">
                  <Image src="/quarto-familia.jpeg" alt="Quarto Família" fill className="object-cover" quality={85} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="min-h-screen flex items-center py-16 md:py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">O que dizem nossos hóspedes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <Card key={i} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex text-[#D4AF37] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-stone-900">{testimonial.name}</p>
                    <p className="text-xs text-stone-400 mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section id="contato" className="min-h-screen flex items-center py-16 md:py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-white mb-8">Venha nos visitar</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-sm">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Endereço</h3>
                    <p className="text-stone-400">R. João Francisco Avelar, 94</p>
                    <p className="text-stone-400">Lapinha, Lagoa Santa - MG, 33242-000</p>
                    <a
                      href="https://www.google.com/maps/place/Restaurante%2FPousada+Cantinho+da+Luci/@-19.5648708,-43.9476011,17z/data=!3m1!4b1!4m9!3m8!1s0xa6657c33c5f925:0x3c11a77f2d93a862!5m2!4m1!1i2!8m2!3d-19.5648759!4d-43.9450262!16s%2Fg%2F1q5grvc4v?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="text-[#D4AF37] hover:text-[#B5952F] text-sm mt-2 inline-block underline underline-offset-4"
                      rel="noreferrer"
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-sm">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Contato e Reservas</h3>
                    <p className="text-stone-400 text-lg">31 996481646</p>
                    <p className="text-stone-500 text-sm mt-1">Atendimento via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-sm">
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horário de Funcionamento</h3>
                    <p className="text-stone-400">Restaurante: Sábado, Domingo e Feriados</p>
                    <p className="text-stone-400">Pousada: Todos os dias (com reserva)</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg h-14"
                >
                  <Link href="https://wa.me/5531996481646" target="_blank">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chamar no WhatsApp
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg h-14"
                >
                  <Link href="https://instagram.com/cantinhodoluci" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 w-5 h-5" />
                    Veja nosso Instagram
                  </Link>
                </Button>
              </div>
            </div>

            <div className="h-[400px] rounded-sm overflow-hidden border border-stone-700 shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.117187834516!2d-43.94760112396863!3d-19.56487588173495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6657c33c5f925%3A0x3c11a77f2d93a862!2sRestaurante%2FPousada%20Cantinho%20da%20Luci!5e0!3m2!1spt-BR!2sbr!4v1709320000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Cantinho da Luci. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
