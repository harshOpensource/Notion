import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils"; // cn is a function that combines classnames

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/images/logo.svg"
        width={40}
        height={40}
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/images/logo-dark.svg"
        width={40}
        height={40}
        alt="logo"
        className="hidden dark:block"
      />
      <p className={cn("font-bold", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;
