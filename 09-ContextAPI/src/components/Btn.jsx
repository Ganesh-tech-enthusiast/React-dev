
import { ThemeContext } from '../assets/Context/ThemeContext'
import { useContext } from 'react';

export default function Btn() {

  //now here we can useContext
  const {theme, setTheme} = useContext(ThemeContext);

  const changeTheme = ()=>{
    setTheme(theme == "light" ? "dark" : "light")
  }
  return (
    
      <button className='border-none bg-gray-600 text-white p-8 rounded-3xl text-5xl m-4 font-bold cursor-pointer' onClick={changeTheme}>Change Theme : {theme}</button>
    
  )
}
