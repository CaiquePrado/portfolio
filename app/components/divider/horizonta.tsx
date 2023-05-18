import { cn } from "@/app/libs/utils";

type HorizontalDivider = {
  className?: string;
};

export const HorizontalDivider = ({ className }: HorizontalDivider) => {
  return (
    <div className={cn("w-full my-8 border-b border-b-gray-800", className)} />
  );
};
