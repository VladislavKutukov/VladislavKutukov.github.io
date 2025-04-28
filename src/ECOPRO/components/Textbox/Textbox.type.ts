
export interface TextboxProps {
    className?: string;
    value?: string | number;
    defaultValue?: string | number;
    type?: string; // Например, "text", "number", "password" и т. д.
    list?: string; // Для использования с элементом <datalist>
    min?: number; // Для числовых текстовых полей
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
  }