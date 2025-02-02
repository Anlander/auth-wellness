"use client";

import { Button } from "@/components/ui/button";
import { TableComponent } from "./table-rows";
import { TableBodyChildren } from "./table-body";
import { Modal } from "../ui/modal";

interface KostSchemaProps {
  data: any;
  selectedUser?: any;
  userInfo?: any;
}

export const KostSchema = ({
  data,
  selectedUser,
  userInfo,
}: KostSchemaProps) => {
  return (
    <div className="w-full bg-white pt-10 pb-24 px-2">
      <TableComponent>
        <TableBodyChildren data={data} />
      </TableComponent>
      <Modal mode="kostForm" selectedUser={selectedUser}>
        <Button className="absolute bottom-5 right-16">Addera måltid</Button>
      </Modal>
      <div className="text-xs flex gap-5 absolute left-16 bottom-5">
        <span>
          Schema för: <strong>{userInfo.name}</strong>
        </span>
        <span>
          Email: <strong className="lowercase">{userInfo.email}</strong>
        </span>
      </div>
    </div>
  );
};
