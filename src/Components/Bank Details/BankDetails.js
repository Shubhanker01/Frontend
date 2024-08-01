import React, { useContext, useEffect } from 'react'
import AddDetails from './AddDetails'
import { useParams } from 'react-router-dom'
import UserBankContext from '../../Context/User Bank Details/UserBankContext'
import Items from '../Bank Details/Items'
import LoadingContext from '../../Context/LoadingBar/LoadingContext';

export default function BankDetails() {
    const context = useContext(UserBankContext)
    const loadContext = useContext(LoadingContext)
    const { fetchDetails, bankDetails } = context
    const { progress, setProgress } = loadContext
    const { id } = useParams()

    useEffect(() => {
        fetchDetails(id)
        setProgress(progress + 50)
        setProgress(100)
    }, [])

    return (
        <>
            <AddDetails id={id} />
            <div className='w-9/12 mt-12 ml-[11rem]'>
                {bankDetails.length == 0 ? (
                    <div className='w-64 m-[0px_auto] fixed top-1/2 left-1/2 -mt-[100px] -ml-[50px] flex items-center'><p className='text-md font-bold mx-2 my-2'>You have not added any details please click on the add button below to save your details.</p>
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-arrow-down-web-flaticons-lineal-color-flat-icons-2.png" className='animate-bounce' />
                    </div>
                ) : (
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {bankDetails.map((items) => {
                            return <Items key={items._id} title={items.title} id={items._id} item={items}></Items>
                        })}

                    </div>
                )}

            </div>
        </>
    )
}
