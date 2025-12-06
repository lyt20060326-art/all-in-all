import Image from "next/image";
import homeSrc from "../public/home.jpg";
import Hero from "../components/hero";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Page',
}

export default function Home() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home" content="welcome to our website"/>
  );
}