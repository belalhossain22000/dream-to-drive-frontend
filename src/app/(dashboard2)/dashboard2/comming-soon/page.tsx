"use client";
import { HiOutlineDotsVertical } from "react-icons/hi";
import image from "@/assets/cookiesPage/banner.jpg";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import DashboardDataTable, {
  FeaturesType,
} from "../../dashboardComponents/dashboard2/dashboardDataTable/DashboardDatatable";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";

const data: FeaturesType[] = [
  {
    id: "m5gr84i9",
    title: "1990 Porsche 911 (964) Carrera 2",
    fearured: true,
    auctionSeller: "jhon@yahoo.com",
    actionBuyer: "ken99@yahoo.com",
    image: image,
    hightBid: "25000$",
    startTime: "11/11/2024",
    endTime: "12/12/2024",
  },
  {
    id: "3u1reuv4",
    title: "1990 Porsche 911 (964) Carrera 2",
    fearured: false,
    auctionSeller: "ken99@yahoo.com",
    actionBuyer: "ken99@yahoo.com",
    image: image,
    hightBid: "25000$",
    startTime: "11/11/2024",
    endTime: "12/12/2024",
  },
  {
    id: "derv1ws0",
    title: "1990 Porsche 911 (964) Carrera 2",
    fearured: false,
    auctionSeller: "ken99@yahoo.com",
    actionBuyer: "ken99@yahoo.com",
    image: image,
    hightBid: "25000$",
    startTime: "11/11/2024",
    endTime: "12/12/2024",
  },
  {
    id: "5kma53ae",
    title: "1990 Porsche 911 (964) Carrera 2",
    fearured: false,
    auctionSeller: "ken99@yahoo.com",
    actionBuyer: "ken99@yahoo.com",
    image: image,
    hightBid: "25000$",
    startTime: "11/11/2024",
    endTime: "12/12/2024",
  },
  {
    id: "bhqecj4p",
    title: "1990 Porsche 911 (964) Carrera 2",
    fearured: false,
    auctionSeller: "ken99@yahoo.com",
    actionBuyer: "ken99@yahoo.com",
    image: image,
    hightBid: "25000$",
    startTime: "11/11/2024",
    endTime: "12/12/2024",
  },
];
const columns: ColumnDef<FeaturesType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="border-white"
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
        className="border-white"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "singleImage", // Reference the entire array
    header: () => <span>Image</span>,
    cell: ({ row }) => {
      const images: string = row.getValue("singleImage"); // Get the entire array
      const firstImage = images ? images[0] : ""; // Access the first image
      return (
        <div className="w-[80px]">
          <Image
            className="rounded-lg"
            src={firstImage} // Use the first image URL
            width={100}
            height={50}
            alt={row.getValue("productName")} // You might want to use the product name as the alt text
          />
        </div>
      );
    },
  },

  {
    accessorKey: "productName",
    header: () => <div className="text-left min-w-[150px]">Title</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("productName")}</div>
    ),
  },
  {
    accessorKey: "auctionSeller",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Auction Seller
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("auctionSeller")}</div>
    ),
  },

  {
  accessorKey: "auctionStartDate",
  header: () => <div className="text-left">Starting Date</div>,
  cell: ({ row }) => {
    const dateValue:Date = row.getValue("auctionStartDate");
    const formattedDate = new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    
    return <div className="capitalize">{formattedDate}</div>;
  },
}
,

  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      const FeaturesType = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuItem className="hover:bg-secondary hover:text-white duration-300 cursor-pointer rounded-md">
              View details
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-red-600 hover:text-white duration-300 cursor-pointer rounded-md">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const CommingSoon = () => {
  const { data: productData, isLoading } = useGetAllProductsQuery(undefined)
  console.log(productData?.data?.data)

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <div className=" pt-6 sm:p-4 max-w-[90%] sm:max-w-[100%] text-white mx-auto overflow-hidden">
      {/*  show all users in table */}
      <div className="bg-primary rounded-xl max-w-[100vw] overflow-hidden p-5 md:p-0 text-white">
        <div className="p-8 px-4 md:px-12 flex items-start justify-between border-b border-gray-500">
          <h2 className="text-xl font-bold">Comming soon</h2>
          <span className="inline-block p-2 hover:bg-slate-100 hover:bg-opacity-30 rounded-full duration-300 cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        {/* data table          */}
        <div className="p-2 md:p-4 lg:p-8 -ml-5 sm:-ml-0 -mr-5 sm:-mr-0 ">
          <DashboardDataTable columns={columns} data={productData?.data?.data} searchCol={"auctionSeller"} />
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
