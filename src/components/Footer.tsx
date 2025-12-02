import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer
      // in="ind"
      className="bg-white pt-12.5 pb-15 flex flex-wrap justify-around items-end gap-10 px-10 relative border-t border-black"
    >
      <svg
        className="absolute w-full bottom-full"
        viewBox="0 0 740 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 230 74.9998 C 221.5 71.9995 190.5 22.4998 69 18.4998 C 45.6329 17.7305 25.6317 19.3469 8.56594 22.4598 C 4.15502 23.2644 0 24.9389 0 23.4552 V 108 H 740 V 60.9843 C 794 65.0822 736.496 68.3004 732.408 68.01 C 729.819 67.8261 727.184 67.6558 724.5 67.4998 C 595.5 59.9998 582 95 573.5 94.9998 C 565 94.9995 532 58.9998 406 47.4998 C 280 35.9998 238.5 78 230 74.9998 Z"
          fill="white"
          stroke="#e9e9e9"
        ></path>
      </svg>
      <div className="w-sm text-center">
        <p className="font-bold text-xl">Join our newsletter for updates!</p>
        <p className="mt-3 footer:text-left">
          Stay up to date with our code recipes, free videos, and premium
          courses. Sent every other Wednesday.
        </p>
        <form action="">
          <div className="flex gap-2 mt-4">
            <Input type="email" className="bg-white" />
            <Button variant="outline" type="button">
              Sign up
            </Button>
          </div>
        </form>
      </div>

      <div className="w-sm text-center footer:text-left">
        <p>&copy; 2025 Build UI Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
