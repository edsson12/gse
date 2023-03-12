import "./App.css";
import CatImage from "./components/CatImage/CatImage";
import { createContext, useState } from "react";
import { Provider } from 'react-redux';
import store from './store';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [icon,setIcon]=useState(true);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    setIcon(!icon);
  };
  return (
    <Provider store={store}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CatImage theme={theme} toggleTheme={toggleTheme} icon={icon}/>
    </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
//Delevoped by Edsson Andree Cortes Vasquez 11/03/2023