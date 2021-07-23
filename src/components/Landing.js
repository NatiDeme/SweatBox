import React from 'react';
import gym from '../images/gym.jpg';
import { Link } from 'react-router-dom';
function Landing() {
    return (
        <>
            <div className="bg-black flex items-center h-screen">
                <div className='w-2/5 pl-14 font-black'>
                    <h1 className='text-white '>SWEATBOX</h1>
                    <h1 className='text-white mb-8'>GYM</h1>
                    <Link className='text-black bg-yellow-600 px-10 py-6 mt-10 borde '>Register Now!</Link>
                </div>
                
                <img className='w-2/5' src={gym} alt='man working out' />
                
            </div>
        </>
    )
}

export default Landing
