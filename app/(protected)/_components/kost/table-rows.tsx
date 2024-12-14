import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

interface TableComponentProps {
  children?: React.ReactNode;
}

export const TableComponent = ({ children }: TableComponentProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Tid</TableHead>
          <TableHead>Måltid/Dryck</TableHead>
          <TableHead>Kcal</TableHead>
          <TableHead>Proteiner(g)</TableHead>
          <TableHead>Kolhydrate</TableHead>
          <TableHead>Fett</TableHead>
          <TableHead className="text-right">Förklaringar</TableHead>
        </TableRow>
      </TableHeader>
      {children}
    </Table>
  );
};
