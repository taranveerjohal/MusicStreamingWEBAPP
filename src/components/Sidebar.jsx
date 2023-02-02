import { useState } from "react";
import { links } from "../assets/constants";
import { NavLink } from "react-router-dom";
import {HiOutlineMenu} from "react-icons/hi";
import {RiCloseLine} from "react-icons/ri";

import {logo} from "../assets";
const NavLinks = ({handleClick}) => {
  return (
    <div className="flex flex-col space-y-4 mt-10">
      {links.map((link) => (
        <NavLink to={link.to} key={link.name} onClick={() => handleClick && handleClick()}>
          <div className="flex items-center space-x-2">
            <link.icon className="w-6 h-6 mr-2" />
            <div className="text-sm font-medium hover:text-[#f0632bee] text-white">{link.name}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [stateMobileMenu, setStateMobileMenu] = useState(false);

    return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 bg-[#330a0af3] px-4">
        <img src={logo} alt="logo" className="object-contain w-full h-14" />
        <NavLinks />
      </div>
      <div className="md:hidden absolute block top-6 right-3 ">
        {/* Mobile Menu */
        stateMobileMenu ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setStateMobileMenu(false)} />)
          :<HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setStateMobileMenu(true)} />
        }  
      </div> 
      <div className={`absolute top-0 h-screen w-2/4 bg-gradident-to-tl from-white/10 to-[#dd303085] backdrop-blur-lg
         z-10 p-6 md:hidden smooth-transition ${stateMobileMenu ? "left-0": "-left-full"}`}>
          <img src={logo} alt="logo" className="object-contain w-full h-14" />
          <NavLinks handleClick={() => setStateMobileMenu(false)} />
      </div>
    </>
    )
  };

export default Sidebar;
