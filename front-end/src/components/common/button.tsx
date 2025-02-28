import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-accent-600 text-accent-foreground shadow hover:opacity-80 relative after:content-[''] after:block after:absolute after:inset-0 after:bg-accent-600 after:blur-sm after:-z-10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
        accent:
          "bg-accent text-accent-foreground shadow hover:opacity-80 relative after:content-[''] after:block after:absolute after:inset-0 after:bg-accent after:blur-sm after:-z-10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
        success:
          "bg-success text-accent-foreground shadow hover:opacity-80 relative after:content-[''] after:block after:absolute after:inset-0 after:bg-success after:blur-sm after:-z-10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
        destructive:
          "bg-destructive text-accent-foreground shadow hover:opacity-80 relative after:content-[''] after:block after:absolute after:inset-0 after:bg-destructive after:blur-sm after:-z-10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary  text-accent-foreground shadow hover:opacity-80 relative after:content-[''] after:block after:absolute after:inset-0 after:bg-secondary after:blur-sm after:-z-10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 dark:text-secondary-foreground",
        "ghost-accent": "hover:bg-accent hover:text-accent-foreground",
        "ghost-muted": "bg-transparent hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-5",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8 [&_svg]:size-5",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
