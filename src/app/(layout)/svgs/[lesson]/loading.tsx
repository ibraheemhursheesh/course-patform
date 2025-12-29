import { Spinner } from "@/components/ui/spinner";

export default function loading() {
  return (
    <div className="w-full h-dvh flex justify-center items-center ">
      <Spinner className="size-15" />
    </div>
  );
}
