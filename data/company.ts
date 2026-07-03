export const company = {
  name: "Lexuz Tours & Adventures",
  shortName: "Lexuz Tours",
  mission: "Premium, safe and memorable travel experiences across Pakistan.",
  phone: "0309 9318249",
  whatsapp: "923099318249",
  website: "https://www.lexuztours.com",
  email: "info@lexuztours.com",
  maps: "https://maps.app.goo.gl/SmeRxsERfqpMbcz58?g_st=ic",
  address: "Office No 6, 1st Floor, Mustafa Plaza, 6th Road, D Block, Satellite Town, Rawalpindi, Pakistan",
  founded: 2018
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
