
import './App.css'
import Card from './components/Card'
import Features from './components/features'


function App() {

  return (
    <>
    <h1 className=' bg-green-400 text-black p-6 rounded-xl hover:bg-blue-600 hover:text-white'>Tailwind is very best , I have styled this text usng tailwind css!</h1>
    <Features value ={45} name="Ganesh"/>
    <Card/>
    </>
  )
}

export default App
