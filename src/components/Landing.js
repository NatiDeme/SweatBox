import React from 'react';
import gym from '../images/gym.jpg';
import { Link } from 'react-router-dom';
function Landing() {
    return (
        <>
            <div className="bg-black flex items-center md:h-screen">
                <div className='w-2/5 pl-14 '>
                    <div className='font-black lg:text-9xl'>
                        <div className='flex'><h1 className='text-white '>SWEAT</h1><h1 className='text-yellow-600 '>BOX</h1></div>
                        <h1 className='text-white mb-8'>GYM</h1>
                    </div>
                    <Link className='text-black bg-yellow-600 px-10 py-6 mt-10 borde ' to='/'>Register Now!</Link>
                </div>

                <img className='w-2/5' src={gym} alt='man working out' />

            </div>
        </>
    )
}

export default Landing
