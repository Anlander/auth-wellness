"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-full shadow-sm">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href="/admin">Medlemmar</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Klient info</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/diet-plan" ? "default" : "outline"}
        >
          <Link href="/diet-plan">Diet plan</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Server</Link>
        </Button>
        {/* <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Inställningar</Link>
        </Button> */}
      </div>
      <UserButton />
    </nav>
  );
};
