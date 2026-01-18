import { useContext } from "react"
import { ThemeContext } from "../assets/Context/ThemeContext"


export default function Navbar() {
const {theme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-between items-center py-4 px-8 text-white ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-amber-600 text-black'}
    }`}  >
        <h1 className='text-5xl p-4'>logo</h1>
        <div className='flex gap-16 text-2xl pr-5'>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <h2>Products</h2>
        </div>
    </div>
  )
}
