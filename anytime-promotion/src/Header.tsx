import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth < 768) {
      setIsMobile(true)
  } else {
    setIsMobile(false)
  }
  }, [windowWidth])

return (
  <>
  <header className='bg-black text-white py-4'>
    <div className='container flex justify-between mx-auto'>
      {/* <h4 className='ml-5'>Anytime Promotion</h4> */}
      <h4 className={`ml-5 ${isMobile ? 'hidden' : '' }`}>Anytime Promotion</h4>
        <img className={`header-white-logo ${isMobile ? '' : 'hidden'}`} src='anytime-white-logo.png' />
      <nav>
        <ul>
          <li className='inline-block'>
            <a>Home</a>
          </li>
          <li className='inline-block'>
            <a>Events</a>
          </li>
          <li className='inline-block'>
            <a>Autograph Validator</a>
          </li>
          <li className='inline-block'>
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>


  </header>
  <Outlet/>
  </>
)

}
