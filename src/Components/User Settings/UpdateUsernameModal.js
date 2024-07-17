import React, { useState, useRef, useContext } from 'react'
import UserContext from '../../Context/User/UserContext'


export default function UpdateUsernameModal(props) {
    const context = useContext(UserContext)
    const { updateUserName } = context
    const [update, setUpdate] = useState({ name: "" })
    const handleClick = () => {
        updateUserName(props.id, update.name)
        refClose.current.click()
    }
    const onChange = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value })
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
                            Update Username
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => props.updateUsernameModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <form className="w-full m-[0px_auto]">
                        <div className="md:flex md:items-center my-[2rem] mx-[2rem]">
                            <div className="w-1/3 py-2">
                                <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-full-name">
                                    Old Username
                                </label>
                            </div>
                            <div className="md:w-1/2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={props.name} readOnly={true}/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center my-[2rem] mx-[2rem]">
                            <div className="w-1/3 py-2">
                                <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-full-name">
                                    New Username
                                </label>
                            </div>
                            <div className="md:w-1/2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='name' value={update.name} onChange={onChange} />
                            </div>
                        </div>

                    </form>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-[0.5rem] border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                            type="button" ref={refClose}
                            onClick={() => props.updateUsernameModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                            type="button"
                            onClick={handleClick}
                            disabled={update.name.length < 1}
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
