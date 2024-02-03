"use client";

import { Materia } from "@/types";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const columns: ColumnDef<Materia>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
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
        accessorKey: "codigo",
        header: "Codigo",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("codigo")}</div>
        ),
    },
    {
        accessorKey: "asignatura",
        header: ({ column }) => {
            return (
                <Button
                    variant="default"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Asignatura
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => <div className="">{row.getValue("asignatura")}</div>,
    },
    {
        accessorKey: "creditos",
        header: () => <div className="text-center">Creditos</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("creditos"));

            // Format the amount as a dollar amount
            // const formatted = new Intl.NumberFormat("en-US", {
            //     style: "currency",
            //     currency: "USD",
            // }).format(amount);

            return <div className="text-center font-medium">{amount}</div>;
        },
    },
    {
        accessorKey: "tipologia",
        header: () => <div className="text-center">Tipologia</div>,
        cell: ({ row }) => (
            <div className="text-center">{row.getValue("tipologia")}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const materia = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(materia.codigo)
                            }
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
