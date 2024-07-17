import React, { useContext, useEffect } from 'react'
import '../Css/index.css'
import vault from '../Icons/vault.png'
import consent from '../Icons/consent.png'
import convenient from '../Icons/convenient.png'
import notes from '../Icons/notes.png'
import security from '../Icons/security.png'
import signup from '../Icons/signup.png'
import encryption from '../Icons/encryption.png'
import gif from '../Icons/gif.gif'
import { Link } from 'react-router-dom'
import LoadingContext from '../Context/LoadingBar/LoadingContext'


export default function Home() {
    const loadContext = useContext(LoadingContext)
    const { progress, setProgress } = loadContext

    useEffect(() => {
        setProgress(progress + 50)
        setProgress(100)
    }, [])

    return (
        <>
            <div id="body">
                <div id="header" className="flex items-center bg-indigo-500 -mt-[2rem] dark:bg-slate-600 transition duration-500 lg:h-[145px]">
                    <div className="w-1/2 grid grid-cols-2 items-center">
                        <img srcSet={vault} className="lg:m-[12px_auto] lg:ml-[39px] w-[100px]ml-[5px]" alt="" />
                        <h1 className="lg:m-[35px_auto] text-zinc-50 lg:text-[2.9rem] font-bold lg:-ml-[130px] text-2xl">Password Manager</h1>
                    </div>


                    <div className="bg-indigo-800 rounded-full text-zinc-100 w-1/6 text-center lg:m-[10px_auto] lg:text-2xl lg:my-8 text-xl ml-[10px] dark:bg-slate-200 dark:text-gray-700">
                        <Link to="/login-signup">Login</Link>
                    </div>

                </div>
                <div id="section-1" className="flex flex-col mb-4 w-full">
                    <h1 className="text-8xl m-16 text-center tracking-wide">Welcome to password manager</h1>
                    <p className="m-12 text-center text-2xl">Password manager stores your password,bank account,debit
                        card and credit card details safely.
                        You do not need to remember your password of your every account ,you can just store your password and
                        other details which can make your lives convinient.</p>
                </div>

                <div id="section-3" className="my-20">
                    <h1 className="text-4xl m-8 text-center dark:text-zinc-200">Features</h1>
                    <div className="grid grid-cols-4 gap-2 justify-items-center m-4">
                        <div className="features bg-violet-300 rounded-lg w-80">
                            <div className="w-full">
                                <img srcSet={convenient} className="m-[5px_auto]" alt="" />
                            </div>

                            <div className="text-center my-4">
                                <h2 className="font-bold text-3xl">Convenient</h2>
                                <p className="m-2 text-xl text-stone-800">Can be accessed anywhere at anytime</p>
                            </div>

                        </div>

                        <div className="features bg-violet-300 rounded-lg w-80">
                            <div className="w-full">
                                <img srcSet={security} className="m-[5px_auto]" />
                            </div>
                            <div className="text-center my-4">
                                <h2 className="font-bold text-3xl">Secure</h2>
                                <p className="m-2 text-xl text-stone-800">Your details are kept secured and you do not have to worry
                                    about your
                                    details getting lost.
                                </p>
                            </div>
                        </div>
                        <div className="features bg-violet-300 rounded-lg w-80">
                            <div className="w-full">
                                <img srcSet={encryption} className="m-[5px_auto]" alt="" />
                            </div>
                            <div className="text-center my-4">
                                <h2 className="text-3xl font-bold">Encrypted</h2>
                                <p className="m-2 text-xl text-stone-800">Your password will be encrypted and have minimal chances
                                    of getting
                                    hacked.</p>
                            </div>
                        </div>
                        <div className="features bg-violet-300 rounded-lg w-80">
                            <div className="w-full">
                                <img srcSet={notes} className="m-[5px_auto]" alt="" />
                            </div>
                            <div className="text-center my-4">
                                <h2 className="text-3xl font-bold">Personal Notes</h2>
                                <p className="m-2 text-xl text-stone-800">You can add, delete and access your personal notes here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="section-4" className="flex items-center m-[106px_auto] w-2/3 bg-violet-600 rounded-lg">
                    <div className="m-8">
                        <img srcSet={signup} alt="" />
                    </div>

                    <div className="m-16">
                        <div className="text-center">
                            <p className="text-stone-200 text-3xl">If you have not created your account then please click on the
                                sign up link
                                below
                            </p>
                        </div>

                        <div className="p-2 bg-red-600 rounded-full text-zinc-300 w-1/4 text-center m-[10px_auto] text-2xl">
                            <Link to="/login-signup">Sign Up</Link>
                        </div>
                    </div>


                </div>
                <div className="flex flex-auto items-center m-16 bg-indigo-700 rounded-lg" id="section-5">
                    <img src={gif} alt="" className="rounded-full m-8"
                        srcSet="" />
                    <img srcSet={consent} className="m-4" alt="" />
                    <div className="ml-8">
                        <p className="text-4xl text-center text-zinc-100">Just enter your credentials to get started. No need to pay
                            any penny!!!</p>
                    </div>

                </div>


                <div id="footer" className="bg-stone-700 text-zinc-200">
                    <div id="links" className="list-none grid grid-cols-4 justify-items-center gap-3 mx-2 ">
                        <li className="p-2"><a href="#">About Us</a></li>
                        <li className="p-2"><a href="#">Contact Us</a></li>
                        <li className="p-2"><a href="#">Help</a></li>
                        <li className="p-2"><a href="#">Privacy and Policy</a></li>
                    </div>
                </div>
            </div>
        </>

    )
}
