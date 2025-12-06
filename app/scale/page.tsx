import Image from "next/image";
import scaleSrc from "../../public/scale.webp";
import Hero from "../../components/hero";

export default function Home() {
  return (
    <Hero imgUrl={scaleSrc} altTxt="scale" content="Scale ~~~"/>
  );
}