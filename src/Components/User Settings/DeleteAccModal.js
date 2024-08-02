import React, { useContext, useRef, useState } from 'react'
import UserContext from '../../Context/User/UserContext'
import { useHistory } from 'react-router-dom'
import LoadingContext from '../../Context/LoadingBar/LoadingContext'

export default function DeleteAccModal(props) {
    const history = useHistory()
    const context = useContext(UserContext)
    const loadingContext = useContext(LoadingContext)

    const { progress, setProgress } = loadingContext
    const { deleteAcc } = context

    const [userId, getUserId] = useState("")

    const handleClick = () => {
        deleteAcc(userId)
        refClose.current.click()
        history.push('/')
        setProgress(progress + 50)
        setProgress(100)
    }
    const onChange = (e) => {
        getUserId(e.target.value)
    }
    const refClose = useRef(null)

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-[20rem] my-2 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[20rem] bg-white outline-none focus:outline-none dark:bg-[#11171D]">
                        {/*header*/}
                        <div className="flex items-center justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-xl font-semibold dark:text-gray-200">
                                Delete Account
                            </h3>

                            <img src="https://img.icons8.com/emoji/48/000000/warning-emoji.png" />

                        </div>
                        {/*body*/}
                        <div className="relative p-4 flex-auto">
                            <h1 className='text-md font-bold dark:text-gray-200'>Please read the information below before you proceed to delete your account</h1>
                            <p className="my-2 text-blueGray-500 text-sm leading-relaxed dark:text-gray-200">
                                Are you sure you want to delete your account. All the information which you have saved will be lost and cannot be unchanged. The information which you have saved in this account will not be retrevied back.
                            </p>
                            <p className="my-2 text-blueGray-500 text-sm leading-relaxed dark:text-gray-200">Enter your User Id below and then procced to delete your account</p>
                        </div>
                        <form className="w-full my-2 mx-3">

                            <div className="py-2 px-2">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-md dark:text-gray-200" htmlFor="inline-full-name">
                                    User Id
                                </label>
                            </div>
                            <div className="w-[95%] px-2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 dark:bg-gray-200" id="inline-full-name" type="text" name='userId' onChange={onChange} value={userId} />
                            </div>

                        </form>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                            <button ref={refClose}
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                                type="button"
                                onClick={() => props.openDeleteAccModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                                type="button"
                                onClick={handleClick}
                                disabled={userId.length < 24}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
