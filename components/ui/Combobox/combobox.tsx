"use client";

import * as React from "react";
import { cn } from "@//utils";
import { ArrowDownIcon, ArrowUpIcon, Button } from "@/components/ui";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CommandSeparator } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ComboboxProps } from "./types";

export function Combobox({ placeholder, className, options, value, setValue, label, isRequired }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {label && (
        <div className="mb-[6px] flex items-center">
          <span className="body1 mr-[4px]">{label}</span>
          {isRequired && <span className="text-red">*</span>}
        </div>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="grayLine"
            size="large"
            role="combobox"
            aria-expanded={open}
            className={cn("justify-between", className)}
            asChild
          >
            <div>
              <div className={cn(value ? "text-black" : "text-gray_03")}>
                {value ? options && options.find((option) => option.value === value)?.label : placeholder}
              </div>
              {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("p-0 min-w-[200px]", className)}>
          <Command>
            <CommandList>
              <CommandEmpty>옵션이 존재하지 않습니다.</CommandEmpty>
              <CommandGroup>
                {options &&
                  options.map((option) => (
                    <>
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                        className={cn(value === option.value ? "bg-gray_01 " : "bg-white")}
                      >
                        <div className={cn(value === option.value ? "text-navy body1 " : "text-black body2")}>
                          {option.label}
                        </div>
                      </CommandItem>
                      {option.value === options[options.length - 1].value ? "" : <CommandSeparator />}
                    </>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
