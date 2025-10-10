import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative z-10 mx-auto max-w-6xl px-4", className)}>
      {children}
    </div>
  );
};
