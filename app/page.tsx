import Image from "next/image"
import { MapPin, Phone, Instagram, Clock, Wifi, Coffee, MessageCircle, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"

const foodItems = [
  {
    src: "/feijao-tropeiro-mineiro-food.jpg",
    alt: "Feijão Tropeiro Mineiro",
    label: "Feijão Tropeiro",
  },
  {
    src: "/frango-com-quiabo-mineiro.jpg",
    alt: "Frango com Quiabo",
    label: "Frango com Quiabo",
  },
  {
    src: "/cafe-da-manha-mineiro-pao-de-queijo.jpg",
    alt: "Café da Manhã com Pão de Queijo",
    label: "Café da Manhã",
  },
]

const roomImages = [
  { src: "/quarto-casal.jpeg", alt: "Quarto de Casal" },
  { src: "/quarto-familia.jpeg", alt: "Quarto Família" },
  { src: "/banheiro.jpeg", alt: "Banheiro" },
  { src: "/cozy-bedroom-rustic.jpg", alt: "Ambiente rústico e aconchegante" },
]

const testimonials = [
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
]

export default function LandingPage() {
  return (
    <div className="flex flex-col font-sans text-stone-800 bg-stone-900 w-full min-h-screen">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/entrada-cantinho.jpeg"
            alt="Entrada do Cantinho da Luci"
            fill
            className="object-cover brightness-[0.55]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

        <div className="relative z-10 text-center text-white px-5 sm:px-8 max-w-4xl mx-auto w-full">
          <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            Restaurante &amp; Pousada · Lapinha da Serra
          </p>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 sm:mb-5 tracking-tight drop-shadow-2xl leading-tight">
            Cantinho da Luci
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl mb-8 sm:mb-10 font-light text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-lg">
            Onde a gastronomia mineira encontra o aconchego da natureza.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center max-w-xs xs:max-w-none mx-auto">
            <a
              href="https://wa.me/5531996481646"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 font-bold px-8 py-4 text-base sm:text-lg rounded-xl transition-all duration-300 shadow-2xl touch-manipulation min-h-[52px]"
            >
              Fazer Reserva
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center bg-white/15 backdrop-blur-sm border-2 border-white/70 text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-base sm:text-lg rounded-xl transition-all duration-300 shadow-xl touch-manipulation font-semibold min-h-[52px]"
            >
              Ver Cardápio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 animate-bounce pointer-events-none">
          <span className="text-[10px] tracking-widest uppercase">Conheça</span>
          <div className="w-px h-6 bg-white/40 rounded-full" />
        </div>
      </section>

      {/* ─── GASTRONOMIA ─── */}
      <section id="menu" className="py-20 sm:py-24 md:py-32 bg-stone-900 text-stone-100 relative overflow-hidden w-full">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <Image src="/wood-texture-dark.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-bold text-[#D4AF37]">
              Sabor Inconfundível
            </span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white">
              O Fogão a Lenha
            </h2>
            <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto rounded-full" />
            <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed pt-1">
              A verdadeira culinária raiz, preparada lentamente para apurar os sabores e aromas que só Minas Gerais tem.
            </p>
          </div>

          {/* Main feature */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-10 sm:mb-14">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-stone-700/40">
              <Image
                src="/fogao-lenha.png"
                alt="Buffet no fogão a lenha"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
            <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif text-[#D4AF37] font-bold leading-snug">
                Um Banquete de Memórias
              </h3>
              <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Nosso buffet é servido diretamente no fogão a lenha, mantendo a comida quentinha e com aquele gostinho
                defumado irresistível. Torresmo crocante, feijão tropeiro, carnes suculentas e, claro, o famoso angu
                mineiro.
              </p>
              <ul className="space-y-3 pt-1">
                {[
                  "Ingredientes frescos e locais",
                  "Receitas de família passadas por gerações",
                  "Doces caseiros em compota",
                  "Café coado na hora",
                ].map((item) => (
                  <li key={item} className="flex items-center text-stone-200 text-sm sm:text-base gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5531996481646"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 font-bold px-8 py-4 text-sm sm:text-base rounded-xl shadow-xl transition-all duration-300 touch-manipulation min-h-[52px] w-full sm:w-auto"
              >
                Reservar Almoço
              </a>
            </div>
          </div>

          {/* Food gallery strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {foodItems.map((item) => (
              <div key={item.src} className="group relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 400px"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 text-white font-semibold text-xs sm:text-sm leading-tight drop-shadow-md">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOBRE A LUCI ─── */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#1a1208] w-full overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
            <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[3/4] max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/luci-portrait-kitchen.jpg"
                alt="Luci na cozinha"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 85vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/50 to-transparent" />
            </div>
            <div className="space-y-5 sm:space-y-6 text-stone-100">
              <span className="uppercase tracking-widest text-xs sm:text-sm font-bold text-[#D4AF37]">
                A Anfitriã
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Feito com amor,
                <br />
                do jeito mineiro
              </h2>
              <div className="w-16 h-[3px] bg-[#D4AF37] rounded-full" />
              <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Luci cuida de cada detalhe com a dedicação de quem cozinha para a própria família. Cada prato é uma
                memória afetiva — temperado com carinho e preparado com ingredientes escolhidos a dedo, direto do campo.
              </p>
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                Há mais de 20 anos recebendo visitantes em Lapinha da Serra, o Cantinho da Luci se tornou uma referência
                de hospitalidade mineira genuína.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-stone-400 text-sm">+200 avaliações 5 estrelas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACOMODAÇÕES ─── */}
      <section id="hospedagem" className="py-20 sm:py-24 md:py-32 bg-stone-50 w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-bold text-stone-500">
              Descanso e Lazer
            </span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif font-bold text-stone-900">
              Seu Refúgio na Lapinha
            </h2>
            <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto rounded-full" />
            <p className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed pt-1">
              Desconecte-se da rotina e aproveite a simplicidade com conforto.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20 md:space-y-28">
            {/* Piscina */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/pool-luxury-nature.jpg"
                    alt="Piscina ao ar livre rodeada de natureza"
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-6 sm:mt-10">
                  <Image
                    src="/hammock-balcony-nature.jpg"
                    alt="Varanda com rede e natureza"
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 sm:space-y-5">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                  Piscina e Natureza
                </h3>
                <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Relaxe em nossa piscina cercada pelo verde e pelo canto dos pássaros. O ambiente perfeito para se
                  refrescar nos dias de sol, ler um livro à sombra das árvores ou simplesmente não fazer nada.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
                  {["Área Verde", "Espreguiçadeiras", "Varanda com Rede", "Trilhas Próximas"].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 text-stone-700 bg-stone-100 border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium"
                    >
                      <Star className="w-3 h-3 text-[#D4AF37] fill-current flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quartos */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="lg:order-1 space-y-4 sm:space-y-5">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                  Suítes Aconchegantes
                </h3>
                <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Nossas acomodações são preparadas para garantir uma noite de sono tranquila. Com decoração rústica e
                  todo o conforto que você precisa após um dia de passeio na Lapinha.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
                  {[
                    { icon: Wifi, label: "Wi-Fi Grátis" },
                    { icon: Coffee, label: "Café da Manhã" },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 text-stone-700 bg-stone-100 border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="pt-3">
                  <a
                    href="https://wa.me/5531996481646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-bold px-7 py-4 text-sm sm:text-base rounded-xl transition-all duration-300 touch-manipulation min-h-[52px] w-full sm:w-auto"
                  >
                    Ver Disponibilidade
                  </a>
                </div>
              </div>
              <div className="lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
                {roomImages.map((img, i) => (
                  <div
                    key={img.src}
                    className={`relative aspect-square rounded-xl overflow-hidden shadow-lg ${
                      i % 2 === 1 ? "sm:mt-8" : ""
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      quality={80}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ─── */}
      <section id="depoimentos" className="py-20 sm:py-24 md:py-32 bg-stone-100 w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-bold text-stone-500">Avaliações</span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif font-bold text-stone-900">
              O que dizem nossos hóspedes
            </h2>
            <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-stone-600 italic leading-relaxed text-sm sm:text-base flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-stone-900 text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTATO ─── */}
      <section id="contato" className="py-20 sm:py-24 md:py-32 bg-stone-900 text-white w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-bold text-[#D4AF37]">
              Localização
            </span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif font-bold text-white">
              Venha nos visitar
            </h2>
            <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Info */}
            <div className="space-y-6 sm:space-y-7">
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-xl flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">Endereço</h3>
                    <p className="text-stone-400 text-sm sm:text-base">R. João Francisco Avelar, 94</p>
                    <p className="text-stone-400 text-sm sm:text-base">Lapinha, Lagoa Santa - MG, 33242-000</p>
                    <a
                      href="https://www.google.com/maps/place/Restaurante%2FPousada+Cantinho+da+Luci/@-19.5648708,-43.9476011,17z/data=!3m1!4b1!4m9!3m8!1s0xa6657c33c5f925:0x3c11a77f2d93a862!5m2!4m1!1i2!8m2!3d-19.5648759!4d-43.9450262!16s%2Fg%2F1q5grvc4v?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#D4AF37] hover:text-[#F0C84A] text-sm mt-2 inline-block underline underline-offset-4 touch-manipulation"
                    >
                      Ver no Google Maps ↗
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-xl flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">Contato e Reservas</h3>
                    <p className="text-stone-400 text-base sm:text-lg">(31) 99648-1646</p>
                    <p className="text-stone-500 text-xs sm:text-sm mt-1">Atendimento via WhatsApp</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-800 rounded-xl flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">Horário de Funcionamento</h3>
                    <p className="text-stone-400 text-sm sm:text-base">Restaurante: Sábado, Domingo e Feriados</p>
                    <p className="text-stone-400 text-sm sm:text-base">Pousada: Todos os dias (com reserva)</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/5531996481646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white font-bold text-sm sm:text-base py-4 px-4 rounded-xl shadow-lg transition-all duration-300 touch-manipulation min-h-[52px]"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  Chamar no WhatsApp
                </a>
                <a
                  href="https://instagram.com/cantinhodaluci1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white font-bold text-sm sm:text-base py-4 px-4 rounded-xl shadow-lg transition-all duration-300 touch-manipulation min-h-[52px]"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  Ver no Instagram
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="h-[280px] sm:h-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-stone-700/50 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.117187834516!2d-43.94760112396863!3d-19.56487588173495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6657c33c5f925%3A0x3c11a77f2d93a862!2sRestaurante%2FPousada%20Cantinho%20da%20Luci!5e0!3m2!1spt-BR!2sbr!4v1709320000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-stone-800 text-center">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} Cantinho da Luci. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FLOATING WHATSAPP ─── */}
      <a
        href="https://wa.me/5531996481646"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1ea952] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 touch-manipulation"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}
