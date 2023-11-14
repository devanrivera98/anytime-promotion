import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false)

  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  const handleIconClick = () => {
    setIsOpen(!isOpen)
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
  <header className='header bg-black text-white py-6'>
    <div className='bg-black container flex justify-between mx-auto'>
      <h4 className={`ml-5 text-xl ${isMobile ? 'hidden' : '' }`}>Anytime Promotion</h4>
      <img className={`header-white-logo ${isMobile ? '' : 'hidden'}`} src='anytime-white-logo.png' />
      <div className={`nav-toggle ${isMobile ? '' : 'hidden'}`} onClick={handleIconClick}>
        <FontAwesomeIcon className={`${isOpen && isMobile ? 'hidden' : ''}`} icon={faBars} style={{ color: '#ffffff' }}  size='2x'/>
        <FontAwesomeIcon className={`${isOpen && isMobile ? '' : 'hidden'}`} icon={faXmark} style={{color: "#ffffff",}} size='2x' />
      </div>
      <nav className={`navigation ${isMobile ? 'navIsOpen' : ''}`}>
        <ul>
          <li className='md:inline-block'>
            <a href='#' className='hover:underline hover:cursor-pointer underline-offset-4'>Home</a>
          </li>
          <li className='md:inline-block'>
            <a href='#'  className='hover:underline hover:cursor-pointer underline-offset-4'>Events</a>
          </li>
          <li className='md:inline-block'>
            <a href='#' className='hover:underline hover:cursor-pointer underline-offset-4'>Autograph Validator</a>
          </li>
          <li className='md:inline-block'>
            <a href='#'  className='hover:underline hover:cursor-pointer underline-offset-4'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <Outlet/>
  </>
)

}
