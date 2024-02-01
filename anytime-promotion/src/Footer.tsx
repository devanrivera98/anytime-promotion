import {SocialIcon} from 'react-social-icons';

export default function Footer() {
  return (
    <>
    <footer className="bg-black text-white footer-container text-center">
      <div className="flex h-full items-center my-auto justify-evenly">
        <div className='footer-text-container'>
          <h1>@2024 Anytime Promotion</h1>
        </div>
        <div className="flex justify-center footer-image-container">
          <img className='h-full' src="/anytime-white-logo.png" alt="anytime-logo"/>
        </div>
        <div className="flex justify-center footer-icon-container">
          <div className=" mx-1">
            <SocialIcon url='www.instagram.com' href='https://www.instagram.com/anytimepromotions/' />
          </div>
          <div className="mx-1">
            <a>
              <SocialIcon url='www.facebook.com' href='https://www.facebook.com/AnytimePromotions/' />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
