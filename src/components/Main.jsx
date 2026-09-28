function gerarDicas(dados) {
  const temp = dados.main.temp;
  const condicao = dados.weather[0].main;
  const dicas = [];

  if (["Rain", "Drizzle", "Thunderstorm"].includes(condicao)) {
    dicas.push("☂️ Leve guarda-chuva ou capa de chuva.");
  }
  if (temp <= 15) {
    dicas.push("🧥 Está frio: agasalhe bem as crianças.");
  } else if (temp >= 28) {
    dicas.push("🧴 Está quente: protetor solar, chapéu e água por perto.");
  } else if (dicas.length === 0) {
    dicas.push("😊 Temperatura agradável para um passeio.");
  }
  if (dados.wind.speed * 3.6 >= 30) {
    dicas.push("💨 Vento forte: cuidado com guarda-chuvas e pipas.");
  }
  return dicas;
}

// O componente recebe os dados climáticos, estado de carregamento e erros do App.jsx
function Main({ dados, loading, erro }) {
  if (loading) {
    return (
      <main className="main">
        <p className="mensagem" role="status">
          Buscando a previsão... ⏳
        </p>
      </main>
    );
  }

  if (erro) {
    return (
      <main className="main">
        <p className="mensagem mensagem--erro" role="alert">
          {erro}
        </p>
      </main>
    );
  }

  if (!dados) {
    return (
      <main className="main">
        <p className="mensagem">Digite uma cidade para começar.</p>
      </main>
    );
  }

  const { name, sys, main, weather, wind } = dados;
  const clima = weather[0];
  const dicas = gerarDicas(dados);

  return (
    <main className="main">
      <article className="cartao" aria-live="polite">
        <h2 className="cartao__cidade">
          {name}, {sys.country}
        </h2>

        <section className="cartao__principal">
          <img
            src={`https://openweathermap.org/img/wn/${clima.icon}@2x.png`}
            alt={clima.description}
            width="100"
            height="100"
          />
          <div>
            <p className="cartao__temp">{Math.round(main.temp)}°C</p>
            <p className="cartao__descricao">{clima.description}</p>
          </div>
        </section>

        {/* 🌎 LISTA ATUALIZADA: Trocamos o Mín/Máx repetido por dados de Pressão Atmosférica */}
        <ul className="detalhes">
          <li>
            <span>Sensação</span>
            <strong>{Math.round(main.feels_like)}°C</strong>
          </li>
          <li>
            <span>Pressão</span>
            <strong>{main.pressure} hPa</strong>
          </li>
          <li>
            <span>Umidade</span>
            <strong>{main.humidity}%</strong>
          </li>
          <li>
            <span>Vento</span>
            <strong>{Math.round(wind.speed * 3.6)} km/h</strong>
          </li>
        </ul>

        <section className="dicas">
          <h3>Dicas para o dia</h3>
          <ul>
            {dicas.map((dica) => (
              <li key={dica}>{dica}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Main;
