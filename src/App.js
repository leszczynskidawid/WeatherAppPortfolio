import { GlobalStyles } from "Styles/GlobalStyle";
import ProviderContextTheme from "context/ThmeProviderContex";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "Page/HomePage/HomePage";
import { NoMatchPage } from "Page/HomePage/NoMatchPage.js/NoMatchPage";
import { routePathTypes } from "const/routePathTypes";

function App() {
  return (
    <ProviderContextTheme>
      <GlobalStyles />
      <Routes>
        <Route path={routePathTypes.home} element={<HomePage />} />
        <Route path={routePathTypes.noMatch} element={<NoMatchPage />} />
      </Routes>
    </ProviderContextTheme>
  );
}

export default App;
