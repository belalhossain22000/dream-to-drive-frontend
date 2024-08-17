import {
    Cloud,
    Github,
    CreditCard,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import Image from "next/image";
  import avatar from "@/assets/avatar.png";
const ProfileDropdown = () => {
    return (
        <div className="ml-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>
                  <Image
                    src={avatar}
                    className="w-[40px] h-[40px] overflow-hidden rounded-xl"
                    width={40}
                    height={40}
                    alt="profile image"
                  />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-primary mr-6 mt-[20px] text-white p-3 border-none shadow-2xl shadow-primary pb-6">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-secondary rounded-md duration-300 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-secondary rounded-md duration-300 cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-secondary rounded-md duration-300 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
    );
};

export default ProfileDropdown;