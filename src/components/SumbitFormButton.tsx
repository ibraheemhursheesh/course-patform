// @ts-nocheck
"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SumbitFormButton({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode;
  className: string;
  disabled: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      className={className !== undefined ? className : "rounded-full"}
    >
      {pending ? "Submitting..." : children}
    </Button>
  );
}
