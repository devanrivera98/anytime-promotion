import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import Timer from './Timer';

export default function Header() {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false)

  // function handleResize() {
  //   setWindowWidth(window.innerWidth)
  // }

  const handleIconClick = () => {
    setIsOpen(!isOpen)
    console.log('is clicked')
  }

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (windowWidth < 768) {
  //     setIsMobile(true)
  // } else {
  //   setIsMobile(false)
  // }
  // }, [windowWidth])

return (
  <>
  <header>
    <nav className='bg-black text-white py-4'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <a className='pl-3'>
          <div className='md:block hidden'>Anytime Promotion</div>
          <img className='w-12 h-15 md:hidden' src='/anytime-white-logo.jpg'></img>
        </a>
        <button onClick={handleIconClick} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none hover:ring-2 hover:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        {/* needs hidden */}
        <div className={`w-full md:block md:w-auto p-2 md:p-0 ${isOpen ? '' : 'hidden'}`}>
          <ul className='flex flex-col p-4 md:p-0 border border-gray-400 rounded-md bg-gray-900 md:flex-row md:mt-0 md:border-0 md:bg-black '>
            <li>
              <a href='#' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black'>Home</a>
            </li>
            <li>
              <a href='#' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black'>Events</a>
            </li>
            <li>
              <a href='#' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black'>Autograph Validator</a>
            </li>
            <li>
              <a href='#' className='block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-gray-800 md:p-0 md:bg-black'>Contact Us</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <Timer/>
  <Outlet/>
  </>
)

}
