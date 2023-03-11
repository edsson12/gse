import "./App.css";
import CatImage from "./components/CatImage/CatImage";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CatImage theme={theme} toggleTheme={toggleTheme}/>
    </ThemeContext.Provider>
  );
}

export default App;
