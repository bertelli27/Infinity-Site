import { Hero } from "@/components/home/Hero";
import { SecaoApps } from "@/components/home/SecaoApps";
import { ComoFunciona } from "@/components/home/ComoFunciona";
import { PorQue } from "@/components/home/PorQue";
import { TutoriaisDestaque } from "@/components/home/TutoriaisDestaque";
import { Faq } from "@/components/home/Faq";
import { CtaFinal } from "@/components/home/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <SecaoApps />
      <ComoFunciona />
      <PorQue />
      <TutoriaisDestaque />
      <Faq />
      <CtaFinal />
    </>
  );
}
