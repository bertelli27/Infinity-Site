import { Tv, Box, Usb, Smartphone, MonitorSmartphone, type LucideIcon } from "lucide-react";

const ICONE_POR_DISPOSITIVO: Record<string, LucideIcon> = {
  "Android TV": Tv,
  "TV Box": Box,
  "Fire Stick": Usb,
  "Celular Android": Smartphone,
};

type DispositivosProps = {
  dispositivos: string[];
};

export function Dispositivos({ dispositivos }: DispositivosProps) {
  if (dispositivos.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-3" aria-label="Dispositivos compatíveis">
      {dispositivos.map((dispositivo) => {
        const Icone = ICONE_POR_DISPOSITIVO[dispositivo] ?? MonitorSmartphone;
        return (
          <li
            key={dispositivo}
            className="flex items-center gap-1.5 text-xs text-cinza-claro/70"
          >
            <Icone size={16} aria-hidden="true" />
            {dispositivo}
          </li>
        );
      })}
    </ul>
  );
}
