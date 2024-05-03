import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Homepage from './Homepage'
import Validator from './Validator'
import Events from './Events'
import WhittierFestPage from './WhittierFestPage'
import './App.css'
import ContactForm from './ContactForm'
import Footer from './Footer'

function App() {


  return (
    <>
      <div className='relative'>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Homepage/>} />
            <Route path='/whittier-comic-fest' element={<WhittierFestPage/>} />
            <Route path='/events' element={<Events />} />
            <Route path='/validator' element={<Validator/>} />
            <Route path='/contact' element={<ContactForm />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
