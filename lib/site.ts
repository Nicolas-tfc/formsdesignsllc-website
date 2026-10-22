export const SITE = {
  name: "Forms Designs LLC",
  shortName: "Forms Designs",
  url: process.env.SITE_URL ?? "https://formsdesigns.com",
  phone: "(908) 644-9819",
  phoneHref: "tel:+19086449819",
  phoneE164: "+1-908-644-9819",
  email: "formsdesignsllc@gmail.com",
  license: "NJ License #13VH09407200",
  address: {
    street: "67 Morris Ave",
    city: "Summit",
    region: "NJ",
    postalCode: "07901",
    country: "US",
  },
  geo: { latitude: 40.7127, longitude: -74.3465 },
  social: {
    facebook: "https://www.facebook.com/formsdesigns/",
    instagram: "https://www.instagram.com/formsdesigns/",
    maps: "https://maps.app.goo.gl/8y9zmMmTcLv9s5Z9A",
  },
  estimateHref: "/free-estimate/",
  mailTo: (process.env.MAIL_TO ?? "dev@thefloorcrew.co,formsdesignsllc@gmail.com")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean),
};

const UPLOADS = "https://formsdesigns.com/wp-content/uploads";

export const media = (path: string) => `${UPLOADS}/${path}`;

export const IMAGES = {
  logo: media("2024/02/COLOR-SOBRE-OSCURO-RECTANGULAR--e1708461603730-768x237.png"),
  favicon: media("2024/10/cropped-favicon-1-300x300.png"),
  og: media("2025/04/LOGOS-FORMS-DESIGN-1200.jpg"),
  hero: media("2024/09/banner-garage-scaled.webp"),
  closing: media("2024/09/banner-gallery-1024x768.webp"),
};
