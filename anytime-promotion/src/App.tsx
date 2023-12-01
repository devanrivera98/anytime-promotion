import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Homepage from './Homepage'
import Validator from './Validator'
import Events from './Events'
import './App.css'
import ContactForm from './ContactForm'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Homepage/>} />
            <Route path='/events' element={<Events />} />
            <Route path='/validator' element={<Validator/>} />
            <Route path='/contact' element={<ContactForm />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
