import './App.css'
import { Contact } from './assets/Components/Contact'
import { Footer } from './assets/Components/Footer'
import Herosec from './assets/Components/Herosec'
import { Intro } from './assets/Components/Intro'
import Navbar from './assets/Components/Navbar'
import { Text1 } from './assets/Components/Text1'

 

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Herosec></Herosec>
    <Text1></Text1>
    <Intro></Intro>
    <Contact></Contact>
    <Footer></Footer>
      
    </>
  )
}

export default App