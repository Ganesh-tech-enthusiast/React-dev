import Navbar from './components/Navbar'
import Btn from './components/Btn';
import { useState } from 'react';
import { ThemeContext } from './assets/Context/ThemeContext';

export default function App() {

 const [theme,setTheme] = useState("light");

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Navbar/>
      <Btn/>
    </ThemeContext.Provider>
    </>
  );
}
    
