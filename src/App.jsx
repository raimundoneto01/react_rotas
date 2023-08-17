import { useState } from 'react'
import AppRotas from './components/AppRotas/AppRotas'
import NavBar from './components/NavBar/NvaBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRotas/>
      <NavBar/>
    </>
  )
}

// link pra instalar o bootstrap no react ...site celk....
// depois importar no main.jsx..

export default App
