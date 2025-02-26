import React from "react";
import Link from "next/link";


const Header: React.FC =()=>{
    const navLinks = {
        home: "/",
        about: "#about",
        project: "#project",
        skill:"#skill",
        contact: "#contact",
        
      };
    return(
        <header className="z-20 bg-purple-900 p-6 sticky top-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-yellow-50 text-2xl font-bold hover:text-pink-600">Portfolio</h1>
                <nav>
      <ul className="flex space-x-[50px] text-white text-2xl">
        <li className="hover:text-pink-400">
          <Link href={navLinks.home}>Home</Link>
        </li>
        <li className="hover:text-pink-400">
          <Link href={navLinks.about}>About</Link>
        </li>
        <li className="hover:text-pink-400">
          <Link href={navLinks.project}>Project</Link>
        </li>
        <li className="hover:text-pink-400">
          <Link href={navLinks.skill}>Skill</Link>
        </li>
        <li className="hover:text-pink-400">
          <Link href={navLinks.contact}>Contact</Link>
        </li>
      </ul>
    </nav>
{/* <nav>
            <ul className="flex space-x-12 text-white text-xl md:text-3xl">
              <li><a href="#home" className="hover:text-purple-400 transition-all duration-300 ease-in-out">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-all duration-300 ease-in-out">About me</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-all duration-300 ease-in-out">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-all duration-300 ease-in-out">Contact</a></li>
            </ul>
          </nav> */}
            </div>
        </header>
    );
};
export default Header;