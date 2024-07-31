import React, { useContext, useState, useEffect } from 'react'
import '../Css/style.css'
import UserContext from '../Context/User/UserContext'
import { Link } from 'react-router-dom'
import LoadingContext from '../Context/LoadingBar/LoadingContext'
import toast from 'react-hot-toast';
import { useHistory } from "react-router-dom";


export default function LoginSignup() {

    let history = useHistory();
    // using context
    const context = useContext(UserContext)
    const loadContext = useContext(LoadingContext)
    const { progress, setProgress } = loadContext
    const { signUp, logIn } = context
    // using state
    const [user, getUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const [loginUser, getLoginUser] = useState({ email: "", password: "" })
    
    // user submit signupform
    const submitSignUpForm = (e) => {
        e.preventDefault()
        if (user.password.length >= 5 && user.password === user.confirmPassword) {
            // use the signup func from the context
            let json = signUp(user.name, user.email, user.password)
            json.then((json) => {
                if (json.status === 'Pending') {
                    toast.success(json.message, { position: 'top-center' })
                    history.push('/otp-verify')
                }
                else {
                    toast.error(json.message, { position: 'top-center' })
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            toast.error('Please enter correct credentials!!', { position: 'top-center' })
        }

    }
    
    // user login submit form
    const userLogin = (e) => {
        e.preventDefault()
        if (loginUser.email !== "" || loginUser.password !== "") {
            let json = logIn(loginUser.email, loginUser.password)
            json.then((json) => {
                if (json.status === 'success') {
                    toast.success("You are successfully logged in!!!", { position: 'top-center', duration: 4000 })
                    setProgress(progress + 50)
                    setProgress(100)
                    history.push(`/main-app/${json.user._id}`)
                }
                else {
                    toast.error(json.message, { position: 'top-center', duration: 4000 })
                }
            }).catch((err) => {
                console.log(err)
            })
            getLoginUser({...loginUser,email:"",password:""})
        }
        else {
            toast.error("Please enter your credentials", { position: 'top-center' })
        }
    }
    
    const onChange = (e) => {
        getUser({ ...user, [e.target.name]: e.target.value })
    }
    const onLoginFieldChange = (e) => {
        getLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }
    const showSignupForm = () => {
        document.querySelector("form.login").style.marginLeft = "-50%"
        document.querySelector(".title-text .login").style.marginLeft = "-50%"
    }
    const showLoginForm = () => {
        document.querySelector("form.login").style.marginLeft = "0%"
        document.querySelector(".title-text .login").style.marginLeft = "0%"
    }
    const moveToSignUp = () => {
        document.querySelector("label.signup").click();
        return false
    }

    useEffect(() => {
        setProgress(progress + 50)
        setProgress(100)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='grid w-95 h-full place-items-center'>

            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">
                        Login Form
                    </div>
                    <div className="title signup">
                        Signup Form
                    </div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" defaultChecked />
                        <input type="radio" name="slide" id="signup" />
                        <label htmlFor="login" className="slide login" onClick={showLoginForm}>Login</label>
                        <label htmlFor="signup" className="slide signup" onClick={showSignupForm}>Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" value={loginUser.email} onChange={onLoginFieldChange} name='email' required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" value={loginUser.password} onChange={onLoginFieldChange} name='password' required />
                            </div>
                            <div className="pass-link">
                                <Link to='/forgot-password' onClick={() => {
                                    setProgress(progress + 50);
                                    setProgress(100)
                                }}>Forgot password?</Link>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" onClick={userLogin} />
                            </div>
                            <div className="signup-link">
                                Not a member? <Link to="/login-signup" onClick={moveToSignUp}>Signup now</Link>
                            </div>
                        </form>
                        <form className="signup">
                            <div className="field">
                                <input type="text" placeholder="Name" name='name' value={user.name} onChange={onChange} required />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Email Address" name='email' value={user.email} onChange={onChange} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" name='password' value={user.password} onChange={onChange} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" value={user.confirmPassword} name='confirmPassword' onChange={onChange} required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" onClick={submitSignUpForm} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
