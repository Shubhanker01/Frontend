import React, { useState } from 'react'
import ViewModal from './ViewModal';
import DeleteModal from './DeleteModal';

export default function Items(props) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const openDeleteModal = () => {
        setShowDeleteModal(true)
    }
    const openViewModal = () => {
        setShowViewModal(true)
    }
    return (
        <>
            <div className="rounded overflow-hidden shadow-lg w-[150px] bg-blue-300 dark:bg-[#0F172A] transform motion-safe:hover:scale-110 transition ease-in-out duration-300 m-[0px_auto]">
                <div className='w-full bg-indigo-200 py-2 dark:bg-[#0F172A] h-[30px]'>
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/50/000000/external-credit-card-ecommerce-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className='m-[0px_auto] dark:invert h-[20px] w-[20px]' />
                </div>

                <div className='h-[60px] grid grid-cols-1 my-2'>
                    <div className="px-2 py-2 dark:text-[#ffffff]">
                        <div className="">{props.title.length >= 15 ? props.title.slice(0, 15) + ".." : props.title}</div>

                    </div>
                    <div className='flex px-2'>
                        <button onClick={openViewModal} className='mx-[2px] dark:invert'>  <img src="https://img.icons8.com/material-outlined/32/000000/visible--v1.png" className='h-[16px] w-[16px]'/> </button>

                        <button onClick={openDeleteModal} className='mx-[2px] dark:invert'><img src="https://img.icons8.com/ios-glyphs/32/000000/filled-trash.png" className='h-[16px] w-[16px]'/></button>
                    </div>
                </div>
            </div>
            {showViewModal ? (
                <>
                    <ViewModal id={props.id} item={props.item} setShowViewModal={setShowViewModal} />
                </>
            ) : (null)}
            {showDeleteModal ? (
                <>
                    <DeleteModal id={props.id} setShowDeleteModal={setShowDeleteModal} />
                </>
            ) : (null)}
        </>
    )
}
