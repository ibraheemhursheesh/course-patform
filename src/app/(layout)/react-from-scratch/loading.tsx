import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <Spinner className="size-15" />
    </div>
  );
}
