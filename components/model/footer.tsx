import Link from "next/link";
import { FaDiscord, FaPatreon, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";

const Footer = () => {
  const links = [
    { href: "https://www.patreon.com/c/nauvalnever", icon: <FaPatreon /> },
    { href: "https://x.com/nauvalnever", icon: <FaXTwitter /> },
    { href: "https://discord.gg/nauvernever", icon: <FaDiscord /> },
    { href: "https://www.youtube.com/@NauvalStudio", icon: <FaYoutube /> },
    { href: "mailto:nauvernever@gmail.com", icon: <RiMailFill /> },
  ];

  return (
    <footer className="bg-primary">
      <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto w-full text-white px-8 py-8 gap-8 md:gap-12">
        <div className="flex flex-col text-center md:text-left">
          <p>Build with love by Nauval</p>
          <p>© Copyright 2025, All right reserved</p>
        </div>
        <div className="flex flex-row text-2xl gap-6 md:ml-auto">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <Link href="/" passHref>
          <img className="h-8 hidden md:block" src="../logo_white.png" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
