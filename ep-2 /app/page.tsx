import Image from "next/image";
import { Container } from "./container/container";
import Hero from "./container/hero";
import Navbar from "./container/navbar";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center h-screen relative  [
    background:radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]"
    >
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full ">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full  ">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0">
          <div className="max-w-7xl w-full mx-auto p-6">
            <Image
              src="/hero-ui-v5.webp"
              alt="banner"
              width={1000}
              height={1000}
              className="rounded-2xl w-full  object-cover object-left-top border-neutral-200 shadow-md mask-b-from-0% to-100%"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
