import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../Context/User/UserContext'
import { useParams, Link } from 'react-router-dom'
import UpdateUsernameModal from './UpdateUsernameModal'
import UpdatePasswordModal from './UpdatePasswordModal'
import DeleteAccModal from './DeleteAccModal'
import LoadingContext from '../../Context/LoadingBar/LoadingContext'

export default function Settings() {
    const { id } = useParams()
    const context = useContext(UserContext)
    const loadContext = useContext(LoadingContext)

    const { name, email, password } = context
    const { progress, setProgress } = loadContext
    const [usernameModal, updateUsernameModal] = useState(false)
    const [passwordModal, updatePasswordModal] = useState(false)
    const [deleteAccModal, openDeleteAccModal] = useState(false)

    const toggleUsernameModal = () => {
        updateUsernameModal(true)
    }
    const togglePasswordUpdateModal = () => {
        updatePasswordModal(true)
    }
    const toggleDeleteAccModal = () => {
        openDeleteAccModal(true)
    }

    useEffect(() => {
        setProgress(progress + 50)
        setProgress(100)
    }, [])


    return (
        <>
            <div className='ml-[5rem] mt-[3rem]'>
                <p className='font-bold text-xl dark:text-gray-200'>Account Settings</p>
                <div className='my-4'>
                    <div>
                        <label className='text-md dark:text-gray-200'>Username</label>
                    </div>

                    <div className='pt-2 flex items-center'>
                        <input className='p-2 w-[75%] text-sm bg-slate-200 border-2 border-blue-600 rounded-lg text-slate-800 dark:bg-[#3d3d3d] dark:text-[#ffffff] dark:border-[#aaaaaa]' value={name} readOnly={true}></input>
                        <button className='ml-4 dark:invert' onClick={toggleUsernameModal}><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/48/000000/external-edit-interface-kiranshastry-solid-kiranshastry.png" className='h-[32px] w-[32px]'/></button>
                    </div>

                </div>
                <div className='my-4'>
                    <div>
                        <label className='text-md dark:text-gray-200'>Email</label>
                    </div>
                    <div className='pt-2'>
                        <input className='p-2 text-sm bg-slate-200 rounded-lg border-2 border-blue-600 text-slate-800 w-[75%] dark:bg-[#3d3d3d] dark:text-[#ffffff] dark:border-[#aaaaaa]' value={email} readOnly={true}></input>

                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <label className='text-md dark:text-gray-200'>User ID</label>
                    </div>
                    <div className='pt-2'>
                        <input className='p-2 text-sm bg-slate-200 rounded-lg border-2 border-blue-600 text-slate-800 w-[75%] dark:bg-[#3d3d3d] dark:text-[#ffffff] dark:border-[#aaaaaa]' value={id} readOnly={true}></input>

                    </div>
                </div>
                
                <div className='my-2 flex'>
                    <div className='mx-2'>
                        <button className="p-2 text-sm rounded-lg bg-gradient-to-r from-[#e52d27] to-[#b31217] hover:from-[#b31217] to-[#e52d27] text-zinc-100" onClick={toggleDeleteAccModal}>Delete Account</button>
                    </div>
                    <div className='mx-2'>
                        <button className="p-2 text-sm rounded-lg bg-gradient-to-r from-blue-800 to-purple-600 hover:from-purple-600 hover:to-blue-800 text-zinc-200"><Link to='/forgot-password'>Forgot Password</Link></button>
                    </div>
                </div>
            </div>

            {usernameModal ? (<>
                <UpdateUsernameModal updateUsernameModal={updateUsernameModal} name={name} id={id} />
            </>) : (null)}
            {passwordModal ? (<>
                <UpdatePasswordModal updatePasswordModal={updatePasswordModal} id={id} />
            </>) : (null)}
            {deleteAccModal ? (<>
                <DeleteAccModal openDeleteAccModal={openDeleteAccModal} id={id} />
            </>) : (null)}

        </>
    )
}
