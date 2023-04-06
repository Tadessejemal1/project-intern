/* eslint-disable no-useless-concat */
import React from 'react';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import Rightbar from './Rightbar';

const Navbar = () => {
    const Menus = [
        { title: "View On Map", image: 'map' },
        { title: "Get Directions", image: 'direction-line' },
        { title: "Share", image: 'share-line'  },
        { title: "My Notes ", image: 'note-favorite' },
        { title: "MLS Lists", image: 'shopping-cart' },
    ];
    const Properties = [
        { title: "Appartments", image: 'building-4' },
        { title: "3-Bedrooms", image: 'Vector (2)' },
        { title: "2-Bathrooms", image: 'Vector (3)' },
        { title: "2-Garage", image: 'car' },
        { title: "1.93 sqrft", image: 'home-2' },
        { title: "1.72sqrft", image: 'format-square' },
    ];
    const Tables = [
        { name: "Tax", value: '$1,340/2022' },
        { name: "Type", value: 'Single-Family' },
        { name: "Building Age", value: '5 year' },   
        { name: "Size", value: '1500-200feet2' },
        { name: "Parking", value: 'Detached 2 Garage,6 parking' },
        { name: "Basement", value: 'Unfinished' },
        { name: "MLS#", value: 'E5579076' },
        { name: "Position", value: '5 Day' },
    ]

    const [curser, setCurser] = useState(0);
    const [menuVisible, setMenuVisible] = useState(false);
    const prev = () => {
        if (curser > 0) {
          setCurser(curser - 1);
        }
    };
    const next = () => {
        if (curser < 2) {
          setCurser(curser + 1);
        }
    };

    useEffect (() => {
      setMenuVisible(false);
    }, []);


  return (
    <section>
      <div className='flex justify-between items-center h-24 mx-auto px-4 text-black'>
        <div className='w-full text-3xl font-bold mr-60 md:mr-0'>
            <h1 className='text-2xl pl-6'>Dashboard</h1> 
        </div>
        <button type='button'
            onClick={() => setMenuVisible(!menuVisible)} 
            className='top-2 right-2 z-20 rounded-md border-2 p-1 md:hidden'>
            {menuVisible ? (
                <MdClose className='h-4 w-4' />
            ) : (
                <GiHamburgerMenu className='h-4 w-4' />
            )}
        </button>
        <div className='flex w-screen overflow-y-hidden bg-slate-100'>
            <ul className={`${
                menuVisible ? 'flex' : 'hidden'
              }  absolute top-0 right-0 z-10 h-screen flex-col md:flex-row items-center justify-evenly overflow-hidden bg-white md:bg-slate-100 md:h-24 border-r py-4 pl-2 md:static md:flex md:w-full`}>
                <li className='px-2'>
                    <img src = {require('./../assets/notification' + '.png')} alt='icon is not available' className='w-6 h-6' />
                </li>
                <li className='px-2'>
                    <img src = {require('./../assets/search-status' + '.png')} alt='icon is not available' className='w-6 h-6' />
                </li>
                <li className='p-2'>
                    <img src = {require('./../assets/setting-2' + '.png')} alt='icon is not available' className='w-6 h-6' />
                </li>
                <li className='px-4'>
                    <img src = {require('./../assets/logout' + '.png')} alt='icon is not available' className='w-6 h-6' />
                </li>
                <div className='flex flex-row gap-3 px-2'>
                    <img src = {require('./../assets/Ellipse 1' + '.png')} alt='icon is not available' />
                    <h5>Betilay Erdic
                        <p>heneryrock@gmail.com</p>
                    </h5>
                </div>
                <div className='px-2'>
                    <img src = {require('./../assets/Path 3859' + '.png')} alt='icon is not available' />
                </div>
            </ul>
        </div> 
        </div>
        <div className='flex flex-row gap-3 px-8'>
            <img src = {require('./../assets/room-1' + '.jpg')} alt='icon is not available' className='h-70 w-80 pl-4' />
            <img src = {require('./../assets/room-2' + '.jpg')} alt='icon is not available' className='h-70 w-80' />
            <img src = {require('./../assets/room-3' + '.webp')} alt='icon is not available' className='h-70 w-80' />
        </div>
        <div className="absolute pl-72 inset-0 flex items-center justify-between p-4">
                <button type='button'
                onClick={prev}
                className="p-1 shadow"
                >
                <img src = {require('./../assets/Group-2' + '.png')} alt='icon is not available' />
                </button>
                <button type='button'
                onClick={next}
                className="p-1 shado pr-10"
                >
                <img src = {require('./../assets/Group-1' + '.png')} alt='icon is not available' />
                </button>
        </div>
        
      <div className='flex flex-col gap-3 sm:flex-col lg:flex-row md:flex-col'>
        <div className='m-4 p-2 bg-white w-54 h-full border border-white rounded'>
            <div className='flex flex-row gap-3 p-4'>
                <button type='button' className='text-green-700 py-2 px-4 border bg-green-100 border-blue-500  rounded w-30'>For Sale</button>
                <button type='button' className='bg-blue-500 text-white font-bold py-2 px-4 rounded-xl'>Add List</button>
            </div>
            <div className=''>
                <div className='p-4'>
                    <h2>MLS#: E5567890</h2>
                    <p>Listed For: $ 1200</p>
                    <p>Address:5th Avenue</p>
                </div>
                <div className=''>
                    <ul className='p-4'>
                        {Menus.map((menu, index) => (   
                            <li key={index} className='flex gap-3 p-3 w-44 bg-slate-50 text-black border border-bg-white-100 rounded my-1'>
                                <img src={require('./../assets/' + menu.image + '.png')} alt='no' />
                                <h3>{menu.title}</h3>
                            </li>
                        ))}
                    </ul>
                    <div className='ml-4 pl-4 w-56 border border-bg-white-100 rounded'>
                        <p>Lifting Agent</p>
                        <h5>Coursery Henery</h5>
                        <div className='flex flex-row gap-4'>
                            <div className='flex flex-row gap-2'>
                                <img src = {require('./../assets/phone' + '.png')} alt='icon is not available' className='w-5 h-5' />
                                <p> +923457889999</p>
                            </div>
                            <img src = {require('./../assets/sms' + '.png')} alt='icon is not available' className='w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-4 p-1'>
          <div className='items-center h-20 flex flex-row gap-3 border border-white rounded-xl'>
            <h2 className='items-center px-3'>property Deatil</h2>
            {Properties.map((property, index) => (   
                <li key={index} className='flex flex-col items-center text-black'>
                    <img src={require('./../assets/' + property.image + '.png')} alt='no' className='w-6 h-6' />
                    <h3 className=''>{property.title}</h3>
                </li>
                    
            ))}
          </div> 
          <div className='flex flex-row gap-8 md:gap-40 pt-8 pl-4 border-b border-gray-400 p-2'>
            <h2>Key Facts</h2>
            <h2>Details</h2>
            <h2>Rooms</h2>
          </div>  
          <div className='pl-4 py-4'>
            <p className='text-gray-500'>lorem epsee fjjf this is the mern stack project to do by tadesse jemal i can't hand;e it my words are separwxred dkfir kfosmmd</p>
          </div>
          <div className='overflow-x-auto md:table-fixed'>
            <table className="w-full text-sm text-left">
                <tbody>
                    { Tables.map((table, index) => (
                        <tr key={ index } className='border-b dark:bg-gray-800 dark:border-gray-700'> 
                            <td className='px-4 py-4'>{table.name}</td>
                            <td className='md:pl-72 py-4'>{table.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
          </div> 
          <div className='px-4 py-4'>
            <h3>Description</h3>
            <p className='text-gray-500 py-4'>lorem epsee fjjf this is the mern stack project to do by tadesse jemal i can't hand;e it my words are separwxred dkfir kfosmmd</p>
          </div>
        </div>
        <div className='w-full bg-slate-100 p-1'>
            <Rightbar />
        </div> 
      </div>
      
    </section>
  )
}

export default Navbar
