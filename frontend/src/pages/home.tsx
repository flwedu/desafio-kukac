import logo from "../../assets/logo.jpeg";

export default function Home() {
  return (
    <div className="card rounded shadow">
      <h1>App de Desafios Kukac</h1>

      <img style={{ width: "10rem" }} src={logo} alt="Kukac logo" />

      <hr />
      <p>Criado por Eduardo Aquino</p>

      <p>
        Para saber mais sobre mim:{" "}
        <a target={"_blank"} href="https://flwedu.github.io/">
          https://flwedu.github.io/
        </a>
      </p>
    </div>
  );
}
