import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import toast from 'react-hot-toast';
import LoadingContext from '../../Context/LoadingBar/LoadingContext'
import UserContext from '../../Context/User/UserContext';

export default function LogoutModal(props) {
    let history = useHistory();
    const context = useContext(UserContext)
    const loadContext = useContext(LoadingContext)

    const { getUserId } = context
    const { progress, setProgress } = loadContext
    
    const handleClick = () => {
        history.push('/')
        setProgress(progress + 50)
        setProgress(100)
        toast.success("Logged Out!!", { duration: 4000, position: 'top-center' })
        sessionStorage.removeItem('token')
        getUserId("")
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-sm z-1">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-[#11171D]">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold dark:text-gray-200">
                                Log Out
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => props.showLogoutModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed dark:text-gray-200">
                                Are you sure you want to log out?
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                                type="button"
                                onClick={() => props.showLogoutModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                                type="button"
                                onClick={handleClick}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-20 fixed inset-0 z-45 bg-black"></div>
        </>
    )
}
