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
            <div className="rounded overflow-hidden shadow-lg w-[150px] bg-blue-300 dark:bg-[#0F172A] m-[0px_auto]">
                <div className='w-full bg-indigo-200 py-2 dark:bg-[#0F172A] h-[30px]'>
                    <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/50/000000/external-bank-web-smashingstocks-glyph-smashing-stocks.png" className='m-[0px_auto] h-[20px] w-[20px] dark:invert' />
                </div>
                <div className='h-[60px] grid grid-cols-1 my-2'>
                    <div className="px-2 py-2 dark:text-[#ffffff]">
                        <div className="">{props.title.length >= 15 ? props.title.slice(0, 15) + ".." : props.title}</div>

                    </div>
                    <div className='flex px-2'>
                        <button onClick={openViewModal} className='mx-[2px]'>  <img src="https://img.icons8.com/material-outlined/32/000000/visible--v1.png" className='dark:invert h-[16px] w-[16px]' /> </button>

                        <button onClick={openDeleteModal} className='mx-[2px]'><img src="https://img.icons8.com/ios-glyphs/32/000000/filled-trash.png" className='dark:invert h-[16px] w-[16px]' /></button>
                    </div>
                </div>
            </div>
            {showViewModal ? (
                <>
                    <ViewModal id={props.id} setShowViewModal={setShowViewModal} item={props.item} />
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
