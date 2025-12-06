// @ts-nocheck
import { logoutWithGoogle } from "@/utils/actions";
import Link from "next/link";

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
import { Button } from "./ui/button";
import Image from "next/image";
export default function Header({ user }) {
  return (
    <header className={`${user ? "bg-white " : ""}`}>
      <div className="max-w-5xl mx-auto flex justify-between py-4 px-10 items-center">
        <div className="flex gap-5">
          {/* <Image
          alt="log"
          src="/box.png"
          width={50}
          height={50}
          className="size-10"
        /> */}
          <Link href="/" className="flex uppercase font-bold ">
            <div className="">Un</div>
            <div className="text-lg">packed</div>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5 sm:gap-7 items-center">
            {user && (
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button>Courses</button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-fit" align="center">
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="">
                        <Link href="/react-from-scratch" className="w-full">
                          React
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="">
                        <Link href="/framer-motion">Framer Motion</Link>
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem className="">
                      <Link href="/1001001001001001">Remix</Link>
                    </DropdownMenuItem> */}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            )}

            <Link href="/contact">Contact</Link>
            <li>
              {user ? (
                // <Button onClick={logoutWithGoogle}>Logout</Button>
                <Link href="/account">Account</Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>{" "}
      </div>
    </header>
  );
}
