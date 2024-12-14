"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

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
  return (
    <TableBody>
      {data.map((data: any) => (
        <TableRow key={data.userId}>
          <TableCell className="font-medium min-w-[150px]">{data.tid}</TableCell>
          <TableCell>{data.food}</TableCell>
          <TableCell className="min-w-[100px]">{data.kcal}</TableCell>
          <TableCell className="min-w-[100px]">{data.protein}</TableCell>
          <TableCell className="min-w-[100px]">{data.kolydrate}</TableCell>
          <TableCell className="min-w-[100px]">{data.fett}</TableCell>
          <TableCell className="max-w-[300px]">{data.notes}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
