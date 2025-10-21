import Label from "./Label"
import styles from "./css/TextInput.module.css";

type TextInputProps = {
  label?: string;
  type?: "text" | "number";
  placeholder: string;
  min?: number;
  max?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
}

export default function TextInput({ name, value, label, type="text", placeholder, min, max, onChange }: TextInputProps): React.JSX.Element {
  return(
    <Label label={label}>
      <input 
        name={name}
        className={styles.TextInput}
        inputMode="numeric"
        type={type} 
        placeholder={placeholder} 
        {...(type === "number" ? { min, max } : {})}
        onChange={onChange}
        value={value}
      />
    </Label>
  )
}