"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { KostSchema } from "../kost/kost-schema";

interface ModalButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "kost";
  asChild?: boolean;
  kostSchema?: any;
}

export const Modal = ({
  children,
  mode = "modal",
  asChild,
  kostSchema,
}: ModalButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "kost") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 bg-transparent w-full">
          <KostSchema data={kostSchema} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
