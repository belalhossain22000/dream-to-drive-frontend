import { Skeleton } from "../ui/skeleton";

const ProductCardLoader = () => (
  <div className=" shadow-md rounded-lg border bg-red-500">
    <div className="h-[180px]">
      <Skeleton className="h-full w-full " />
    </div>
    <div className="pt-4 pb-2 px-7">
      <div className="flex items-center justify-center">
        <Skeleton className="h-[30px] w-full rounded-l-full" />
        <Skeleton className="h-[30px] w-full rounded-r-full ml-2" />
      </div>
    </div>
    <div className="py-4 px-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-[30px] w-[100px] rounded-full" />
        <Skeleton className="h-[30px] w-[30px] rounded-full" />
      </div>
      <Skeleton className="h-[24px] my-4" />
      <div className="flex items-center">
        <Skeleton className="h-[24px] w-[24px] rounded-full mr-2" />
        <Skeleton className="h-[24px] w-full" />
      </div>
    </div>
  </div>
);

export default ProductCardLoader;
