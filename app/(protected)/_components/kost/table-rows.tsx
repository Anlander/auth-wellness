import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TableComponentProps {
  children?: React.ReactNode;
}

export const TableComponent = ({ children }: TableComponentProps) => {
  return (
    <Table className="overflow-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Tid</TableHead>
          <TableHead>Måltid/Dryck</TableHead>
          <TableHead>Kcal</TableHead>
          <TableHead>Proteiner(g)</TableHead>
          <TableHead>Kolhydrate</TableHead>
          <TableHead>Fett</TableHead>
          <TableHead className="text-left">Förklaringar</TableHead>
        </TableRow>
      </TableHeader>
      {children}
    </Table>
  );
};
