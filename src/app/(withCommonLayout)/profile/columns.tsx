// src/pages/columns.ts
"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Bids = {
  id: string;
  carModel: string;
  currentBid: string;
  startingPrice: string;
  bid: string;
  time: string;
  status: "pending" | "processing" | "success" | "failed";
  lastBid: string;
  auctionEndDate: string;
};

export const columns: ColumnDef<Bids>[] = [
  {
    accessorKey: "id",
    header: "Auction ID",
  },
  {
    accessorKey: "carModel",
    header: "Car Model",
  },
  {
    accessorKey: "currentBid",
    header: "Current Bid Amount",
  },
  {
    accessorKey: "status",
    header: "Bid Status",
  },
  {
    accessorKey: "time",
    header: "Time Remaining",
  },
  {
    accessorKey: "startingPrice",
    header: "Starting Price",
  },
  {
    accessorKey: "bid",
    header: "Bid Increment",
  },
  {
    accessorKey: "lastBid",
    header: "Last Bid Date/Time",
  },
  {
    accessorKey: "auctionEndDate",
    header: "Auction End Date/Time",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
