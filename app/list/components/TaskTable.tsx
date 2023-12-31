"use client";

import * as React from "react";
import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { TodoType } from "../../../types";
import { Badge } from "../../../components/ui/badge";
import { format } from "date-fns";
import { TrashIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface TaskTableProps {
  tasks: TodoType[];
  setTasks: React.Dispatch<React.SetStateAction<TodoType[]>>;
  editTask: (id: string, value: string) => void;
  delTask: (id: string) => void;
}

const BadgeOption = ({ priority }: { priority: string }) => {
  const priorityColors: { [key: string]: string } = {
    High: "red",
    Normal: "yellow",
    Low: "green",
  };

  const color = priorityColors[priority].toString();

  return (
    <Badge
      className={cn(`rounded-xl hover:cursor-pointer`, {
        "bg-red-500 hover:bg-red-200": color === "red",
        "bg-yellow-500 hover:bg-yellow-200": color === "yellow",
        "bg-green-500 hover:bg-green-200": color === "green",
      })}
    >
      {priority}
    </Badge>
  );
};

const TaskTable = ({ tasks, setTasks, delTask, editTask }: TaskTableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<{
    [key: string]: any;
  }>({});

  const handleDeleteSelectedRows = () => {
    const selectedRows = table.getFilteredSelectedRowModel().rows;

    // Extract IDs from selected rows
    const selectedIds = selectedRows.map((row) => row.original.id);

    // Delete all selected rows
    const updatedTasks = tasks.filter((task) => !selectedIds.includes(task.id));

    setTasks(updatedTasks);
    localStorage.setItem("MyTodos", JSON.stringify(updatedTasks));
  };

  const EditableCell = ({
    row,
    updateTask,
  }: {
    row: any;
    updateTask: (id: string, value: string) => void;
  }) => {
    const [editableText, setEditableText] = React.useState(row.original.text);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditableText(e.target.value);
    };

    const handleInputBlur = () => {
      updateTask(row.original.id, editableText);
    };

    return (
      <div className="flex items-center">
        <input
          type="text"
          value={editableText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="capitalize focus:border-b-2 focus:border-primary transition-colors focus:outline-none  bg-inherit"
        />
      </div>
    );
  };

  // Columns for tasks
  const columns: ColumnDef<TodoType>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "text",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tasks
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <EditableCell row={row} updateTask={editTask} />,
    },
    {
      accessorKey: "priority",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Priority
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <BadgeOption priority={row.getValue("priority")} />,
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Deadline
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("date")
            ? format(new Date(row.getValue("date")), "MMM d, yyyy")
            : "Invalid Date"}
        </div>
      ),
    },
    {
      id: "delete",
      header: () => null,
      cell: ({ row }) => (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Delete row"
          onClick={() => delTask(row.original.id)}
        >
          <TrashIcon className="h-5 w-5 text-red-500" />
        </Button>
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  // React Table
  const table = useReactTable({
    data: tasks,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  // Render table headers
  const renderTableHeaders = () => {
    return table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ));
  };
  // Render table
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("text")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table
              .getColumn("text")
              ?.setFilterValue(event.target.value.toLowerCase())
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>{renderTableHeaders()}</TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  // data-state={row.isSelected && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <TrashIcon
            className="h-5 w-5 text-red-500"
            onClick={() => handleDeleteSelectedRows()}
          />
        )}
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
