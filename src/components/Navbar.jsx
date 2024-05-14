import React from 'react'

function Navbar() {
    return (
        <div className='w-10/12 main-container m-auto flex items-center justify-between'>
            <div className="logo main-title uppercase text-white text-[60px]">Zia</div>
            <div className="menu flex gap-8 items-center">
                <p className="title text-white">Home</p>
                <p className="title text-white">About Me</p>
                <p className="title text-white">Projects</p>
                <p className="title text-white">Services</p>
                <p className="title text-white">Contact</p>
                <button className="button title uppercase ml-8">let's talk</button>
            </div>
        </div>
    )
}

export default Navbar
