import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import SignOutBtn from "./sign-out-btn";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import SignInBtn from "./sign-in-btn";
import { insertUser } from "@/lib/db";
import { DrawerDemo } from "./DrawerDemo";


export default async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user: any = await getUser();
  const auth: boolean = await isAuthenticated();
  console.log(user)

  if (auth) {
    // Insert the user into the local database
    try {
      await insertUser(user);
    } catch (error) {
      console.error('Error inserting user into the database:', error);
      // Handle the error as needed
    }
  }

  return (
    <nav className="flex justify-between items-center py-2 px-4 sm:px-16 border-b bg-white z-50">
      <a href="/">
        <Image
          width="0"
          height="0"
          sizes="100%"
          priority
          className="w-[180px] h-auto" 
          src="/securenest_bg.png" alt="Logo" />
      </a>
      <div className="flex gap-2">
        <a className="hidden cursor-pointer md:block" href="/">
          <Button variant={"ghost"}>Home</Button>
        </a>
        <a className="hidden cursor-pointer md:block" href="/plans">
          <Button variant={"ghost"}>Plans</Button>
        </a>
        <a className="hidden cursor-pointer md:block" href="/products">
          <Button variant={"ghost"}>Products</Button>
        </a>
        <a className="hidden cursor-pointer md:block" href="/about">
          <Button variant={"ghost"}>About</Button>
        </a>
        {auth ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={!user.picture === null ? "" : user.picture}
                  alt={!user.family_name  === null ? "" : user.family_name}
                />
                <AvatarFallback>
                  {user.family_name.charAt(0).toUpperCase()+user.given_name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <span className="font-semibold">{user.given_name.toUpperCase()+" "+user.family_name.toUpperCase()}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <SignOutBtn className="w-full" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <SignInBtn/>
        )}
        <div className="block md:hidden">
          <DrawerDemo />
        </div>
      </div>
    </nav>
  );
}
