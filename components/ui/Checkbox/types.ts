export interface CheckboxProps {
  children?: React.ReactNode;
  id: string | number;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent) => void;
}
