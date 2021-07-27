import React from 'react';
import { Link } from 'react-router-dom';
import Capture from '../images/Capture.PNG'

const Navbar = () => {
    return (
        <>
            <nav className='flex bg-black h-16 items-center justify-between text-white fixed w-full '>
                <Link to='/' className='pl-24' ><img src={Capture} alt='SweatBox' className='h-14 w-14' /></Link>
                <div className="px-4 cursor-pointer md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className="pr-16 md:block hidden font-normal ">
                    <Link className='p-4 border-b-4 border-yellow-600' to='/'>About</Link>
                    <Link className='p-4' to='/'>Classes</Link>
                    <Link className='p-4' to='/'>Activities</Link>
                    <Link className='p-4' to='/'>Contact Us</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
