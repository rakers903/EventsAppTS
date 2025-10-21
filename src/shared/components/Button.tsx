type ButtonProps = {
  title: string;
  type: "submit" | "button"
}

export default function Button({ title, type }: ButtonProps): React.JSX.Element
{
  return(
    <button type={type}>{title}</button>
  )
}