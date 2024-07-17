import React, { useState, useRef, useContext } from 'react'
import UserNotesContext from '../../Context/User Notes/UserNotesContext';


export default function AddItems(props) {

    const context = useContext(UserNotesContext)
    const { addNote } = context
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState({ title: "", description: "" })
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        addNote(props.id, note.title, note.description)
        setNote({ title: "", description: "" })
        refClose.current.click()
    }
    const ref = useRef(null)
    // using reference to close the modal 
    const refClose = useRef(null)

    return (
        <>
            <div className='fixed bottom-[50px] right-[55px]'>
                <button className='' ref={ref} ><img src="https://img.icons8.com/ios-filled/75/4a90e2/add--v1.png" onClick={() => setShowModal(true)} /></button>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[60rem] h-[30rem] my-3 mx-auto max-w-6xl bg-stone-100 rounded-xl">

                            {/*body*/}
                            <form className="w-full m-[10px_auto]">
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3 py-2">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl" htmlFor="inline-full-name">
                                            Title
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='title' value={note.title} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="md:items-center my-[1rem] mx-[2rem]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0 pr-2 text-xl" htmlFor="inline-password">
                                            Description
                                        </label>
                                    </div>
                                    <div className="md:w-full">
                                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 resize-none h-[15rem] w-full" name='description' value={note.description} onChange={onChange}></textarea>
                                    </div>
                                </div>


                            </form>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-[0.5rem] border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button" ref={refClose}
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleClick}
                                    disabled={note.title.length < 3}
                                >
                                    Add a Note
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
