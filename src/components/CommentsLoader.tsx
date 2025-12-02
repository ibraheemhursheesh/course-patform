import { Skeleton } from "./ui/skeleton";
import { Spinner } from "./ui/spinner";

export default function CommentsLoader() {
  return (
    <div className="h-325 p-5">
      {/* Loading Questions..
      <Spinner className="size-5" /> */}
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-5 mt-7 justify-center"
            >
              <Skeleton className="h-12 w-12 rounded-full self-start shrink-0" />
              <div className="bg-zinc-200 w-full max-w-2xl rounded-lg">
                <Skeleton className="w-full h-40" />
              </div>
            </div>
          );
        })}
    </div>
  );
}
