import React, { useContext, useState,useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../../Context/User/UserContext';
import toast from 'react-hot-toast';
import LoadingContext from '../../Context/LoadingBar/LoadingContext';

export default function PasswordResetOtp() {
    const { id } = useParams()
    const history = useHistory()

    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [user, getUser] = useState({ password: "", confirmPassword: "" })

    const loadContext = useContext(LoadingContext)
    const context = useContext(UserContext)

    const { resetPasswordOtp } = context
    const { progress, setProgress } = loadContext

    const onChange = (e) => {
        getUser({ ...user, [e.target.name]: e.target.value })
    }

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

    const handleClick = () => {
        let json = resetPasswordOtp(id, otp.join(""), user)
        json.then((json) => {
            if (json.status === 'Success') {
                toast.success(json.message, { duration: 4000, position: 'top-center' })
                history.push(`/login-signup`)
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }
        })
    }

    useEffect(() => {
        setProgress(progress + 50)
        setProgress(100)
    }, [])

    return (
        <>
            <div className='w-[90%] m-[35px_auto]'>
                <div className="bg-slate-100 py-3 rounded text-center dark:bg-slate-700">
                    <h1 className="text-xl font-bold py-4 dark:text-gray-200">Reset Password</h1>
                    <p className='text-md text-center dark:text-gray-200'>Note : You have received your OTP. Please enter the OTP and set your new password.After resetting your password you will be redirected back to login page</p>

                    <div>
                        <div className='w-full'>
                            <form className="mt-3 text-slate-700">
                                <div>
                                    <div className='my-2'>
                                        <label className='text-md text-left dark:text-gray-200'>New Password</label>
                                        <input type="password" className='my-2 rounded border-indigo-400 border-2 focus:border-indigo-600 mx-2' value={user.password} onChange={onChange} name='password' />
                                    </div>
                                    <div className='my-2'>
                                        <label className='text-md dark:text-gray-200'>Confirm New Password</label>
                                        <input type="password" className='my-2 rounded border-indigo-400 border-2 focus:border-indigo-600 mx-2' value={user.confirmPassword} onChange={onChange} name='confirmPassword' />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div>
                                        <label className='w-2/5 text-md dark:text-gray-200'>Enter OTP</label>

                                    </div>

                                    <div>
                                        {otp.map((data, index) => {
                                            return <input className="inline-block w-[50px] h-[45px] text-center border-[0px] border-b-4 border-b-indigo-500 m-2 text-lg dark:bg-gray-300 dark:text-gray-900" type="text" key={index} value={data} maxLength={1} onChange={(e) => { handleChange(e.target, index) }} onFocus={(e) => e.target.select()} />
                                        })}

                                    </div>

                                </div>

                            </form>
                        </div>

                        <div className='flex items-center w-[50%] m-[15px_auto]'>
                            <button className='bg-indigo-600 text-stone-200 text-md rounded-md p-2 ml-4 hover:bg-blue-800 dark:bg-slate-600 dark:hover:bg-slate-700' onClick={e => setOtp([...otp.map(value => "")])}>Clear</button>
                            <input type="submit" value="Reset" className='bg-indigo-600 text-stone-200 text-md rounded-md p-2 ml-2 cursor-pointer hover:bg-blue-800 dark:bg-slate-600 dark:hover:bg-slate-700' onClick={handleClick} />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
