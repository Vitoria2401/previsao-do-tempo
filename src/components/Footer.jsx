function Footer() {
  return (
    <footer className="footer">
      <p>
        Dados fornecidos por{" "}
        <a href="https://openweathermap.org" target="_blank" rel="noreferrer">
          OpenWeatherMap
        </a>
        . Projeto do Bootcamp Kodie · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
