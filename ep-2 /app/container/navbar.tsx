import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/priceing",
      title: "Priceing",
    },
    {
      href: "/login",
      title: "Login",
    },
  ];
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Link href="/">
        <Image
          draggable={false}
          loading="lazy"
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="font-medium text-neutral-800 transition duration-200 hover:text-neutral-600"
          >
            {" "}
            {link.title}
          </Link>
        ))}
        <button className="rounded-xl bg-[#2579F4] px-4 py-2 tracking-wide text-white shadow-lg text-shadow-md">
          {" "}
          Start Free Trail
        </button>
      </div>
    </div>
  );
};

export default Navbar;
