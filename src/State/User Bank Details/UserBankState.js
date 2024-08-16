import React, { useState } from 'react'
import UserBankContext from '../../Context/User Bank Details/UserBankContext'
import toast from 'react-hot-toast';

export default function UserBankState(props) {
    const host = 'http://localhost:4001'
    const [bankDetails, setBankDetails] = useState([])

    const fetchDetails = async (id) => {
        try {
            const response = await fetch(`${host}/bank-details/fetch/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            const json = await response.json()
            if (response.status == 401) {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
                setBankDetails([])
            }
            else {
                if (json.status === 'Success') {
                    setBankDetails(json.data)

                }
                else {
                    toast.error(json.message, { duration: 4000, position: 'top-center' })
                }
            }


        } catch (error) {
            console.log(error)
        }
    }

    const addDetails = async (id, obj) => {
        try {
            const response = await fetch(`${host}/bank-details/add/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ title: obj.title, bankName: obj.bankName, accountNo: obj.accountNo, accountType: obj.accountType, pin: obj.pin })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                setBankDetails(bankDetails.concat(json.data))
                toast.success("Your Bank Detail is successfully added!!", { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const updateDetails = async (id, obj) => {
        try {
            const response = await fetch(`${host}/bank-details/update/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ title: obj.title, bankName: obj.bankName, accountNo: obj.accountNo, accountType: obj.accountType, pin: obj.pin })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                let newDetails = JSON.parse(JSON.stringify(bankDetails))
                for (let index = 0; index < bankDetails.length; index++) {
                    const item = newDetails[index]
                    if (item._id === id) {
                        newDetails[index].title = obj.title
                        newDetails[index].bankName = obj.bankName
                        newDetails[index].accountNo = obj.accountNo
                        newDetails[index].accountType = obj.accountType
                        newDetails[index].pin = obj.pin
                        break;
                    }
                }
                setBankDetails(newDetails)
                toast.success("Your Bank Detail is successfully updated!!!", { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteDetails = async (id) => {
        try {
            const response = await fetch(`${host}/bank-details/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            const json = await response.json()
            if (json.status === 'Success') {
                const remDetails = bankDetails.filter((detail) => detail._id !== id)
                setBankDetails(remDetails)
                toast.success("Your Bank Detail is successfully deleted!!!", { duration: 4000, position: 'top-center' })
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
            <UserBankContext.Provider value={{ fetchDetails, bankDetails, addDetails, updateDetails, deleteDetails }}>
                {props.children}
            </UserBankContext.Provider>
        </>
    )
}
