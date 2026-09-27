import { Accordion } from "@/components/ui/Accordion";

const PERGUNTAS = [
  {
    pergunta: "O que é um código de ativação?",
    resposta:
      "É o código que libera o acesso ao app depois da instalação. Você recebe o código pelo WhatsApp após a confirmação do pagamento.",
  },
  {
    pergunta: "Quanto tempo dura o código?",
    resposta: "Cada código de ativação tem duração de cerca de 30 dias.",
  },
  {
    pergunta: "Quem tem direito ao teste grátis?",
    resposta:
      "O teste grátis, quando o app oferece, é disponível para novos usuários na primeira instalação do aplicativo.",
  },
  {
    pergunta: "Quais formas de pagamento vocês aceitam?",
    resposta: "Aceitamos Pix e cartão.",
  },
  {
    pergunta: "Em quais aparelhos os apps funcionam?",
    resposta:
      "Os apps funcionam em TV Box, Fire Stick, Android TV e celulares Android. A compatibilidade de cada app está detalhada na página do respectivo aplicativo.",
  },
  {
    pergunta: "Como faço para renovar?",
    resposta:
      "É só chamar a gente no WhatsApp quando o período estiver perto de acabar. Te ajudamos com o pagamento e o novo código.",
  },
  {
    pergunta: "Os apps são oficiais?",
    resposta:
      "Os apps são plataformas de terceiros, sujeitas a atualizações e mudanças fora do nosso controle. A Infinity Recargas revende códigos de ativação e presta suporte na instalação e no uso. As marcas e os aplicativos pertencem aos respectivos donos.",
  },
  {
    pergunta: "O que acontece se um app parar de funcionar?",
    resposta:
      "Ainda estamos definindo a política para esse cenário. Se isso acontecer, fale com o nosso suporte pelo WhatsApp para saber as opções disponíveis.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="border-t border-cinza-escuro scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center font-orbitron text-2xl text-cinza-claro sm:text-3xl">
          Dúvidas frequentes
        </h2>

        <div className="mt-10">
          <Accordion itens={PERGUNTAS} />
        </div>
      </div>
    </section>
  );
}
