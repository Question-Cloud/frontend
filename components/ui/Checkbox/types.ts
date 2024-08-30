export interface CheckboxProps {
  children?: React.ReactNode;
  id: string | number;
  disabled?: boolean;
  checked?: boolean;
  onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
}
