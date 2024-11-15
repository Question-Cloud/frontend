import { SortOption } from "@/shared";

export interface Option {
  value: string;
  label: string;
}

export interface ComboboxProps {
  placeholder?: string;
  className?: string | undefined;
  options: Option[];
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>> | ((sortOption: SortOption) => void);
  label?: string;
  isRequired?: boolean;
  initSelectedItems?: () => void;
}
