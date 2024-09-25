import React from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const nav = useNavigate()
    const NavLinks = [{
        title: "Profile",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    }
    ]
const Navbar = () => {
    return (
        <>
            <div className="w-screen h-[5rem] bg-stone-700 flex justify-between items-center px-10">
                <div className="font-sans text-2xl text-white">
                    BHARATHI A K
                </div>
                <div className="font-sans text-lg flex flex-row space-x-8 text-white">
                <ul className='w-[75%] list-none flex flex-row justify-evenly h-full'>
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path} className='border-b-4 border-transparent w-[5rem]'>
                                        <li className='font-bold text-xl text-purple-600 h-full rounded-sm flex justify-center items-center'>{navdata.title}</li>
                                    </NavLink>
                                ))
                            }
                        </ul>
                </div>
            </div>
        </>
    )
}
}

export default Navbar
