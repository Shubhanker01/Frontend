import React, { useContext, useEffect } from 'react'
import AddItems from './AddItems'
import Items from './Items'
import UserNotesContext from '../../Context/User Notes/UserNotesContext'
import { useParams } from 'react-router-dom'

export default function Notes() {
    const { id } = useParams()
    const context = useContext(UserNotesContext)
    const { fetchNotes, notes } = context
    useEffect(() => {
        fetchNotes(id)
    }, [])

    return (
        <>
            <AddItems id={id} />
            <div className='w-9/12 mt-12 ml-[11rem]'>
                {notes.length == 0 ? (
                    <div className='fixed top-60 left-60 flex items-center bg-sky-200'><p className='text-2xl font-bold mx-2 my-2'>You have not added any details please click on the add button below to save your details.</p>
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-arrow-down-web-flaticons-lineal-color-flat-icons-2.png" className='animate-bounce' />
                    </div>
                ) : (
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {notes.map((items) => {
                            return <Items key={items._id} title={items.title} description={items.description} id={items._id}></Items>
                        })}

                    </div>
                )}

            </div>
        </>
    )
}
