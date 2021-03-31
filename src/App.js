import { useContext, useState } from "react";
import CharactersContext from "./context/CharactersContext";
import ThemeContext from "./context/ThemeContext";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Efectos from "./components/Efectos";
import "./sass/App.scss";
import Footer from "./components/Footer";
function App() {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const [characters, setCharacters] = useState([]);
  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      <div className={theme ? "App" : "App__dark"}>
        {theme === false && <Efectos />}

        <Header />
        <main>
          <Characters />
        </main>
        <Footer />
      </div>
    </CharactersContext.Provider>
  );
}

export default App;
