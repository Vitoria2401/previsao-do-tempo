# 🌤️ Painel ClimaSimples

## 💡 Problemática
A leitura de dados meteorológicos puros por meio de gráficos de satélite complexos ou relatórios densos costuma ser confusa para o cidadão comum. Mães e pais, por exemplo, necessitam de informações práticas e diretas para planejar a rotina e os cuidados diários com seus filhos (como saber se precisam levar um agasalho ou um guarda-chuva), sem se deparar com termos técnicos incompreensíveis.

## 🎯 Objetivo da Aplicação
Desenvolver um painel interativo, responsivo e de fácil compreensão que consome dados em tempo real de uma API pública para simplificar a consulta climática. O foco central é traduzir a resposta da API em recomendações úteis e amigáveis diretamente voltadas às atividades do dia a dia.

🔗 **Aplicação publicada:** https://previsao-do-tempo-ruby.vercel.app

## 🛠️ Tecnologias Utilizadas
* **React** (Biblioteca para construção da interface)
* **Vite** (Ferramenta de build e ambiente de desenvolvimento rápido)
* **CSS3** (Estilização moderna e layout responsivo com Grid e Flexbox)
* **Fetch API** (Consumo nativo dos dados assíncronos)

## 🔌 API Utilizada
* **OpenWeatherMap API**: Utilizada a rota de clima atual (`/weather`) para a busca de dados dinâmicos como temperatura, umidade, vento, pressão e condições atmosféricas por cidade.

## 🚀 Principais Funcionalidades
* **🔎 Busca Interativa**: Barra de pesquisa para consulta de condições meteorológicas de qualquer cidade do mundo.
* **⚠️ Tratamento de Comportamentos**: Estados visuais claros para o usuário durante o carregamento de dados (*loading*) e exibição de mensagens amigáveis em caso de digitação incorreta ou cidade não encontrada (*erro*).
* **🧠 Inteligência de Dicas**: Sistema embutido que analisa o clima atual e gera avisos automatizados baseados em rotinas familiares (ex: cuidados com ventos fortes, uso de protetor solar ou alertas para agasalhar crianças).
* **📱 Interface Responsiva**: Design totalmente adaptável para telas de smartphones, tablets e desktops.

## ⚙️ Instruções para Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Na raiz do projeto, instale as dependências executando:
   ```bash
   npm install
   ```
3. Inicie o servidor local de testes:
   ```bash
   npm run dev
   ```

## 🤖 Uso de Inteligência Artificial

### Prompt utilizado
Olá, Claude! Estou participando do Bootcamp da Kodie e preciso entregar HOJE um desafio em React + Vite. O projeto é um "Painel Interativo de Previsão do Tempo" que consome a API do OpenWeatherMap.
A minha problemática principal é: "Como tornar a leitura da previsão do tempo simples, amigável e direta para pessoas comuns (como mães que precisam planejar o dia com os filhos), sem gráficos ou dados confusos?"
Preciso que você crie um código completo, funcional e muito bem estruturado para mim, seguindo estritamente estes requisitos:

Arquitetura de Componentes: Separe a aplicação de forma clara (App, Header, Main, Footer).
Interação: O usuário deve conseguir digitar o nome de uma cidade em uma barra de busca para atualizar os dados na tela.
Consumo de API: Utilize o fetch ou axios dentro do useEffect para buscar os dados da API: https://openweathermap.org{cidade}&units=metric&lang=pt_br&appid=SUA_CHAVE_AQUI
Estados Essenciais (useState): Gerencie o estado da cidade buscada, os dados retornados, o estado de "carregando" (loading) e uma mensagem amigável caso a cidade não seja encontrada (erro).
Estilização: Forneça um arquivo CSS único (App.css), moderno, limpo e totalmente responsivo (que funcione perfeitamente em celular e desktop).
Facilidade: Para testarmos agora sem travar o desenvolvimento, insira uma chave de API pública temporária no código ou me dê instruções explícitas de onde colar a minha chave gerada no OpenWeather.
Por favor, forneça os códigos prontos para eu copiar e colar nos arquivos do VS Code, explicando brevemente onde colocar cada parte.

### Objetivo
O prompt foi utilizado como ferramenta de apoio para estruturar de forma correta e limpa a arquitetura de componentes da aplicação, garantir a correta aplicação de tags semânticas no HTML, realizar o consumo assíncrono seguro da API pública tratando possíveis cenários de erro e acelerar a construção da estilização responsiva.
