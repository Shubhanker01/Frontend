import React, { useState } from 'react'
import LogoutModal from './LogoutModal'

export default function ProfileModal(props) {
    const [logoutModal, showLogoutModal] = useState(false)

    const toggle = () => {
        showLogoutModal(true)
    }
    
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-[25rem] my-6 mx-auto max-w-sm z-0">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-[#11171D]">
                        {/*header*/}
                        <div className="w-full my-4 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl text-center font-semibold py-2 dark:text-gray-200">
                                Your Profile
                            </h3>

                        </div>
                        <div className='w-full'>
                            <img src="https://img.icons8.com/stickers/100/000000/test-account.png" className='m-[0px_auto]' alt='' />
                        </div>
                        {/*body*/}
                        <div className="w-full">
                            <div className='my-4'>
                                <p className="text-blueGray-500 text-3xl text-center leading-relaxed dark:text-gray-200">
                                    {props.name}
                                </p>
                                <p className='text-lg text-center dark:text-gray-200'>{props.email}</p>
                                <p className='text-center dark:text-gray-200'>{props.id}</p>
                            </div>
                        </div>



                        {/*footer*/}
                        <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 text-lg background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                                type="button"
                                onClick={() => props.openProfileModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="text-red-500 text-lg background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                                type="button"
                                onClick={toggle}
                            >
                                Log Out
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {logoutModal ? (
                <>
                    <LogoutModal showLogoutModal={showLogoutModal} />
                </>
            ) : (null)}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
    )
}
