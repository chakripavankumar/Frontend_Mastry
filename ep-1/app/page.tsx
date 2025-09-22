import { Container } from "./components/container";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="layout">
      <Container>
        <div className="left-line" />
        <div className="Right-line" />
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-img-conatiner">
        <div className="hori-line"></div>
        <Image
          src="/hero-ui-v5.webp"
          alt="Hero UI"
          className="hero-img"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
