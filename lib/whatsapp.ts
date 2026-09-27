const NUMERO_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagensWhatsApp = {
  generico: () => "Olá! Vim pelo site e quero saber mais sobre os apps.",
  app: (nome: string) => `Olá! Vim pelo site e tenho interesse no ${nome}.`,
  testeGratis: (nome: string) => `Olá! Vim pelo site e quero testar o ${nome}.`,
  tutorial: (titulo: string) =>
    `Olá! Vim pelo site e preciso de ajuda com: ${titulo}.`,
};
