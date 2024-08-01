import React, { useState, useRef, useContext } from 'react'
import UserBankContext from '../../Context/User Bank Details/UserBankContext';

export default function AddDetails(props) {
    const context = useContext(UserBankContext)
    const { addDetails } = context
    
    const [showModal, setShowModal] = useState(false);
    const ref = useRef(null)
    // using reference to close the modal 
    const refClose = useRef(null)
    const [details, setDetails] = useState({ title: "", bankName: "", accountNo: "", accountType: "", pin: "" })

    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        addDetails(props.id, details)
        setDetails({ title: "", bankName: "", accountNo: "", accountType: "", pin: "" })
        refClose.current.click()
    }
    return (
        <>
            <div className='fixed bottom-[50px] right-[55px]'>
                <button className='' ref={ref} ><img src="https://img.icons8.com/ios-filled/75/4a90e2/add--v1.png" className='h-[32px] w-[32px]' onClick={() => setShowModal(true)} alt=''/></button>
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative w-[20rem] h-[32rem] mx-auto bg-stone-100 rounded-xl dark:bg-[#11171D]">

                            {/*body*/}
                            <form className="w-full m-[10px_auto]">
                                <div className="items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-md dark:text-gray-200" htmlFor="inline-full-name">
                                            Title
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 dark:bg-gray-200" id="inline-full-name" type="text" name='title' value={details.title} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-md dark:text-gray-200" htmlFor="inline-password">
                                            Bank Name
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" type='text' value={details.bankName} onChange={onChange} name='bankName'></input>
                                    </div>
                                </div>
                                <div className="items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-md dark:text-gray-200" htmlFor="inline-password">
                                            Account No
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" type='text' value={details.accountNo} onChange={onChange} name='accountNo'></input>
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-md dark:text-gray-200" htmlFor="inline-password">
                                            Account Type
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" type='text' value={details.accountType} onChange={onChange} name='accountType'></input>
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-md dark:text-gray-200" htmlFor="inline-password">
                                            IFSC Code
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full dark:bg-gray-200" type='text' value={details.pin} onChange={onChange} name='pin'></input>
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
