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
          <Link href="/" className="flex uppercase font-bold items-center">
            <div className="size-12 relative mr-2.5">
              <div className="absolute h-full w-0.25 top-0 left-2 bg-black"></div>
              <div className="absolute h-full w-0.25  top-0 right-2 bg-black"></div>

              <div className="absolute h-0.25 w-full top-2 left-0 bg-black"></div>
              <div className="absolute h-0.25 w-full top-4 right-0 bg-zinc-400"></div>
              <div className="absolute h-0.25 w-full top-6 left-0 bg-zinc-400"></div>
              <div className="absolute h-0.25 w-full top-8 right-0 bg-zinc-400"></div>
              <div className="absolute h-0.25 w-full top-10 left-0 bg-black"></div>
            </div>
            <div className="hidden sm:block">Un</div>
            <div className="hidden sm:block text-lg">packed</div>
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
                        <Link href="/react-from-scratch">Framer Motion</Link>
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem className="">
                      <Link href="/1001001001001001">Remix</Link>
                    </DropdownMenuItem> */}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            )}

            <li>
              {user ? (
                <span className="cursor-pointer" onClick={logoutWithGoogle}>
                  Logout
                </span>
              ) : (
                // <Link href="/account">Account</Link>
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>{" "}
      </div>
    </header>
  );
}
