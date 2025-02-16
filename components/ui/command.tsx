"use client";

import * as React from "react";
import { Command } from "cmdk";

const CommandInput = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full border-none bg-transparent px-3 py-2 text-sm outline-none ${className}`}
    placeholder="Type a command..."
    {...props}
  />
));

const CommandList = React.forwardRef<
  React.ElementRef<typeof Command.List>,
  React.ComponentPropsWithoutRef<typeof Command.List>
>(({ className, ...props }, ref) => (
  <Command.List
    ref={ref}
    className={`max-h-60 overflow-auto ${className}`}
    {...props}
  />
));

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof Command.Empty>,
  React.ComponentPropsWithoutRef<typeof Command.Empty>
>(({ className, ...props }, ref) => (
  <Command.Empty ref={ref} className={`py-6 text-center text-sm ${className}`} {...props} />
));

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof Command.Group>,
  React.ComponentPropsWithoutRef<typeof Command.Group>
>(({ className, ...props }, ref) => (
  <Command.Group ref={ref} className={`p-2 text-sm ${className}`} {...props} />
));

const CommandItem = React.forwardRef<
  React.ElementRef<typeof Command.Item>,
  React.ComponentPropsWithoutRef<typeof Command.Item>
>(({ className, ...props }, ref) => (
  <Command.Item
    ref={ref}
    className={`cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
    {...props}
  />
));

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof Command.Separator>,
  React.ComponentPropsWithoutRef<typeof Command.Separator>
>(({ className, ...props }, ref) => (
  <Command.Separator
    ref={ref}
    className={`my-1 h-px bg-gray-200 dark:bg-gray-700 ${className}`}
    {...props}
  />
));

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
};
