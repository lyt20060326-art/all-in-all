import Image from "next/image";
import reliabilitysrc from "../../public/reliability.png";
import Hero from "../../components/hero";

export default function Home() {
  return (
    <Hero imgUrl={reliabilitysrc} altTxt="reliability" content="Reliability ~~~"/>
  );
}