# 🌤️ Painel ClimaSimples

## 💡 Problemática
A leitura de dados meteorológicos puros por meio de gráficos de satélite complexos ou relatórios densos costuma ser confusa para o cidadão comum. Mães e pais, por exemplo, necessitam de informações práticas e diretas para planejar a rotina e os cuidados diários com seus filhos (como saber se precisam levar um agasalho ou um guarda-chuva), sem se deparar com termos técnicos incompreensíveis.

## 🎯 Objetivo da Aplicação
Desenvolver um painel interativo, responsivo e de fácil compreensão que consome dados em tempo real de uma API pública para simplificar a consulta climática. O foco central é traduzir a resposta da API em recomendações úteis e amigáveis diretamente voltadas às atividades do dia a dia.

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
"Estou criando uma aplicação React + Vite para um desafio de programação. Preciso desenvolver um Painel de Previsão do Tempo simples, responsivo e altamente visual que consuma a API pública do OpenWeatherMap. Como perdi parte das aulas e estou com o tempo curto, preciso que você gere a estrutura completa dos componentes (Header, Main, Footer) e o código integrado usando useState e useEffect. O foco principal é simplificar a leitura dos dados para o usuário comum, permitindo buscar por cidade e exibindo a temperatura, a condição do tempo e o ícone de forma clara."

### Objetivo
O prompt foi utilizado como ferramenta de apoio para estruturar de forma correta e limpa a arquitetura de componentes da aplicação, garantir a correta aplicação de tags semânticas no HTML, realizar o consumo assíncrono seguro da API pública tratando possíveis cenários de erro e acelerar a construção da estilização responsiva.