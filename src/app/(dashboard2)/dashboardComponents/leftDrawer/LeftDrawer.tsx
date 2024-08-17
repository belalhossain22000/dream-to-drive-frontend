import SidebarLinks from "@/app/(dashboard2)/dashboardComponents/SidebarLinks/SidebarLinks";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuFold3Fill } from "react-icons/ri";

const LeftDrawer = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <span>
            <RiMenuFold3Fill className="text-2xl text-white" />
          </span>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-primary text-white  border-r border-gray-500"
        >
          <SheetHeader>
            <SheetTitle className="text-left text-gray-400 mt-12">
              Navigation
            </SheetTitle>
            <SheetDescription className="-ml-5">
              <SidebarLinks />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default LeftDrawer;
