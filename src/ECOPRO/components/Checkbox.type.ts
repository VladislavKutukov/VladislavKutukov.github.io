
export interface CheckboxProps {
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    markType?: "line" | "checkmark";
  }