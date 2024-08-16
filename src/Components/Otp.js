import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../Context/User/UserContext'
import toast from 'react-hot-toast';
import "../Css/otp.css"
import LoadingContext from '../Context/LoadingBar/LoadingContext'
import { useHistory } from 'react-router-dom';

export default function Otp() {
    const history = useHistory()
    const context = useContext(UserContext)
    const { userId } = context
    const loadContext = useContext(LoadingContext)
    const { progress, setProgress } = loadContext
    
    // set state for otp taking 4 values
    const [otp, setOtp] = useState(new Array(4).fill(""));
    
    const handleChange = (element, index) => {
        if (isNaN(element.value)) {
            return false
        }
        setOtp([...otp.map((data, ind) => (ind === index) ? element.value : data)])

        // focus next input
        if (element.nextSibling) {
            element.nextSibling.focus()
        }

    }
    const host = 'http://localhost:4001'

    // verify the otp of the user
    const verifyOtp = async (id, otp) => {
        const response = await fetch(`${host}/auth/verifyotp/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ otp })
        })

        const json = await response.json()
        if (json.status === "Error") {
            toast.error(json.message, { position: 'top-right' })
        }
        else {
            toast.success(json.message, { position: 'top-right' })
            sessionStorage.setItem('token',json.token)
            history.push(`/main-app/${id}`)
        }
    }

    useEffect(() => {
        setProgress(progress + 50)
        setProgress(100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='w-80 m-[60px_auto]'>
            <div className="bg-slate-100 py-3 rounded text-center dark:bg-slate-700">
                <h1 className="text-xl font-bold py-4 dark:text-gray-200">OTP Verification</h1>
                <p className='text-md dark:text-gray-200'>Enter the OTP received in your email</p>

                <div>
                    <div className='w-80 m-[0_auto]'>
                        <form className="mt-5 text-slate-700">
                            {otp.map((data, index) => {
                                return <input className="inline-block w-[50px] h-[50px] text-center border-[0px] border-b-4 border-b-indigo-500 m-2 text-lg dark:bg-gray-300 dark:text-gray-900" type="text" key={index} value={data} maxLength={1} onChange={(e) => { handleChange(e.target, index) }} onFocus={(e) => e.target.select()} />
                            })}
                        </form>
                    </div>

                    <div className='flex items-center w-1/2 m-[15px_auto]'>
                        <button className='bg-indigo-600 text-stone-200 text-md rounded-md p-2 ml-2 dark:bg-slate-600' onClick={e => setOtp([...otp.map(value => "")])}>Clear</button>
                        <input type="submit" value="Verify OTP" className='bg-indigo-600 text-stone-200 text-md rounded-md p-2 ml-2 cursor-pointer dark:bg-slate-600' onClick={() => { verifyOtp(userId, otp.join("")) }} />

                    </div>
                </div>

            </div>
        </div>

    )
}

