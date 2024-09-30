import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const NavLinks = [
        { title: "Profile", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" }
    ];

    return (
        <div className="w-screen h-[3rem] bg-stone-800 flex justify-between items-center px-10">
            <div className=" text-white text-xl font-extrabold">
                BHARATHI A K
            </div>
            <div className="flex flex-row justify-end text-white">
                <ul className='list-none flex flex-row justify-end gap-4'>
                    {
                        NavLinks.map((navdata, index) => (
                            <NavLink 
                                key={index} 
                                to={navdata.path} 
                                className={({ isActive }) => 
                                    `border-b-4 w-[5rem] ${isActive ? 'border-transparent back' : 'border-transparent text-white'}`
                                }
                            >
                                <li className='text-xl h-full rounded-sm flex justify-center items-center'>
                                    {navdata.title}
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
