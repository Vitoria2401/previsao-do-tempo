import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

const API_KEY = "72776c5b058fe846fb0173f27f88427f";

function App() {
  const [cidade, setCidade] = useState("São Paulo");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function buscarClima() {
      setLoading(true);
      setErro("");

      try {
       const url = `https://openweathermap.org{encodeURIComponent(cidade)}&units=metric&lang=pt_br&appid=${API_KEY}`;


        const resposta = await fetch(url, { signal: controller.signal });

        if (resposta.status === 404) throw new Error("NAO_ENCONTRADA");
        if (resposta.status === 401) throw new Error("CHAVE_INVALIDA");
        if (!resposta.ok) throw new Error("GENERICO");

        const json = await resposta.json();
        setDados(json);
      } catch (e) {
        if (e.name === "AbortError") return;

        setDados(null);
        if (e.message === "NAO_ENCONTRADA") {
          setErro(
            `Não encontramos "${cidade}". Confira o nome e tente de novo 😊`
          );
        } else if (e.message === "CHAVE_INVALIDA") {
          setErro(
            "Chave da API inválida ou ainda não ativada. Novas chaves podem levar um tempinho."
          );
        } else {
          setErro("Algo deu errado. Verifique sua internet e tente novamente.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    buscarClima();

    // cancela a busca anterior se o usuário pesquisar outra cidade rápido
    return () => controller.abort();
  }, [cidade]);

  return (
    <div className="app">
      <Header onBuscar={setCidade} />
      <Main dados={dados} loading={loading} erro={erro} />
      <Footer />
    </div>
  );
}

export default App;
