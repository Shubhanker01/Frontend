import React, { useContext, useEffect } from 'react'
import UserPasswordContext from '../../Context/User passwords/UserPassword';
import { useParams } from 'react-router-dom';
import Items from './Items';
import AddDetails from './AddDetails';
import LoadingContext from '../../Context/LoadingBar/LoadingContext';

export default function Password() {
    const { id } = useParams()
    const context = useContext(UserPasswordContext)
    const loadContext = useContext(LoadingContext)
    const { readPasswordDetails, passwordDetails } = context
    const { progress, setProgress } = loadContext
    
    useEffect(() => {
        readPasswordDetails(id)
        setProgress(progress + 50)
        setProgress(100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <>
            <AddDetails id={id} />
            {/* check if user has any password details */}
            {passwordDetails.length === 0 ? (<div className='w-64 m-[0px_auto] fixed top-1/2 left-1/2 -mt-[100px] -ml-[50px] flex items-center'><p className='text-md font-bold mx-2 my-2'>You have not added any details please click on the add button below to save your details.</p>
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-arrow-down-web-flaticons-lineal-color-flat-icons-2.png" className='animate-bounce' alt=''/>
            </div>) :
                (<div className='w-90 m-[0px_auto]'>
                    <div className="p-10 grid grid-cols-1 gap-3 m-[0px_auto]">

                        {passwordDetails.map((items) => {
                            return <Items key={items._id} id={items._id} title={items.title} password={items.password} items={items} ></Items>
                        })}
                    </div>
                </div>)
            }


        </>
    );
}


