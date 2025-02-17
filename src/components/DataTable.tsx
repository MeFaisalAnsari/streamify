import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { mockTableData } from "../data/mockData";
import Card from "./Card";
import moment from "moment";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
} from "lucide-react";

interface SongData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
  cover: string;
}

const DataTable = () => {
  const data = React.useMemo(() => mockTableData, []);
  const columns: ColumnDef<SongData>[] = React.useMemo(
    () => [
      {
        header: "Song",
        accessorKey: "songName",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img
              src={row.original.cover}
              alt={row.original.songName}
              className="w-10 h-10 rounded-md object-cover"
            />
            <p className="truncate">{row.original.songName}</p>
          </div>
        ),
      },
      { header: "Artist", accessorKey: "artist" },
      {
        header: "Date Streamed",
        accessorKey: "dateStreamed",
        cell: ({ row }) => (
          <p>{moment(row.original.dateStreamed).format("MMM DD, YYYY")}</p>
        ),
      },
      { header: "Stream Count", accessorKey: "streamCount" },
      { header: "User ID", accessorKey: "userId" },
    ],
    []
  );

  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSorting: true,
  });

  return (
    <Card>
      <h3 className="text-xl font-semibold mt-2 mb-6">Recent Streams</h3>
      <table className="w-full">
        <thead className="border-b border-foreground/15">
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-3 px-2 text-left text-xs uppercase font-medium opacity-60 tracking-wider"
                >
                  <div
                    onClick={header.column.getToggleSortingHandler()}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <p>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </p>
                    <div className="w-4 flex justify-center">
                      {header.column.getIsSorted() === "asc" ? (
                        <ArrowUpNarrowWide />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <ArrowDownWideNarrow />
                      ) : (
                        <ArrowUpDown />
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="border-b last:border-0 border-foreground/15"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-3 px-2 font-medium whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default DataTable;
