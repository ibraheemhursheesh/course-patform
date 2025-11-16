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
export default function Header() {
  return (
    <header className="flex justify-between py-4 px-10 items-center border-b">
      <Link href="/">Unpacked</Link>
      <nav>
        <ul className="flex gap-7 items-center">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>Courses</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit" align="center">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="">
                    <Link href="/1001001001001001">React</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="">
                    <Link href="/1001001001001001">Framer Motion</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="">
                    <Link href="/1001001001001001">Remix</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <Link href="/contact">Contact</Link>
          <li>
            <Button onClick={logoutWithGoogle}>Logout</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
