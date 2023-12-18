import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button size="sm" variant="ghost">
          Privacy Policy
        </Button>
        <Button size="sm" variant="ghost">
          Contact Us
        </Button>
        <Button size="sm" variant="ghost">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
