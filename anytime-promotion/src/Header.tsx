import {Outlet} from 'react-router-dom'

export default function Header() {
return (
  <>
  <header className='bg-black text-white'>
    <div className='container flex justify-between align-items'>
      <h4>Anytime Promotion</h4>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Autograph Validator</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>

    {/* <img className='header-white-logo' src='anytime-white-logo.png' /> */}
  </header>
  <Outlet/>
  </>
)

}
