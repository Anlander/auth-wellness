"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Modal } from "../ui/modal";
import { Button } from "@/components/ui/button";

interface TableChildrenProps {
  data: any;
}

export const DietPlanUser = ({ data }: TableChildrenProps) => {
  return (
    <TableBody className="w-full">
      {data?.map((item: any) => (
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
          <TableCell>
            <Modal mode="default" asChild kostSchema={item.notes}>
              <Button variant="default" className="">Se anteckningar</Button>
            </Modal>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
