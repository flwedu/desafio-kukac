type AddressData = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
};

export default function CepAddressCard({ data }: { data: any }) {
  const address = data as AddressData;

  return (
    <div className="cep-card">
      <div className="header">
        <h1>CEP: {address.cep}</h1>
      </div>
      <div className="body">
        {address.logradouro && (
          <CardField description="Logradouro" text={address.logradouro} />
        )}
        {address.bairro && (
          <CardField description="Bairro" text={address.bairro} />
        )}
        <CardField description="Cidade" text={address.localidade} />
        <CardField description="UF" text={address.uf} />
      </div>
    </div>
  );
}

function CardField({
  description,
  text,
}: {
  description: string;
  text: string;
}) {
  return (
    <div className="field">
      {description}: {text}
    </div>
  );
}
