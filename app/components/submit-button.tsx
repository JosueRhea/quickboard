"use client";
import { Button } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  pending: boolean;
}

export const SubmitButton = ({ children, pending }: Props) => {
  return (
    <Button type="submit" disabled={pending}>
      {children}
    </Button>
  );
};
