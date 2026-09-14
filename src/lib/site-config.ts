/**
 * Fonte única de verdade para dados do negócio (NAP, contato, redes).
 * Usado pelos componentes de metadata e pelos builders de JSON-LD.
 */

export const SITE_URL = "https://juliodechante.com.br";

export const SITE_NAME = "Julio Dechante | Mestre em Hipnoterapia Avançada";

export const business = {
  legalName: "Julio Dechante Hipnoterapia",
  displayName: "Julio Dechante",
  tagline: "Mestre em Hipnoterapia Avançada",
  founderName: "Júlio Dechante",
  activeSince: 2019, // +7 anos de atuação (referência: 2026)
  peopleServed: 5000,
  methodName: "Método SER",
  description:
    "Especialista em tratar a ansiedade por meio da Hipnoterapia Avançada, criador do exclusivo Método SER, com mais de 5.000 pessoas tratadas.",
  email: "contato@juliodechante.com.br",
  phoneDisplay: "+55 66 99971-1932",
  // E.164 sem símbolos, usado em tel: e wa.me
  phoneE164: "5566999711932",
  address: {
    streetAddress: "Av. das Embaúbas, 2065, Piso 1, Sala 9 - St. Comercial, Preventec",
    addressLocality: "Sinop",
    addressRegion: "MT",
    postalCode: "78550-108",
    addressCountry: "BR",
  },
  addressDisplay:
    "Av. das Embaúbas, 2065, Piso 1, Sala 9 - St. Comercial, Preventec - Sinop-MT, 78550-108",
  serviceArea: ["Sinop-MT", "Todo o Brasil (online)", "Atendimento internacional (online)"],
  // Formato Schema.org DayOfWeek + horário 24h
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "23:00" },
    { days: ["Friday"], opens: "08:00", closes: "23:30" },
    { days: ["Sunday"], opens: "09:00", closes: "23:00" },
  ],
  closedOn: ["Saturday"],
  social: {
    instagram: "https://www.instagram.com/juliodechanteofc/",
    youtube: "https://www.youtube.com/@juliodechantehipnoterapeut1533/videos",
    googleProfile: "https://share.google/mU7OWk7iC0iFGcjdb",
  },
  podcasts: [
    "https://www.youtube.com/live/Ecsg06K4Ro4",
    "https://youtu.be/5hTTSAim1j8",
    "https://www.youtube.com/live/x_a3jG8nBjQ",
  ],
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.phoneE164}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Júlio! Vim pelo site e gostaria de agendar uma sessão de hipnoterapia.";
