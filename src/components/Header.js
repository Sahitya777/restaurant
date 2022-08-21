import React from 'react'
import Logo from'./img/logo.png'
import Avatar from './img/avatar.png'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {app} from '../firebase.config'
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import { MdShoppingCart, MdLogout, MdAdd } from "react-icons/md";
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Header = () => {
    const firebaseAuth=getAuth(app);
    const provider=new GoogleAuthProvider();


    const [ {user}, dispatch] = useStateValue();

    const login=async()=>{
        if(!user){
            const {user}= await signInWithPopup(firebaseAuth,provider);
            const { refreshToken, providerData } = user;
            dispatch({
                type:actionType.SET_USER,
                user:providerData[0],
            });
            localStorage.setItem('user',JSON.stringify(providerData[0]))
        }
        
    }
  return (
    <header className=' z-50 w-screen px-16 pt-7'>
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} className='w-10 object-cover' alt='logo'/>
                <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>
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
                <div className='relative'>
                    <motion.img
                    whileTap={{scale: 0.6}}
                    src={user? user.photoURL: Avatar} onClick={login} className="w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full" alt='userProfile'/>
                    <div className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0 px-4 py-2'>
                        {
                            user && user.email==="sahityanijhawan@gmail.com" &&(
                                <Link to={'/createItem'}>
                                    <p className="px-4 py-2 cursor-pointer hover:bg-slate-200 flex items-center gap-3">
                                        New Item <MdAdd />
                                    </p>
                                </Link>
                            )
                        }
                        <p className="px-4 py-2 cursor-pointer hover:bg-slate-200 flex items-center gap-3">Logout <MdLogout /> </p>


                    </div>
                </div>
            </div>
        </div>

        <div className='flex md:hidden w-full h-full'>

        </div>
    </header>
  )
}

export default Header