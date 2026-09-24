import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cars' element={<Cars/>}/>
          <Route path='/contacts' element={<Contact/>}/>
        </Routes>
     </>
  )
}

export default App
