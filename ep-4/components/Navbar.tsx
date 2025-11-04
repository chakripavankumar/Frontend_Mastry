"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="md:shadow-aceternity relative mx-auto flex max-w-4xl items-center justify-between bg-white px-2 py-2 md:mt-4 md:rounded-full">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="mr-10 hidden items-center gap-4 text-sm text-neutral-500 md:flex">
          {links.map((link, index) => (
            <Link
              className="hover:text-neutral-900"
              href={link.href}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <IconMenu2 />
        </button>
        {open && (
          <div className="shadow-aceternity absolute inset-x-0 top-15 mx-auto max-w-[95%] rounded-md bg-white md:hidden">
            <div className="flex flex-col items-start gap-4 p-4 text-sm text-neutral-500">
              {links.map((link, index) => (
                <Link
                  className="hover:text-neutral-900"
                  href={link.href}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
