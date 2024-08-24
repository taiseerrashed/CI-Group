import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png"
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setToggle(!toggle);
    };
    const isHomePage = location.pathname === "/";
    const navbarBgColor = isHomePage ? "bg-white" : "bg-mainColor";
    const textColor = isHomePage ? "text-mainColor" : "text-white";

  return (
    <div className={`w-full flex justify-around items-center ${navbarBgColor} py-1`}>
        <div>
            <NavLink to="/">
                <img src={Logo} alt="Logo" className="w-[80px] h-[75px]" />
            </NavLink>
        </div>
        <ul 
          className={`
            flex justify-between gap-6 
            flex-col 
            lg:flex-row 
            lg:gap-10
            ${navbarBgColor} 
            absolute
            z-20 
            lg:static 
            left-0 top-[80px] 
            lg:top-auto 
            w-full 
            lg:w-auto 
            px-8 
            lg:px-0 
            transition-all 
            duration-300 
            ${toggle ? 'block' : 'hidden lg:flex'}`}
            >
            <li>
                <NavLink to="/" className={`${textColor} text-lg`}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/gallery" className={`${textColor} text-lg`}>Gallery</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={`${textColor} text-lg`}>About Us</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={`${textColor} text-lg`}>Contact Us</NavLink>
            </li>
        </ul>

        <div>
            <i className='bx bx-globe text-2xl'></i>
        </div>
        
        <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-mainColor text-2xl">
                <i className={`bx ${toggle ? 'bx-x' : 'bx-menu'}`}></i>
            </button>
        </div>
    </div>
  );
};

export default Navbar;
