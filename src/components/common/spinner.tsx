import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const spinnerVariants = cva(
  "border-4 border-gray-200 rounded-full border-t-4 border-t-black",
  {
    variants: {
      size: {
        sm: "w-5 h-5",
        md: "w-10 h-10",
        lg: "w-20 h-20",
      },
      speed: {
        fast: "animate-spin-fast",
        medium: "animate-spin-medium",
        slow: "animate-spin-slow",
      },
    },
    defaultVariants: {
      size: "md",
      speed: "medium",
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, speed, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(spinnerVariants({ size, speed }), className)}
      {...props}
    ></div>
  )
);

export default Spinner;
