import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Detail from './Components/Detail'
import NotFound from './Components/NotFound'
import Resso from './pages/Resso'
import Spotify from './pages/Spotify'
import Netflix from './pages/Netflix'
import WeTV from './pages/weTV'
import Youtube from './pages/Youtube'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/Spotify' element={<Spotify />} />
      <Route path='/Resso' element={<Resso />} />
      <Route path='/Netflix' element={<Netflix />} />
      <Route path='/weTV' element={<WeTV />} />
      <Route path='/Youtube' element={<Youtube />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
