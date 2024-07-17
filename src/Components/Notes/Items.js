import React, { useState } from 'react'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal';

export default function (props) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const openDeleteModal = () => {
        setShowDeleteModal(true)
    }
    const openEditModal = () => {
        setShowEditModal(true)
    }
    return (
        <>
            <div className="rounded overflow-hidden shadow-lg w-[300px] bg-indigo-200">
                <div className='w-full bg-lime-200 py-2'>
                    <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/50/000000/external-note-education-flatart-icons-solid-flatarticons.png" className='m-[0px_auto]' />
                </div>

                <div className="px-2 py-2">
                    <div className="font-bold text-xl mb-2">{props.title}</div>

                </div>
                <div className='flex justify-end -mt-[1.5rem] py-2 px-2'>
                    <button onClick={openEditModal}>  <img src="https://img.icons8.com/material-outlined/32/000000/visible--v1.png" /> </button>

                    <button onClick={openDeleteModal}><img src="https://img.icons8.com/ios-glyphs/32/000000/filled-trash.png" className='mx-2' /></button>
                </div>

            </div>
            {showDeleteModal ? (
                <>
                    <DeleteModal setShowDeleteModal={setShowDeleteModal} id={props.id} />
                </>
            ) : (null)}
            {showEditModal ? (
                <>
                    <EditModal setShowEditModal={setShowEditModal} id={props.id} title={props.title} description={props.description} />
                </>
            ) : (null)}
        </>
    )
}
