"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 py-2  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem setActive={setActive} active={""} item="Home"></MenuItem>
        </Link>

        <Link href={"#"}>
          <MenuItem setActive={setActive} active={active} item="Our Cources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
              <HoveredLink href="/courses">Advance Composition</HoveredLink>
              <HoveredLink href="/courses">Song Writing</HoveredLink>
              <HoveredLink href="/courses">Music Production </HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={""}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
