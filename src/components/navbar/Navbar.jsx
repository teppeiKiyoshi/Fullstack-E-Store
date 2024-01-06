import './navbar.css'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="wrapper">
        <div className="logo"><a href="/">Amaterasu</a></div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li>
            <a href="#" className="desktop-item">Categories</a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">Categories</label>
            <ul className="drop-menu">
              <li><a href="#">Drop menu 1</a></li>
              <li><a href="#">Drop menu 2</a></li>
              <li><a href="#">Drop menu 3</a></li>
              <li><a href="#">Drop menu 4</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop-item">Mega Menu</a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt="" />
                </div>
                <div className="row">
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Vectors</a></li>
                    <li><a href="#">Business cards</a></li>
                    <li><a href="#">Custom logo</a></li>
                  </ul>
                </div>
                <div className="row">
                  <header>Email Services</header>
                  <ul className="mega-links">
                    <li><a href="#">Personal Email</a></li>
                    <li><a href="#">Business Email</a></li>
                    <li><a href="#">Mobile Email</a></li>
                    <li><a href="#">Web Marketing</a></li>
                  </ul>
                </div>
                <div className="row">
                  <header>Security services</header>
                  <ul className="mega-links">
                    <li><a href="#">Site Seal</a></li>
                    <li><a href="#">VPS Hosting</a></li>
                    <li><a href="#">Privacy Seal</a></li>
                    <li><a href="#">Website design</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#">Cart</a></li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
      </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar