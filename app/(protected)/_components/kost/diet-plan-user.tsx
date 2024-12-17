"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

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
          <TableCell className="min-w-[150px] font-mono">{item.kcal}</TableCell>
          <TableCell className="min-w-[150px] font-mono">
            {item.protein}
          </TableCell>
          <TableCell className="min-w-[150px] font-mono">
            {item.kolydrate}
          </TableCell>
          <TableCell className="min-w-[100px] font-mono">{item.fett}</TableCell>
          <TableCell className="max-w-[500px] italic">{item.notes}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
