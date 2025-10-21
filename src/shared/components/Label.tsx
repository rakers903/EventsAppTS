type LabelProps = {
  children: React.ReactNode;
  label?: string;
}

export default function Label({ children, label }: LabelProps): React.JSX.Element {
  return(
    <label>
      <p>{label}</p>
      {children}
    </label>
  )
}
