import Link from "next/link";
import { Banner } from "@/components/banner/Banner";
import { Somos } from "@/components/Somos/Somos";
import { Servicios } from "@/components/Servicios/Servicios";
import { Proyectos } from "@/components/proyectos/proyctos";
export default function Home() {
  return (
    <main>
      <Banner />
      <Somos />
      <Servicios />
      <Proyectos />
    </main>
  );
}
