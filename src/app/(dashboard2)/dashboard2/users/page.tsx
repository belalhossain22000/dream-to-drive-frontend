"use client"

import { HiOutlineDotsVertical } from "react-icons/hi";
import UsersTable, { UsersType } from "../../dashboardComponents/dashboard2/dashboardDataTable/DashboardDatatable";
import image from "@/assets/avatar.png";
import {
    ColumnDef,
  } from "@tanstack/react-table";
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
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";

const data: UsersType[] = [
    {
      id: "m5gr84i9",
      name: "Rajib",
      username: "username",
      userRole: "users",
      email: "ken99@yahoo.com",
      image: image,
    },
    {
      id: "3u1reuv4",
      name: "Anik",
      username: "username",
      userRole: "users",
      email: "Abe45@gmail.com",
      image: image,
    },
    {
      id: "derv1ws0",
      name: "Rakib",
      username: "username",
      userRole: "users",
      email: "Monserrat44@gmail.com",
      image: image,
    },
    {
      id: "5kma53ae",
      name: "Noyon",
      username: "username",
      userRole: "users",
      email: "Silas22@gmail.com",
      image: image,
    },
    {
      id: "bhqecj4p",
      name: "Sagor",
      username: "username",
      userRole: "users",
      email: "carmella@hotmail.com",
      image: image,
    },
  ];

const columns: ColumnDef<UsersType>[] = [
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
      accessorKey: "image",
      header: () => <span>User Image</span>,
      cell: ({ row }) => (
        <div className=" w-[50px] ">
          <Image
            src={row.getValue("image")}
            width={30}
            height={30}
            alt="name"
          />
        </div>
      ),
    },
  
    {
      accessorKey: "name",
      header: () => <div className="text-left">Name</div>,
      cell: ({ row }) => (
        <div className="text-left font-medium">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "username",
      header: () => <div className="text-left">Username</div>,
      cell: ({ row }) => (
        <div className="text-left font-medium">{row.getValue("username")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "role",
      header: () => <div className="text-left">Role</div>,
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("role")}</div>
      ),
    },
  
    {
      id: "actions",
      enableHiding: false,
      header: () => <div className="text-left">Action</div>,
      cell: ({ row }) => {
        const UsersType = row.original;
  
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
              <DropdownMenuItem className="hover:bg-secondary hover:text-white duration-300 cursor-pointer rounded-md">
                Update user
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-red-500 hover:text-white duration-300 cursor-pointer rounded-md">
                Delete user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

const Users = () => {
  const {data:userData,isLoading}=useGetAllUsersQuery(undefined)
  const users= userData?.data?.data;
  console.log(users)
  if(isLoading){
    return <LoadingAnimation/>
  }
  return (
    <div className=" pt-6 sm:p-4 max-w-[90%] sm:max-w-[100%] text-white mx-auto overflow-hidden">
      <div className="bg-primary rounded-xl max-w-[100vw] overflow-hidden p-5 md:p-0">
        <div className="p-8 px-4 md:px-12 flex items-start justify-between border-b border-gray-500">
          <h2 className="text-xl font-bold text-white">All Users</h2>
          <span className="inline-block p-2 hover:bg-slate-100 hover:bg-opacity-30 rounded-full duration-300 cursor-pointer text-white">
            <HiOutlineDotsVertical />
          </span>
        </div>
        {/* data table          */}
        <div className="p-2 md:p-4 lg:p-8 -ml-5 sm:-ml-0 -mr-5 sm:-mr-0 ">
          <UsersTable columns={columns} data={users} searchCol={""} />
        </div>
      </div>
    </div>
  );
};

export default Users;
