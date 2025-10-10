import React from "react";

const Navbar = () => {
  const links = [
    { title: "Guide", href: "#" },
    {
      title: "Components",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];
  return (
    <div className="navbar-root">
      <div className="logo">Finetech</div>
      <div className="links">
        {links.map((link) => {
          return (
            <a className="link-tems" key={link.title} href={link.href}>
              {link.title}
            </a>
          );
        })}
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};
export default Navbar;
