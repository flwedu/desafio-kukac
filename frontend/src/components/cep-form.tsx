import { useState } from "react";

type CepFormProps = {
  submitFn: (arr: string[]) => void;
};

type queryType = {
  [index: string | number]: string;
};

export default function CepForm({ submitFn }: CepFormProps) {
  const [query, setQuery] = useState<queryType>({});
  const [inputQuantity, setInputQuantity] = useState(1);

  function addInputButton() {
    if (inputQuantity < 5) setInputQuantity(inputQuantity + 1);
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    const formatted = String(value).replaceAll(/\D/gi, "");
    e.target.value = formatted;
    setQuery({ ...query, [name]: formatted });
  }

  function onBlur(e: any) {
    const { name, value } = e.target;
    const formatted = String(value).padEnd(8, "0");
    e.target.value = formatted;
    setQuery({ ...query, [name]: formatted });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const arr: string[] = [];
    const keys = Object.keys(query);
    for (let key in keys) {
      const value = query[key];
      arr.push(value);
    }
    submitFn(arr);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="form-group card shadow rounded"
    >
      <div className="flex flex-col">
        {Array.from({
          length: inputQuantity,
        }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={8}
            onBlur={onBlur}
            name={String(index)}
          />
        ))}
        {inputQuantity < 5 && (
          <input
            onClick={addInputButton}
            type="button"
            value="Adicionar"
            className="button"
          />
        )}
      </div>
      <input type="submit" value="Consultar" className="button" />
    </form>
  );
}
