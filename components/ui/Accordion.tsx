import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type ItemAccordion = {
  pergunta: string;
  resposta: ReactNode;
};

type AccordionProps = {
  itens: ItemAccordion[];
};

export function Accordion({ itens }: AccordionProps) {
  return (
    <div className="divide-y divide-cinza-escuro">
      {itens.map((item) => (
        <details key={item.pergunta} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-cinza-claro marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="font-semibold">{item.pergunta}</span>
            <ChevronDown
              aria-hidden="true"
              size={20}
              className="shrink-0 text-cinza-claro/60 transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-cinza-claro/70">
            {item.resposta}
          </div>
        </details>
      ))}
    </div>
  );
}
