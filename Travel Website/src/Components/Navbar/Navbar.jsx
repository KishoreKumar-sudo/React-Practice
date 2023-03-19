import React,{useState} from 'react'
import './Navbar.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
const Navbar = () => {

  //Let's display the navbar
  const[active, setActive] = useState('menuDiv')

  const showNavbar=()=>{
    setActive('menuDiv activenavbar')
  }
  //Let's remove the navbar
  const removeNavbar=()=>{
    setActive('menuDiv closenavbar')
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Wonder</h3>
        </div>
        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLinks">Home</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLinks">About Us</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLinks">Our Tours</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLinks">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLinks">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLinks">Contact Us</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLinks">Pages</a>
            </li>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
        <div className="socialIcons Flex">
          <BsFacebook className='icon' />
          <AiOutlineTwitter className='icon' />
          <AiFillYoutube className='icon' />
          <AiFillInstagram className='icon' />
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar