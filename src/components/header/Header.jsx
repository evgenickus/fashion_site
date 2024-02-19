import logoImg from './../../img/icons/logo.svg'
import './header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <img src={logoImg} alt='log' />
            <span>Fashion</span>
          </div>
          <nav className="header_nav">
            <ul>
              <li><a href='#!'>CATALOGUE</a></li>
              <li><a href='#!'>FASHION</a></li>
              <li><a href='#!'>FAVOURITE</a></li>
              <li><a href='#!'>LIFESTYLE</a></li>
              <li><a className='header_nav_bt' href='#!'>SING UP</a></li>
            </ul>

          </nav>

        </div>
      </div>
    </header >
  )
};
