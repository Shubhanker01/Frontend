import React, { useState } from 'react'
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

export default function Items(props) {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [hideDetails, setHideDetails] = useState(true)

    const showHideDetails = () => {
        if (hideDetails == false) {
            setHideDetails(true)
        }
        else {
            setHideDetails(false)
        }
    }
    const openEditModal = () => {
        setShowEditModal(true)
    }
    const openDeleteModal = () => {
        setShowDeleteModal(true)
    }


    return (
        <>
            <div className="rounded overflow-hidden shadow-lg w-[150px] bg-blue-300 dark:bg-[#696969] transform motion-safe:hover:scale-110 transition ease-in-out duration-300">
                <div className='w-full bg-indigo-200 dark:bg-[#363636] py-2 h-[60px]'>
                    <img src="https://img.icons8.com/ios-filled/50/000000/password.png" className='m-[0px_auto] dark:invert' />
                </div>
                <div className='h-[55px] grid grid-cols-2 my-2'>
                    <div className="px-2 dark:text-[#ffffff] w-[170px]">
                        <div className="mb-2">{props.title.length >= 15 ? props.title.slice(0, 15) + ".." : props.title}</div>
                        <p className=''>{hideDetails ? new Array(props.password.length + 1).join('*') : props.password}</p>
                    </div>
                    <div className='flex justify-end px-2 mt-[15px]'>
                        <button onClick={showHideDetails} className='mx-[2px]'>{hideDetails ? <img src="https://img.icons8.com/material-outlined/32/000000/visible--v1.png" className='dark:invert h-[16px] w-[16px]' /> : <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/32/000000/external-hide-feature-with-eye-crossed-shape-button-text-regular-tal-revivo.png" className='dark:invert h-[16px] w-[16px]' />}</button>
                        <button onClick={openEditModal} className='mx-[2px]'><img src="https://img.icons8.com/ios-glyphs/32/000000/edit--v1.png" className='dark:invert h-[16px] w-[16px]' /></button>
                        <button onClick={openDeleteModal} className='mx-[2px]'><img src="https://img.icons8.com/ios-glyphs/32/000000/filled-trash.png" className='dark:invert h-[16px] w-[16px]' /></button>
                    </div>
                </div>
            </div>

            {showEditModal ? (
                <>
                    <EditModal id={props.id} title={props.title} password={props.password} setShowEditModal={setShowEditModal} />
                </>
            ) : (null)}

            {showDeleteModal ? (
                <>
                    <DeleteModal id={props.id} setShowDeleteModal={setShowDeleteModal} />
                </>
            ) : (null)}
        </>)
}


