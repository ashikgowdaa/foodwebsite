import React, { useState } from 'react'
import { IoMdMenu,IoMdCart,IoIosHelpCircle } from "react-icons/io";
import { FaSearch ,FaHeart,FaWallet,FaUserFriends} from "react-icons/fa";
import { IoCloseCircle ,IoPricetags} from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { RiDownloadCloud2Fill } from "react-icons/ri";
const Navbar = () => {

const [showNav,setShowNav]= useState(false);

  return (
    <>
    <div className=" flex justify-center items-center ">
        {/* left side section */}
        <div className="w-full justify-between  max-w-[1500px] flex items-center border-b-2 border-black py-4 sm:justify-start ">
            <div className="cursor-pointer flex items-center">
        <IoMdMenu size={'30'} onClick={()=>setShowNav(true)} />
            </div>
        <div className="flex w-1/2  sm:w2/5 justify-start gap-2 px-2">
            <div className="text-3xl sm:text-2xl lg:text-3xl font-medium">Best <span className='font-bold'>Eats</span></div>
            <div className="hidden  items-center gap-2 bg-gray-300 rounded-full md:flex ">
                <p className='bg-black rounded-full text-white text-xs px-5 font-bold h-full flex items-center '>Delivery</p>
                <p className='font-bold text-sm sm:text-1.5xl px-3'>Pickup</p>
            </div>
        </div>
        <div className="w-1/3 hidden items-center gap-1 md:flex">
            <FaSearch/>
            <input type="Search" placeholder='Search Foods'  className='w-full rounded-full p-1.5 focus:outline outline-2 outline-offset-2 bg-gray-300 '/>
        </div>
        <div className=" w-1/3 flex justify-end sm:justify-center">
            <div className="flex gap-1 w-2.5rem bg-black text-white rounded-full py-1 px-3 cursor-pointer items-center">
            <div className="">
                <IoMdCart size={20} color='#fff'/>
            </div>
            <div className="hidden sm:block">cart</div>
            </div>
        </div>
        </div>
        {/*Overlay */}
{/* side menubar */}
<div className={showNav ? "bg-black/80 w-full h-screen fixed top-0 z-1  duration-300":'absolute left-[-100%]'}></div>
<div className={showNav ?" w-9/12 md:w-1/2 bg-white h-screen fixed top-0 left-0 sm:w-1/5 z-20 duration-300":"absolute left-[-200%] "}>

 <div className="w-full flex justify-end"><IoCloseCircle size={50} style={{cursor:'pointer'}} onClick={()=>setShowNav(false)} /></div>
 <div className="ml-5">
    <ul className='flex gap-4 flex-col'>
        <li className='flex justify-start items-center gap-5 border-b-2 border-black p-2'>
            <span><FaTruckFast size={25}/></span>
            <span className='text-1xl font-bold'>Truck Delivery</span>
        </li>
        <li className='flex justify-start items-center gap-5 mt-3 border-b-2 border-black p-2 '>
        <span><FaHeart size={25}/></span>
            <span className='text-1xl font-bold'>Fovrites</span>
        </li>
        <li className='flex justify-start items-center gap-5  mt-3 border-b-2 border-black p-2 '>
        <span><FaWallet size={25}/></span>
            <span className='text-1xl font-bold'>Wallet</span>
        </li>
        <li className='flex justify-start items-center gap-5 mt-3 border-b-2 border-black p-2 '>
        <span><IoIosHelpCircle size={25}/></span>
            <span className='text-1xl font-bold'>Help</span>
        </li>
        <li className='flex justify-start items-center gap-5 mt-3 border-b-2 border-black p-2'>
        <span><IoPricetags size={25}/></span>
            <span className='text-1xl font-bold'>Promotions</span>
        </li>
        <li className='flex justify-start items-center gap-5 mt-3 border-b-2 border-black p-2 '>
        <span><RiDownloadCloud2Fill size={25}/></span>
            <span className='text-1xl font-bold'>Best Ones</span>
        </li>
        <li className='flex justify-start items-center gap-5 mt-3 border-b-2 border-black p-2'>
        <span><FaUserFriends size={25}/></span>
            <span className='text-1xl font-bold'>Invite Friends</span>
        </li>
    </ul>
 </div>

</div>

    </div>
    </>
  )
}

export default Navbar