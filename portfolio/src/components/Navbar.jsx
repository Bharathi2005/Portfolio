import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="w-screen h-[5rem] bg-stone-700 flex justify-between items-center px-10">
                <div className="font-sans text-2xl text-white">
                    BHARATHI A K
                </div>
                <div className="font-sans text-lg flex flex-row space-x-8 text-white">
                    <div className="cursor-pointer hover:text-gray-300">Profile</div>
                    <div className="cursor-pointer hover:text-gray-300">Projects</div>
                    <div className="cursor-pointer hover:text-gray-300">Contact</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
