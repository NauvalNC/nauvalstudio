"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home", openNewTab: false },
    { href: "/commission", label: "Commission", openNewTab: false },
    { href: "/shop", label: "Shop", openNewTab: false },
    { href: "/contact", label: "Contact", openNewTab: false },
    {
      href: "https://www.youtube.com/@NauvalStudio",
      label: "YouTube",
      openNewTab: true,
    },
    {
      href: "https://www.patreon.com/c/nauvalnever",
      label: "Patreon",
      openNewTab: true,
    },
  ];

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto w-full px-8 py-8">
        <Link href="/" passHref>
          <img src="../logos/logo.png" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden lg:flex">
          {links.map((link, index) => (
            <Link
              href={link.href}
              passHref
              key={index}
              target={link.openNewTab ? "_blank" : "_self"}
              rel={link.openNewTab ? "noopener noreferrer" : undefined}
            >
              <Button
                variant="link"
                className={pathname === link.href ? "underline" : ""}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="lg:hidden"
              rightIcon={<GiHamburgerMenu />}
            >
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {links.map((link, index) => (
              <DropdownMenuItem key={index} className="p-0">
                <Link
                  className="w-full"
                  href={link.href}
                  target={link.openNewTab ? "_blank" : "_self"}
                  rel={link.openNewTab ? "noopener noreferrer" : undefined}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === link.href
                        ? "bg-accent text-accent-foreground dark:bg-accent/50"
                        : ""
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
