import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SumbitFormButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      Update
    </Button>
  );
}
