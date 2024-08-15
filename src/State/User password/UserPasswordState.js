import React, { useState } from 'react'
import UserPasswordContext from '../../Context/User passwords/UserPassword'
import toast from 'react-hot-toast';

export default function UserPasswordState(props) {
    const host = 'http://localhost:4001'
    let [passwordDetails, getPasswordDetails] = useState([])


    // add a new password detail
    const addNewPassword = async (id, title, password) => {
        try {
            let response = await fetch(`${host}/password/add/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ title, password })
            })
            let json = await response.json()
            if (json.status === 'Success') {
                getPasswordDetails(passwordDetails.concat(json.data))
                toast.success("Your password detail is successfully added!!", { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }

        } catch (error) {
            return error
        }
    }

    // show user password details
    const readPasswordDetails = async (id) => {
        try {
            let response = await fetch(`${host}/password/read/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            if (response.status == 401) {
                let json = await response.json()
                toast.error(json.message, { duration: 4000, position: 'top-center' })
                getPasswordDetails([])
            }
            else {
                let json = await response.json()
                getPasswordDetails(json.data)
            }



        } catch (error) {
            console.log(error)
        }
    }

    const deletePasswordDetails = async (id) => {
        try {
            let response = await fetch(`${host}/password/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            let json = await response.json()
            if (json.status === 'Success') {

                const remDetails = passwordDetails.filter((detail) => detail._id !== id)
                getPasswordDetails(remDetails)
                toast.success("Your password detail is successfully deleted!!", { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }

        } catch (error) {
            console.log(error)
        }
    }

    // update password details
    const updatePasswordDetails = async (id, title, password) => {
        try {
            let response = await fetch(`${host}/password/update/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ title, password })
            })

            let json = await response.json()
            if (json.status === 'Success') {
                let newDetails = JSON.parse(JSON.stringify(passwordDetails))
                for (let index = 0; index < passwordDetails.length; index++) {
                    const item = newDetails[index]
                    if (item._id === id) {
                        newDetails[index].title = title
                        newDetails[index].password = password
                        break;
                    }
                }
                getPasswordDetails(newDetails)
                toast.success("Your password detail is successfully updated!!", { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <UserPasswordContext.Provider value={{ addNewPassword, deletePasswordDetails, updatePasswordDetails, readPasswordDetails, passwordDetails, getPasswordDetails }}>
                {props.children}
            </UserPasswordContext.Provider>
        </>
    )
}
