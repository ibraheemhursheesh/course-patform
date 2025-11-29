import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer
      // in="ind"
      className="bg-white pb-20 flex flex-wrap justify-around items-end gap-10 px-10"
    >
      <div className="w-sm">
        <p className="font-bold text-xl">Join our newsletter for updates!</p>
        <p className="mt-3 text-center footer:text-left">
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
