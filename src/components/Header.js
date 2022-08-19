import React from 'react'
import Logo from'./img/logo.png'
const Header = () => {
  return (
    <header className='fixed z-50 w-screen px-16 pt-20'>
        <div className='hidden md:flex w-full h-full'>
            <div className='flex items-center gap-2'>
                <img src={Logo} className='w-10 object-cover' alt='logo'/>
                <p className='text-headingColor text-xl font-bold'>City</p>

            </div>
            <ul className='flex items-center gap-8 ml-auto'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </ul>
        </div>

        <div className='flex md:hidden w-full h-full'>

        </div>
    </header>
  )
}

export default Header