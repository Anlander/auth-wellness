import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TableComponentProps {
  children?: React.ReactNode;
  classname?: string;
}

export const TableComponent = ({
  children,
  classname,
}: TableComponentProps) => {
  return (
    <Table className={`overflow-auto ${classname}`}>
      <TableHeader>
        <TableRow className="primary uppercase">
          <TableHead className="w-[100px] primary">Tid</TableHead>
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
