import Image from "next/image";
import performanceSrc from "../../public/performance.jpg";
import Hero from "../../components/hero";

export default function Home() {
  return (
    <Hero imgUrl={performanceSrc} altTxt="Home" content="Performance ~~~"/>
  );
}