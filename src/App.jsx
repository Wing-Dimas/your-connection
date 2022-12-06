import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Detail from './Components/Detail'
import NotFound from './Components/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
