"use client";

import { Button } from "@/components/ui/button";
import { TableComponent } from "./table-rows";
import { TableBodyChildren } from "./table-body";
import { Modal } from "../ui/modal";

interface KostSchemaProps {
  data: any;
  selectedUser?: any;
}

export const KostSchema = ({ data, selectedUser }: KostSchemaProps) => {
  return (
    <div className="w-full bg-white pt-10 pb-24 px-5">
      <TableComponent>
        <TableBodyChildren data={data} />
      </TableComponent>
      <Modal mode="kostForm" selectedUser={selectedUser}>
        <Button className="absolute bottom-5 right-5">Add</Button>
      </Modal>
    </div>
  );
};
