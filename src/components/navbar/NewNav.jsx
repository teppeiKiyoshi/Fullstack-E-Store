import logo from '../../assets/amaterasu.png';
import {
    MagnifyingGlassIcon,
    ShoppingBagIcon
  } from "@heroicons/react/24/outline";

const NewNav = () => {
  return (
    <>
    
    <div className="container">
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Categories</a></li>
                <li><a href="">About</a></li>
            </ul>
            <span>
                <a href="/">
                    <MagnifyingGlassIcon/>
                </a>
            </span>
            <span>
                <a href="/">
                    <ShoppingBagIcon/>
                </a>
            </span>
        </nav>
    </div>
    
    </>
  )
}

export default NewNav