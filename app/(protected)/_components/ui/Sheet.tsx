"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { KostSchema } from "../kost/kost-schema";

interface SheetButtonProps {
  mode?: "sheet" | "default";
  asChild?: boolean;
  children: React.ReactNode;
  kostSchema?: any;
  selectedUser?: any;
  selectedKost?: any;
  userInfo?: any;
}

export const SheetComponent = ({
  children,
  asChild,
  selectedUser,
  kostSchema,
  userInfo,
  mode = "sheet",
}: SheetButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "sheet") {
    return (
      <Sheet>
        <SheetTrigger asChild={asChild}>{children}</SheetTrigger>
        <SheetContent className="min-w-[80%] p-10">
          <SheetHeader></SheetHeader>
          <KostSchema
            data={kostSchema}
            selectedUser={selectedUser}
            userInfo={userInfo}
          />
        </SheetContent>
      </Sheet>
    );
  }
  return <span className="cursor-pointer">{children}</span>;
};
