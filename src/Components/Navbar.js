import React, { useContext, useState, useEffect } from 'react'
import user from '../Icons/user.png'
import lock from '../Icons/lock.png'
import { Link, useParams, NavLink } from 'react-router-dom'
import UserContext from '../Context/User/UserContext'
import ProfileModal from './Profile/ProfileModal'


export default function Navbar() {
    
    let { id } = useParams();
    const context = useContext(UserContext)
    const { showInfo, name, email } = context
    const [isOpen, setIsOpen] = useState(false)
    const [profileModal, openProfileModal] = useState(false)

    useEffect(() => {
        showInfo(id)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const toggle = () => {
        if (isOpen === false) {
            setIsOpen(true)
        }
        else {
            setIsOpen(false)
        }
    }
    const toggleProfileModal = () => {
        openProfileModal(true)
    }

    return (
        <>
            <div className='bg-indigo-600 fixed top-0 left-0 right-0 z-10 dark:bg-[#6e6e6e] transition duration-500'>
                <div className='flex items-center m-2'>
                    <div className='w-4/5 flex'>
                        <button onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-stone-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg></button>
                        <img src={lock} alt="" className='pl-8' />
                        <Link to='/'><h1 className='text-4xl text-zinc-100 pt-4 pl-4 font-bold dark:text-[#f5f7fA]'>Password Manager</h1></Link>
                    </div>
                    <div className='grid grid-cols-2 w-1/2 justify-items-center'>
                        <button onClick={toggleProfileModal} className='justify-self-end'><img src={user} alt="" /></button>
                        <p className='text-slate-50 text-xl ml-[10px] dark:text-[#f5f7fA] justify-self-start'>{name}</p>
                    </div>

                </div>

            </div>
            {profileModal ? (<>
                <ProfileModal openProfileModal={openProfileModal} name={name} email={email} id={id} />
            </>) : (null)}
            {!isOpen ? (<div className={`flex flex-col items-center w-20 h-full overflow-hidden text-zinc-100 bg-indigo-700 rounded fixed top-[50px] left-[0px] dark:bg-[#6e6e6e] ${!isOpen ? 'translate-x-[0px]' : 'translate-x-0'} ease-in-out duration-300`}>

                <div className="w-full px-2 mt-8">
                    <div className="flex flex-col w-full mt-3">
                        <div className='mt-2'>
                            <NavLink className="flex items-center w-full h-[3.5rem] rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 active:bg-blue-300" activeClassName='bg-slate-900 dark:bg-[#181818]' to={`/main-app/${id}`}>
                                <img src="https://img.icons8.com/ios-filled/48/ffffff/password.png" className='pl-2 py-2' alt=''/>
                            </NavLink>
                        </div>
                       
                        <div className='mt-2'>
                            <NavLink className="flex items-center w-full h-[3.5rem] rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" to={`/bankdetails/${id}`} activeClassName='bg-slate-900 dark:bg-[#181818]'>
                                <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/48/ffffff/external-bank-web-smashingstocks-glyph-smashing-stocks.png" className='pl-2 py-2' alt=''/>


                            </NavLink>
                        </div>
                        <div className='mt-2'>
                            <NavLink className="flex items-center w-full h-[3.5rem] rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" to={`/card-details/${id}`} activeClassName='bg-slate-900 dark:bg-[#181818]'>
                                <img src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/48/ffffff/external-credit-card-food-delivery-photo3ideastudio-solid-photo3ideastudio.png" className='pl-2 py-2' alt=''/>

                            </NavLink>
                        </div>

                        <div className='mt-2'>
                            <NavLink className="flex items-center w-full h-[3.5rem] rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" to={`/settings/${id}`} activeClassName='bg-slate-900 dark:bg-[#181818]'>
                                <img src="https://img.icons8.com/material-rounded/48/ffffff/settings.png" className='pl-2 py-2' alt=''/>

                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>) : (
                <div className={`flex flex-col items-center w-44 h-full overflow-hidden text-zinc-100 bg-indigo-800 rounded fixed top-[50px] left-[0px] dark:bg-[#6e6e6e] ${isOpen ? 'translate-x-[0px]' : 'translate-x-0'} ease-in-out duration-300`}>

                    <div className={`w-full px-2 mt-8 `}>
                        <div className="flex flex-col w-full mt-3">
                            <div className='mt-2'>
                                <NavLink className="flex items-center w-full h-[3.5rem] rounded active:bg-blue-700 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" activeClassName='bg-slate-900 dark:bg-[#181818]' to={`/main-app/${id}`} >
                                    <img src="https://img.icons8.com/ios-filled/48/ffffff/password.png" className='px-2 py-2' alt=''/>
                                    <span className="ml-2 mr-2 pt-2 text-sm font-medium">Password</span>
                                </NavLink>
                            </div>
                            
                            <div className='mt-2'>
                                <NavLink className="flex items-center w-full h-[3.5rem]  rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" to={`/bankdetails/${id}`} activeClassName='bg-slate-900 dark:bg-[#181818]'>
                                    <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/48/ffffff/external-bank-web-smashingstocks-glyph-smashing-stocks.png" className='px-2 py-2' alt=''/>
                                    <span className="ml-2 mr-2 pt-2 text-sm font-medium">Bank Details</span>
                                </NavLink>
                            </div>
                            <div className='mt-2'>
                                <NavLink className="flex items-center w-full h-[3.5rem]  rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" to={`/card-details/${id}`} activeClassName='bg-slate-900 dark:bg-[#181818]'>
                                    <img src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/48/ffffff/external-credit-card-food-delivery-photo3ideastudio-solid-photo3ideastudio.png" className='px-2 py-2' alt=''/>
                                    <span className="ml-2 mr-2 pt-2 text-sm font-medium">Card Details</span>
                                </NavLink>
                            </div>

                            <div className='mt-2'>
                                <NavLink className="flex items-center w-full h-[3.5rem] rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" to={`/settings/${id}`} activeClassName='bg-slate-900 dark:bg-[#181818]'>
                                    <img src="https://img.icons8.com/material-rounded/48/ffffff/settings.png" className='px-2 py-2' alt=''/>
                                    <span className="ml-2 mr-2 pt-2 text-sm font-medium">Settings</span>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>

            )
            }


        </>
    )
}
