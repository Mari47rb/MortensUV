import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hej from './components/Hej'
import MainContent from './components/MainContent'
import Navigation from './components/Navigation'

function App() {


  return (
    <>
      <Navigation />
      <Header />
      <MainContent />
      <Footer />
      <Hej navn="Marie" alder="23"/>
      <Hej navn="Matilde"/>
      <Hej navn="Amalie"/>
      <Hej navn="Nina"/>
    </>
  )
}

export default App
