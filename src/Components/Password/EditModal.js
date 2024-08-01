import React, { useState, useRef, useContext } from 'react'
import UserPasswordContext from '../../Context/User passwords/UserPassword'

export default function EditModal(props) {
    const context = useContext(UserPasswordContext)
    const { updatePasswordDetails } = context
    
    const [editDetails, setEditDetails] = useState({ title: props.title, password: props.password })

    const onEditChange = (e) => {
        setEditDetails({ ...editDetails, [e.target.name]: e.target.value })
    }
    
    // update password detail
    const update = () => {
        updatePasswordDetails(props.id, editDetails.title, editDetails.password)
        refClose.current.click()
    }

    // using reference to close the modal 
    const refClose = useRef(null)

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-[20rem] my-6 mx-auto bg-stone-100 rounded-xl dark:bg-[#11171D]">

                    {/*body*/}
                    <form className="w-5/6 m-[0px_auto]">
                        <div className="md:flex md:items-center my-[2rem]">
                            <div className="md:w-1/3 py-2">
                                <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-full-name">
                                    Title
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 dark:bg-gray-200" id="inline-full-name" type="text" value={editDetails.title} onChange={onEditChange} name='title' />
                            </div>
                        </div>
                        <div className="md:flex md:items-center my-[2rem]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-password">
                                    Password
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 dark:bg-gray-200" id="inline-password" type="password" name='password' value={editDetails.password} onChange={onEditChange} />
                            </div>
                        </div>


                    </form>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-[0.5rem] border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                            type="button"
                            onClick={() => props.setShowEditModal(false)} ref={refClose}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                            type="button"
                            onClick={update}
                        >
                            Edit Details
                        </button>
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
