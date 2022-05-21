type InputProps = {
  value: string;
  name: string;
  placeholder: string;
};

export default function InputTextField({
  value,
  name,
  placeholder,
}: InputProps) {
  return (
    <input
      type="text"
      required
      defaultValue={value}
      name={name}
      placeholder={placeholder}
      id={name}
    />
  );
}
