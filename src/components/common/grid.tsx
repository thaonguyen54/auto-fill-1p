import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const gridVariants = cva(
  "grid",
  {
    variants: {
      columns: {
        default: [
          "grid-cols-1",
          "sm:grid-cols-2",
          "md:grid-cols-3",
          "lg:grid-cols-4",
          "2xl:grid-cols-5",
          "3xl:grid-cols-6",
          "4xl:grid-cols-7",
          "5xl:grid-cols-8",
        ].join(" "),
      },
      gap: {
        0: "gap-0",
        1: "gap-1",
        2: "gap-2",
        3: "gap-3",
        4: "gap-4",
        5: "gap-5",
        6: "gap-6",
        8: "gap-8",
        10: "gap-10",
      },
    },
    defaultVariants: {
      columns: "default",
      gap: 0,
    },
  }
);

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, gap, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gridVariants({ gap }), className)}
      {...props}
    />
  )
);

export default Grid;
