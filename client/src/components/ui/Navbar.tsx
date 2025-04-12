import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { HandPlatter, ListOrderedIcon, Loader2, MenuIcon, Moon, ShoppingCart, SquareMIcon, Sun, User, UtensilsCrossed } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  
  SheetFooter,
  SheetClose,
  SheetDescription, } from "./sheet";
import { Input } from "./input";
import { Label } from "./label";


const Navbar = () => {
  const admin = true;
  const loading = false;
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h2 className="font-bold md:font-extrabold text-2xl text-orange-600">
            pateEast
          </h2>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link
              to="/profile"
              className="hover:text-orange-500 transition-colors"
            >
              Profile
            </Link>
            <Link
              to="/orders"
              className="hover:text-orange-500 transition-colors"
            >
              Orders
            </Link>
          </div>

          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer hover:text-orange-500 transition-colors">
                  Dashboard
                </MenubarTrigger>
                <MenubarContent className="bg-white shadow-md rounded-md p-2 border">
                  <Link to="/admin/restaurant">
                    <MenubarItem className="cursor-pointer">
                      Restaurant
                    </MenubarItem>
                  </Link>
                  <Link to="/admin/menu">
                    <MenubarItem className="cursor-pointer">Menu</MenubarItem>
                  </Link>
                  <Link to="/admin/order">
                    <MenubarItem className="cursor-pointer">Order</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        <div className="  hidden md:flex items-center gap-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* avtar */}
          <Link to="/cart" className=" relative cursor-pointer">
            <ShoppingCart />
            <Button
              size={"icon"}
              className=" absolute -inset-y-3 left-2 text-xs rounded-full h-4  w-4 bg-red-500 hover:bg-red-500"
            >
              5
            </Button>
          </Link>
          {/* avatar */}
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            {loading ? (
              <Button className=" bg-orange-500 hover:bg-orange-500">
                <Loader2 className=" mr-2 h-4 w-4 animate-spin">
                  please wait
                </Loader2>
              </Button>
            ) : (
              <Button className=" bg-orange-500 hover:bg-orange-500">
                Logout
              </Button>
            )}
          </div>
        </div>
        {/* Future mobile menu placeholder */}
        <div className="md:hidden lg:hidden">
          <MobilNavbar/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobilNavbar = () => {
  const user=true
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><MenuIcon/></Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>PateEast</SheetTitle>
          <div className=" flex justify-end  me-2">
       <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
       </div>
        </SheetHeader>
        <MenubarSeparator className=" my-2"/>   
        <SheetDescription className=" flex-1">
          <Link to="profie" className=" flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"><User/><span>Profile</span> </Link>
          <Link to="profie" className=" flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"><ListOrderedIcon/><span>order</span> </Link>
          <Link to="profie" className=" flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"><ShoppingCart/><span>Cart</span> </Link>
          <Link to="profie" className=" flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"><SquareMIcon/><span>Menu</span> </Link>
          <Link to="profie" className=" flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"><UtensilsCrossed/><span>Restaurant</span> </Link>
          <Link to="profie" className=" flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"><HandPlatter/><span>Orders</span> </Link>

        </SheetDescription>

        
        <SheetFooter>
             {user &&(
               <>
               <div className=" flex flex-row items-center gap-5">
                  <Avatar>
                    <AvatarImage/>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="  text-2xl capitalize ">
                    patelEast
                  </div>
               </div>
               </>
             )}

          <SheetClose asChild>
            <Button type="submit" className=" bg-orange-500 hover:bg-orange-500">Logout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

