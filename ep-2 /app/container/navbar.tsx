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
    <div className="flex items-center justify-between py-4 px-4">
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
            className="text-neutral-800 font-medium hover:text-neutral-600 transition duration-200"
          >
            {" "}
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579F4] px-4 py-2 text-white rounded-xl shadow-lg text-shadow-md tracking-wide">
          {" "}
          Start Free Trail
        </button>
      </div>
    </div>
  );
};

export default Navbar;
