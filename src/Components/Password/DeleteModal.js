import React, { useContext, useRef } from 'react'
import UserPasswordContext from '../../Context/User passwords/UserPassword';

export default function DeleteModal(props) {

    const context = useContext(UserPasswordContext)
    const { deletePasswordDetails } = context

    const handleClick = () => {
        // delete password detail of the user
        deletePasswordDetails(props.id)
        refClose.current.click()
    }

    // using reference to close the modal 
    const refClose = useRef(null)

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-[20rem] my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-[#11171D]">
                        {/*header*/}
                        <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-xl font-semibold dark:text-gray-200">
                                Delete Password Detail
                            </h3>

                        </div>
                        {/*body*/}
                        <div className="relative p-3 flex-auto">
                            <p className="my-2 text-blueGray-500 text-md leading-relaxed dark:text-gray-200">
                                Are you sure you want to delete this item?
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                            <button ref={refClose}
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                                type="button"
                                onClick={() => props.setShowDeleteModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                                type="button"
                                onClick={handleClick}
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
