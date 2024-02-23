import './App.css'
import './Header_Footer.css'
import { useState } from 'react'
import Header_Padrao from './components/Header_Padrao'
import Footer_padrao from './components/Footer_Padrao'
import Classes from './components/Classes'
import Selects from './components/select'


import './cards.css'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header_Padrao />
      <div>
        <Selects></Selects>
        <div id='bodyjsx'>
          <Classes/>
        </div>
      </div>
      <Footer_padrao />
    
    </>
  )
}

export default App
