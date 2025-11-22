import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer
      // id="in"
      className=" pt-15 pb-20  flex justify-between items-end px-10 border-t border-black"
    >
      <div className="w-sm">
        <p className="font-bold text-xl">Join our newsletter for updates!</p>
        <p className="mt-3">
          Stay up to date with our code recipes, free videos, and premium
          courses. Sent every other Wednesday.
        </p>
        <form action="">
          <div className="flex gap-2 mt-4">
            <Input type="email" />
            <Button variant="outline" type="button">
              Sign up
            </Button>
          </div>
        </form>
      </div>

      <div>
        <p>&copy; 2025 Build UI Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
