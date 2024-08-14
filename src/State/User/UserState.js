import UserContext from "../../Context/User/UserContext";
import { useState } from "react";
import toast from 'react-hot-toast';

const UserState = (props) => {

    const host = 'http://localhost:4001'
    const [userId, getUserId] = useState("")
    const [name, getName] = useState("")
    const [email, getEmail] = useState("")
    const [password, getPassword] = useState("")

    // user signup
    const signUp = async (name, email, password) => {
        try {
            const response = await fetch(`${host}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            const json = await response.json()
            if (json.status === 'Pending') {
                getUserId(json.userId)
            }
            // returns a pending promise
            return json

        } catch (error) {
            return error
        }

    }

    // show user info
    const showInfo = async (id) => {
        try {
            const response = await fetch(`${host}/user/userinfo/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            getName(json.user.name)
            getEmail(json.user.email)
            getPassword(json.user.password)

        } catch (error) {
            console.log(error)
        }
    }

    // user log in
    const logIn = async (email, password) => {
        try {
            const response = await fetch(`${host}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const json = await response.json()
            if (json.status === "success") {
                getUserId(json.user._id)
                getName(json.user.name)
                sessionStorage.setItem('token',json.token)
            }
            return json
        } catch (error) {
            console.log(error)
        }
    }

    const updateUserName = async (id, newName) => {
        try {
            const response = await fetch(`${host}/update/name/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newName })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                getName(json.user.name)
                toast.success("Your username is successfully updated!!", { duration: 4000, position: 'top-center' })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updatePassword = async (id, obj) => {
        try {
            const response = await fetch(`${host}/update/userpassword/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ oldPassword: obj.oldPassword, newPassword: obj.newPassword, confirmNewPassword: obj.confirmNewPassword })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                getPassword(json.user.password)
            }
            return json
        } catch (error) {
            console.log(error)
        }
    }

    const deleteAcc = async (id) => {
        try {
            const response = await fetch(`${host}/user/deleteaccount`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: id })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                toast.success(json.message, { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const resetPasswordVerify = async (email) => {
        try {
            const response = await fetch(`${host}/reset/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
            const json = await response.json()
            return json
           
        } catch (error) {
            console.log(error)
        }
    }

    const resetPasswordOtp = async (id, otp, obj) => {
        try {
            const response = await fetch(`${host}/reset/otp/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ otp: otp, password: obj.password, confirmPassword: obj.confirmPassword })
            })
            const json = await response.json()
            return json
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <UserContext.Provider value={{ signUp, userId, showInfo, name, logIn, email, password, updateUserName, updatePassword, getUserId, deleteAcc, resetPasswordOtp, resetPasswordVerify }}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserState