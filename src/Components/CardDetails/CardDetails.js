import React, { useContext, useEffect } from 'react'
import AddDetails from './AddDetails'
import { useParams } from 'react-router-dom'
import UserCardContext from '../../Context/User Card Context/UserCardContext'
import Items from './Items'
import LoadingContext from '../../Context/LoadingBar/LoadingContext';

export default function CardDetails() {
    const { id } = useParams()
    const context = useContext(UserCardContext)
    const loadContext = useContext(LoadingContext)
    const { cardDetails, fetchDetails } = context
    const { progress, setProgress } = loadContext

    useEffect(() => {
        fetchDetails(id)
        setProgress(progress+50)
        setProgress(100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <AddDetails id={id} />
            <div className='w-9/12 mt-12 ml-[11rem]'>
                {cardDetails.length === 0 ? (
                    <div className='fixed top-60 left-60 right-20 flex items-center bg-sky-200'><p className='text-2xl font-bold mx-2 my-2'>You have not added any details please click on the add button below to save your details.</p>
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-arrow-down-web-flaticons-lineal-color-flat-icons-2.png" className='animate-bounce' alt=''/>
                    </div>
                ) : (
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {cardDetails.map((items) => {
                            return <Items key={items._id} title={items.title} id={items._id} item={items}></Items>
                        })}

                    </div>
                )}

            </div>
        </>
    )
}
