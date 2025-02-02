"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { KostSchema } from "../kost/kost-schema";
import { KostSchemaForm } from "@/components/kost/kost-schema-form";
import { KostSchemaUpdate } from "../kost/kost-form-update";

interface ModalButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "kostschema" | "kostForm" | "kostUpdate" | "default";
  asChild?: boolean;
  kostSchema?: any;
  selectedUser?: any;
  selectedKost?: any;
}

export const Modal = ({
  children,
  mode = "modal",
  asChild,
  selectedUser,
  kostSchema,
}: ModalButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "kostForm") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 bg-transparent w-full">
          <KostSchemaForm selectedUser={selectedUser} />
        </DialogContent>
      </Dialog>
    );
  }

  if (mode === "kostschema") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 bg-transparent w-full min-w-[80%]">
          <KostSchema data={kostSchema} selectedUser={selectedUser} />
        </DialogContent>
      </Dialog>
    );
  }

  if (mode === "kostUpdate") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 bg-transparent w-full">
          <KostSchemaUpdate data={kostSchema} />
        </DialogContent>
      </Dialog>
    );
  }

  if (mode === "default") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 bg-transparent w-full">
          <div className="bg-white text-lg px-10 italic py-20">{kostSchema}</div>
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
