import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Homepage from './Homepage'
import './App.css'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Homepage/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
