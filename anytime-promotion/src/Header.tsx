import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Timer from './Timer';

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
  <header className='bg-black text-white py-5'>
    <div className='bg-black container flex justify-between mx-auto'>
      {/* <h4 className='ml-5'>Anytime Promotion</h4> */}
      <h4 className={`ml-5 text-xl ${isMobile ? 'hidden' : '' }`}>Anytime Promotion</h4>
        <img className={`header-white-logo ${isMobile ? '' : 'hidden'}`} src='anytime-white-logo.png' />
      <nav>
        <ul>
          <li className='inline-block'>
            <a className='hover:underline hover:cursor-pointer underline-offset-4'>Home</a>
          </li>
          <li className='inline-block'>
            <a className='hover:underline hover:cursor-pointer underline-offset-4'>Events</a>
          </li>
          <li className='inline-block'>
            <a className='hover:underline hover:cursor-pointer underline-offset-4'>Autograph Validator</a>
          </li>
          <li className='inline-block'>
            <a className='hover:underline hover:cursor-pointer underline-offset-4'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <Timer/>
  <Outlet/>
  </>
)

}
