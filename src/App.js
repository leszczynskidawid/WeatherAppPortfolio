import { GlobalStyles } from "Styles/GlobalStyle";
import ProviderContextTheme from "context/ThmeProviderContex";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "Page/HomePage/HomePage";
import { NoMatchPage } from "Page/HomePage/NoMatchPage.js/NoMatchPage";

function App() {
  return (
    <ProviderContextTheme>
      <GlobalStyles />
      <Routes>
        <Route path="/WeatherAppPortfolio" element={<HomePage />} />
        <Route path="/nomatch" element={<NoMatchPage />} />
      </Routes>
    </ProviderContextTheme>
  );
}

export default App;
