import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Homepage from './Homepage'
import Slider from './HomeButton'
import Events from './Events'
import './App.css'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Slider/>} />
            <Route path='/events' element={<Events />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
