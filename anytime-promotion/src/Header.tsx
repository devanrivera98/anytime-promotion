import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth)
    console.log(windowWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return (
      window.removeEventListener('resize', handleResize)
    )
  }, [])

return (
  <>
  <header className='bg-black text-white py-4'>
    <div className='container flex justify-between mx-auto'>
      <h4 className='ml-5'>Anytime Promotion</h4>
        <img className='header-white-logo' src='anytime-white-logo.png' />
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
