import React, { useState, useEffect } from 'react';
import Nome from '../assets/head.png';
import Question from '../assets/message-question.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import Navbar from './Navbar';

const Sidebar = () => {
    const Menus = [
        { title: "Dashboard", image: 'speedometer' },
        { title: "Search Property", image: 'search-status' },
        { title: "Calender", image: 'calendar'  },
        { title: "My Clients ", image: 'profile-2user' },
        { title: "MLS Lists", image: 'shopping-cart' },
        { title: "Notifications", image: 'notification' },
        { title: "Invite & Earn ", image: 'user-cirlce-add' }
      ];
      const [menuVisible, setMenuVisible] = useState(false);

      useEffect (() => {
        setMenuVisible(false);
      }, []);

    return (
      <>
        <button
            type='button'
            onClick={() => setMenuVisible(!menuVisible)}
            className='absolute top-9 left-2 z-20 rounded-md border-2 p-1 md:hidden'
            >
            {menuVisible ? (
                <MdClose className='h-4 w-4' />
            ) : (
                <GiHamburgerMenu className='h-4 w-4' />
            )}
        </button>
        <div className='flex w-screen overflow-y-hidden bg-slate-100 '>
            <div className={`${
                menuVisible ? 'flex' : 'hidden'
              } absolute top-0 left-0 z-10 h-screen w-3/5 flex-col items-center justify-evenly overflow-hidden border-r bg-white py-4 pl-2 md:static md:flex md:w-full`}>
                <div className='p-4'>
                    <img src={Nome} alt='no' className='h-12 w-12 top-8 left-6'/>
                </div>
                <div className='flex mx-2'>
                    <button className='flex flex-row gap-3 items-center p-5 left-6 top-28 bg-blue-800 text-white'>
                        <h5>Create New Tour</h5>
                        <span className='text-xl'>+</span>
                    </button>
                </div>
                    <ul className='p-3 w-56 sm:w-56'>
                        {Menus.map((menu, index) => (   
                            <li key={index} className='flex gap-3 bg-slate-50 text-black border border-bg-white-100 py-2 px-4 rounded my-1'>
                                <img src={require('./../assets/' + menu.image + '.png')} alt='no' className='h-5 w-5' />
                                <h3>{menu.title}</h3>
                            </li>
                        ))}
                    </ul>
                <footer className='flex flex-col pt-20 pl-8'>
                    <div className='mb-2'>
                       <h1>Need Help ?</h1>
                    </div>
                    <div className='mb-2 flex gap-2'>
                        <img src={ Question } alt='no' className='h-6 w-6 pt-1'/>
                        <h3>Help Desk</h3>
                    </div>
                </footer>    
            </div>
            <div className = 'w-full md:w-4/5'>
                <Navbar />
            </div>
        </div>
      </>
    );
}

export default Sidebar;