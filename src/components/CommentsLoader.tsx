import { Spinner } from "./ui/spinner";

export default function CommentsLoader() {
  return (
    <div className="w-full flex justify-center items-center gap-5">
      Loading Comments..
      <Spinner className="size-5" />
    </div>
  );
}
