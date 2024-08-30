export interface CheckboxProps {
  children?: React.ReactNode;
  id: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
