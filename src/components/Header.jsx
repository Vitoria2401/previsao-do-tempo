import { useState } from "react";

function Header({ onBuscar }) {
  const [termo, setTermo] = useState("");

  function handleSubmit(evento) {
    evento.preventDefault();
    const limpo = termo.trim();
    if (!limpo) return;
    onBuscar(limpo);
    setTermo("");
  }

  return (
    <header className="header">
      <h1 className="header__titulo">☀️ Como está o tempo hoje?</h1>
      <p className="header__subtitulo">
        Previsão simples para você planejar o dia com tranquilidade.
      </p>

      <form className="busca" onSubmit={handleSubmit} role="search">
        <label htmlFor="cidade" className="visualmente-oculto">
          Nome da cidade
        </label>
        <input
          id="cidade"
          type="text"
          className="busca__input"
          placeholder="Digite uma cidade, ex.: Campinas"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        />
        <button type="submit" className="busca__botao">
          Buscar
        </button>
      </form>
    </header>
  );
}

export default Header;
