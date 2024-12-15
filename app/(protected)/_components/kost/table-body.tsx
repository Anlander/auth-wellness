"use client";

import { deleteKostById } from "@/actions/delete-kost";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CircleBackslashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

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
    const check = window.confirm("Are you sure you want to delete this?");
    if (!check) return null;
    deleteKostById(id).then((data: any) => {
      if (data?.success) {
        console.log("test");
        toast.error(data?.success);
      } else {
        toast.error(data?.error);
        console.log("no working");
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
          <TableCell className="min-w-[100px] font-mono">{item.kcal}</TableCell>
          <TableCell className="min-w-[100px] font-mono">
            {item.protein}
          </TableCell>
          <TableCell className="min-w-[100px] font-mono">
            {item.kolydrate}
          </TableCell>
          <TableCell className="min-w-[100px] font-mono">{item.fett}</TableCell>
          <TableCell className="max-w-[300px] italic">{item.notes}</TableCell>
          <TableCell className="max-w-[20px]">
            <button onClick={() => removeKost(item.id)}>
              <CircleBackslashIcon color="red" />
            </button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
