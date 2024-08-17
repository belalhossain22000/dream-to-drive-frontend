"use client"
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import PaymentHistoryChart from "../dashboardComponents/dashboard2/paymentHistoryChart/PaymentHistoryChart";
import TopCard from "../dashboardComponents/dashboard2/TopCards/TopCard";
import { HiOutlineDotsVertical } from "react-icons/hi";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import { useGetAllBiddingsQuery } from "@/redux/api/biddingsApi";

const Dashboard = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined)
  const { data: biddings } = useGetAllBiddingsQuery(undefined)
  const totalSold= data?.data?.data?.filter((item:any)=>item.status==="sold")
  console.log(totalSold)
  if (isLoading) {
    return <LoadingAnimation />
  }
  return (
    <div className=" pt-6 sm:p-4 max-w-[90%] sm:max-w-[100%] text-white mx-auto overflow-hidden">
      {/* dashboard top cards */}
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <TopCard text="Total Cars" totalCount={data?.data?.data?.length} />
        <TopCard text="Total Bids" totalCount={biddings?.data?.length} />
        <TopCard text="Total Sold" totalCount={totalSold?.length} />
      </div>
      {/* payment history chart card */}
      <div className="bg-primary rounded-xl mt-12 max-w-full">
        <div className="p-8 px-4 md:px-12 flex items-start justify-between border-b border-gray-500">
          <h2 className="text-xl font-bold">Payment Record</h2>
          <span className="inline-block p-2 hover:bg-slate-100 hover:bg-opacity-30 rounded-full duration-300 cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="p-2 md:p-4 lg:p-8 -ml-5 sm:-ml-0 -mr-5 sm:-mr-0 ">
          <PaymentHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
