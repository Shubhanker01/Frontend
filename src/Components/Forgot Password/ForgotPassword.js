import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../Context/User/UserContext'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast';
import LoadingContext from '../../Context/LoadingBar/LoadingContext'

export default function ForgotPassword() {
    const history = useHistory()
    const [user, getUser] = useState({ email: "" })

    const context = useContext(UserContext)
    const loadingContext = useContext(LoadingContext)

    const { progress, setProgress } = loadingContext
    const { resetPasswordVerify } = context

    const onChange = (e) => {
        getUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        let json = resetPasswordVerify(user.email)
        json.then((json) => {
            if (json.status === 'Pending') {
                toast.success(json.message, { duration: 4000, position: 'top-center' })
                sessionStorage.setItem('reset-token',json.token)
                history.push(`/otp-passwordreset/${json.userId}`)
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
            <div className='grid w-full h-full place-items-center'>

                <div className="wrapper">
                    <div className="title-text">
                        <div className="title login">
                            Forgot Password
                        </div>
                    </div>
                    <div className="form-container">
                        <div className='text-center my-4 font-bold text-sm'>
                            <p>Note : Please enter only the email address which has been verified and linked to your account. OTP will be sent to that email address and then you can reset your password</p>
                        </div>
                        <div className='font-bold text-md my-2'>
                            <label htmlFor="enter">Please enter your Email Address</label>
                        </div>
                        <div className="form-inner">
                            <form className="login">
                                <div className="field">
                                    <input type="text" placeholder="Email Address" name='email' value={user.email} onChange={onChange} required />
                                </div>

                                <div className="field btn">
                                    <div className="btn-layer"></div>
                                    <input type="submit" value="Send OTP" onClick={handleClick} />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
