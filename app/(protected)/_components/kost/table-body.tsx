"use client";

import { deleteKostById } from "@/actions/delete-kost";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CircleBackslashIcon } from "@radix-ui/react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { toast } from "sonner";
import { Modal } from "../ui/modal";
import { Button } from "@/components/ui/button";

interface TableChildrenProps {
  data: {
    food: string;
    fett: string;
    kcal: string;
    kolydrate: string;
    tid: string;
    protein: string;
    notes: string;
  }[];
}

export const TableBodyChildren = ({ data }: TableChildrenProps) => {
  const removeKost = (id: string) => {
    const check = window.confirm("Vill du verkligen ta bort denna användaren?");
    if (!check) return null;
    deleteKostById(id).then((data: any) => {
      if (data?.success) {
        toast.error(data?.success);
      } else {
        toast.error(data?.error);
        console.log("Error");
      }
    });
  };

  return (
    <TableBody>
      {data.map((item: any) => (
        <TableRow key={item.userId}>
          <TableCell className="font-medium min-w-[150px] text-[12px]">
            {item.tid}
          </TableCell>
          <TableCell className="font-semibold text-[15px]">
            {item.food}
          </TableCell>
          <TableCell className="font-mono">{item.kcal}</TableCell>
          <TableCell className="font-mono">{item.protein}</TableCell>
          <TableCell className="font-mono">{item.kolydrate}</TableCell>
          <TableCell className="font-mono">{item.fett}</TableCell>
          <TableCell align="right">
            <Modal mode="default" asChild kostSchema={item.notes}>
              <Button variant="outline">Visa</Button>
            </Modal>
          </TableCell>
          <TableCell align="right" className="flex gap-2 justify-end">
            <Modal mode="kostUpdate" kostSchema={item} selectedKost={item.id}>
              <Button variant="outline">
                <FaPencilAlt />
              </Button>
            </Modal>
            <Button variant={"destructive"} onClick={() => removeKost(item.id)}>
              <CircleBackslashIcon />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
