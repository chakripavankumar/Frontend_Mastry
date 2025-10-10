import Image from "next/image";
import { Container } from "./container/container";
import Hero from "./container/hero";
import Navbar from "./container/navbar";

export default function Home() {
  return (
    <div className="[ background:radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)] relative flex h-screen flex-col items-center">
      <div className="absolute inset-0 mx-auto h-full w-full max-w-7xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-x-0 z-0 h-px w-full bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent">
          <div className="mx-auto w-full max-w-7xl p-6">
            <Image
              src="/hero-ui-v5.webp"
              alt="banner"
              width={1000}
              height={1000}
              className="w-full rounded-2xl border-neutral-200 to-100% mask-b-from-0% object-cover object-left-top shadow-md"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
