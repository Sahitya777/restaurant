import React from 'react'
import Logo from'./img/logo.png'
import Avatar from './img/avatar.png'
import { MdShoppingCart, MdLogout, MdAdd } from "react-icons/md";
const Header = () => {
  return (
    <header className='fixed z-50 w-screen px-16 pt-20'>
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <div className='flex items-center gap-2'>
                <img src={Logo} className='w-10 object-cover' alt='logo'/>
                <p className='text-headingColor text-xl font-bold'>City</p>

            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                <div className='relative flex items-center justify-center'>
                    <MdShoppingCart className='text-textColor text-2xl cursor-pointer'/>
                    <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-sm text-white font-semibold'>2</p>
                    </div>

                    

                </div>
                <img src={Avatar} className="w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-2xl" alt='userProfile'/>
            </div>
        </div>

        <div className='flex md:hidden w-full h-full'>

        </div>
    </header>
  )
}

export default Header