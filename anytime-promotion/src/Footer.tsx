import {SocialIcon} from 'react-social-icons';

export default function Footer() {

  function clickLogo() {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  return (
    <>
    <footer className="bg-black text-white footer-container text-center">
      <div className="flex flex-col sm:flex-row h-full items-center my-auto justify-evenly py-5 sm:py-0">
        <div className='footer-text-container'>
          <h1>@2024 Anytime Promotion</h1>
        </div>
        <div className="flex justify-center footer-image-container">
          <img className='h-full cursor-pointer' src="/anytime-white-logo.png" alt="anytime-logo" onClick={clickLogo}/>
        </div>
        <div className="flex justify-between sm:justify-center footer-icon-container">
          <div className=" mx-1">
            <SocialIcon target='_blank' url='www.instagram.com' href='https://www.instagram.com/anytimepromotions/' />
          </div>
          <div className="mx-1">
              <SocialIcon target='_blank' url='www.facebook.com' href='https://www.facebook.com/AnytimePromotions/' />
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
