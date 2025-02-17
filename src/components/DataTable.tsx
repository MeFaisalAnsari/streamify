import React from "react";
import { useTable, useSortBy } from "react-table";
import { mockTableData } from "../data/mockData";
import Card from "./Card";
import moment from "moment";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
} from "lucide-react";

const DataTable = () => {
  const data = React.useMemo(() => mockTableData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Song",
        accessor: "songName",
        Cell: ({ row }) => (
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
      { Header: "Artist", accessor: "artist" },
      {
        Header: "Date Streamed",
        accessor: "dateStreamed",
        Cell: ({ row }) => (
          <p>{moment(row.original.dateStreamed).format("MMM DD, YYYY")}</p>
        ),
      },
      { Header: "Stream Count", accessor: "streamCount" },
      { Header: "User ID", accessor: "userId" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Card>
      <h3 className="text-xl font-semibold mt-2 mb-6">Recent Streams</h3>
      <table {...getTableProps()} className="w-full">
        <thead className="border-b border-foreground/15">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-3 px-2 text-left text-xs uppercase font-medium opacity-60 tracking-wider"
                >
                  <div className="flex items-center gap-2">
                    <p> {column.render("Header")}</p>
                    <div className="w-4 flex justify-center">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDownWideNarrow />
                        ) : (
                          <ArrowUpNarrowWide />
                        )
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
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border-b last:border-0 border-foreground/15"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-3 px-2 font-medium whitespace-nowrap"
                  >
                    {cell.render("Cell")}
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
