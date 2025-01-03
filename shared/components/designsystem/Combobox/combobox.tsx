"use client";

import { useState } from "react";
import { cn } from "@//utils";
import { ArrowDownIcon, ArrowUpIcon, Button } from "@/shared";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CommandSeparator } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ComboboxProps } from "./types";
import { SortOption } from "@/shared/api";
import { sortOptionKeys } from "@/constants";

export function Combobox({
  placeholder,
  className,
  options,
  value,
  setValue,
  label,
  isRequired,
  initSelectedItems,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

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
        <PopoverContent className={cn("p-0 min-w-[140px]", className)}>
          <Command>
            <CommandList>
              <CommandEmpty>옵션이 존재하지 않습니다.</CommandEmpty>
              <CommandGroup>
                {options &&
                  options.map((option) => (
                    <div key={option.value}>
                      <CommandItem
                        value={option.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue as SortOption);
                          initSelectedItems && initSelectedItems();
                          setOpen(false);
                        }}
                        className={cn(value === option.value ? "bg-sky/70 " : "bg-white")}
                      >
                        <div className="text-black body1">{option.label}</div>
                      </CommandItem>
                      {option.value === options[options.length - 1].value ? "" : <CommandSeparator />}
                    </div>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
