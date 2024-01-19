// Header.jsx
import React, { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import flagImage from "../assets/flag.gif";
import logoImage from "../assets/indinatuslogo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-col h-24 w-full ">
      <div className="announcement-bar w-full h-[50%] bg-[#F79432] flex justify-between  text-white px-10">
        <div className="left flex w-full gap-5 items-center ">
          <div className="socia-icons flex justify-between gap-5 text-[20px]">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/IndiNatus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook />
            </a>
            <a
              href="GATXUWWYDFFHN4SK64F6H3X6UVUCRGMR6BXJ4JAPT2MMG5QI5VRQLQNE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/indinatus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/indinatus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXLine />
            </a>
          </div>

          <div className="search-bar">
            <input
              className="rounded w-[250px] h-9 outline-none placeholder:px-2 text-black py-2 pl-2 pr-2"
              type="text"
              placeholder="Search Products..."
            />
          </div>
        </div>

        <div className="right w-full flex justify-end items-center gap-5 text-[14px]">
          <ul className="flex gap-2">
            <li className="flex">
              About Us <MdKeyboardArrowDown style={{ alignSelf: "center" }} />
            </li>
            <li className="flex">
              Cyber Solution News
              <MdKeyboardArrowDown style={{ alignSelf: "center" }} />
            </li>
            <li className="flex">
              Case Study
              <MdKeyboardArrowDown style={{ alignSelf: "center" }} />
            </li>
            <li className="flex gap-1">
              Login <FaUserCircle style={{ alignSelf: "center" }} />
            </li>
            <li className="flex">
              Language Select{" "}
              <MdKeyboardArrowDown style={{ alignSelf: "center" }} />
            </li>
          </ul>
        </div>
      </div>

      <nav className="w-full h-[50%] bg-red px-10 py-5 flex items-center">
        <div className="logo flex w-[50%]">
          <a href="/"  rel="noopener noreferrer" className="flex items-center">
            <img src={logoImage} alt="logo" className="w-[53%]"/>
            <img src={flagImage} alt="logo" className="w-[56px] h-[35px]"/>
          </a>
        </div>
        <ul className="menu flex justify-end w-[50%] gap-8 text-lg font-bold">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/solution">Solution</Link></li>
          <li><Link to="/partners">Partners</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
