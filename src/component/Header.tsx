import React from "react";
const Header: React.FC =()=>{
    return(
        <header className="bg-purple-900 p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-yellow-50 text-2xl font-bold hover:text-pink-600">Portfoilo</h1>
                <nav>
                    <ul className="flex space-x-[50px] text-white text-2xl">
                        <li className="hover:text-pink-400"><a href="#home" ></a>Home</li>
                        <li className="hover:text-pink-400"><a href="#about" ></a>About </li>
                        <li className="hover:text-pink-400"><a href="#project"></a>Project</li>
                        <li className="hover:text-pink-400"><a href="#contect" ></a>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;