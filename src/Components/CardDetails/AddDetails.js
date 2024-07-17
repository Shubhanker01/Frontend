import React, { useState, useRef, useContext } from 'react'
import UserCardContext from '../../Context/User Card Context/UserCardContext';

export default function AddDetails(props) {
    const context = useContext(UserCardContext)
    const { addDetails } = context

    const [details, setDetails] = useState({ title: "", cardName: "", cardType: '', number: "", securityCode: "" })
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        addDetails(props.id, details)
        refClose.current.click()
        setDetails({ title: "", cardName: "", cardType: "", number: "", securityCode: "" })

    }
    
    const ref = useRef(null)
    const refClose = useRef(null)
    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='fixed bottom-[50px] right-[55px]'>
                <button className='' ref={ref} ><img src="https://img.icons8.com/ios-filled/75/4a90e2/add--v1.png" onClick={() => setShowModal(true)} alt=''/></button>
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[35rem] h-[32rem] my-3 mx-auto max-w-6xl bg-stone-100 rounded-xl dark:bg-[#11171D]">

                            {/*body*/}
                            <form className="w-full m-[10px_auto]">
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-full-name">
                                            Title
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 dark:bg-gray-200" id="inline-full-name" type="text" name='title' value={details.title} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-password">
                                            Card Name
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" type='text' value={details.cardName} onChange={onChange} name='cardName'></input>
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-password">
                                            Card Type
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" value={details.cardType} onChange={onChange} name='cardType'
                                        >

                                            <option value='Debit Card'>Debit Card</option>
                                            <option value='Credit Card'>Credit Card</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-password">
                                            Card Number
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" type='text' value={details.number} onChange={onChange} name='number'></input>
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl dark:text-gray-200" htmlFor="inline-password">
                                            CVV
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" type='text' value={details.securityCode} onChange={onChange} name='securityCode'></input>
                                    </div>
                                </div>
                            </form>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-[0.5rem] border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-300"
                                    type="button" ref={refClose}
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-slate-800 dark:text-blue-300"
                                    type="button"
                                    onClick={handleClick}
                                    disabled={details.title.length < 3}
                                >
                                    Add Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
