"use client";
import React from "react";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items w-full p-6 dark:bg-[#1f1f1f]",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between flex items-center w-full gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
