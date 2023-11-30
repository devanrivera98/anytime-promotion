import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Banner from './Banner';
// import { faToggleOff } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleIconClick = () => {
    setIsOpen(!isOpen)
  }

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

return (
  <>
  <header className={`mobile-open ${isOpen ? 'fixed inset-0 z-20' : ''}`}>
    <nav className='bg-black text-white text-lg py-4'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='pl-3 hover:cursor-pointer'>
          <div className='md:block hover:animate-pulse hidden'>Anytime Promotion</div>
          <img className='w-12 h-15 md:hidden' src='/anytime-white-logo.jpg'></img>
        </a>
        <a href='#' id='menu-icon' className={isOpen ? 'close' : ''} onClick={handleIconClick}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </a>
        <div className={`w-full md:h-auto md:block md:w-auto md:p-2 md:p-0 ${isOpen ? 'drawer-open' : 'drawer-closed'}`}>
          <ul className='flex flex-col justify-evenly h-5/6 items-center mt-4 p-4 md:p-0 border border-gray-400 rounded-lg md:flex-row md:mt-0 md:border-0 md:bg-black drawer overflow-y-hidden  '>
            <li>
              <a href='/' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black md:hover:underline underline-offset-4'>Home</a>
            </li>
            <li >
              <a href='/events' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black md:hover:underline underline-offset-4'>Events</a>
            </li>
            <li>
              <a href='/validator' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black md:hover:underline underline-offset-4'>Autograph Validator</a>
            </li>
            <li>
              <a href='/contact' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black md:hover:underline underline-offset-4'>Contact Us</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <Banner/>
  <Outlet/>
  </>
)

}
