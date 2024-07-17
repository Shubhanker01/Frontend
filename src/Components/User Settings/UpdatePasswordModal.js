import React, { useContext, useRef, useState } from 'react'
import UserContext from '../../Context/User/UserContext'
import toast from 'react-hot-toast';

export default function UpdatePasswordModal(props) {
    const context = useContext(UserContext)
    const { updatePassword } = context
    const [password, setPassword] = useState({ oldPassword: "", newPassword: "", confirmNewPassword: "" })

    const handleClick = () => {
        const json = updatePassword(props.id, password)
        json.then((json) => {
            if (json.status === 'Success') {
                toast.success("Your password is successfully updated", { duration: 4000, position: 'top-center' })
                refClose.current.click()
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }
        })

    }

    const onChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value })
    }

    const refClose = useRef(null)
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-[35rem] my-6 mx-auto max-w-3xl bg-stone-100 rounded-xl dark:bg-gray-800">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold dark:text-gray-200">
                            Update Password
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => props.updatePasswordModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <form className="w-full m-[0px_auto]">
                        <div className="my-[1rem] mx-[2rem]">
                            <div className="py-2">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-full-name">
                                    Old Password
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" name='oldPassword' value={password.oldPassword} onChange={onChange} />
                            </div>
                        </div>
                        <div className="my-[1rem] mx-[2rem]">
                            <div className="py-2">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-full-name">
                                    New Password
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" name='newPassword' value={password.newPassword} onChange={onChange} />
                            </div>
                        </div>
                        <div className="my-[1rem] mx-[2rem]">
                            <div className="py-2">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-full-name">
                                    Confirm New Password
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" name='confirmNewPassword' value={password.confirmNewPassword} onChange={onChange} />
                            </div>
                        </div>

                    </form>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-[0.5rem] border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                            type="button" ref={refClose}
                            onClick={() => props.updatePasswordModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                            type="button"
                            onClick={handleClick}
                            disabled={password.newPassword !== password.confirmNewPassword}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
