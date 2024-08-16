import React, { useState } from 'react'
import UserCardContext from '../../Context/User Card Context/UserCardContext'
import toast from 'react-hot-toast';

export default function UserCardState(props) {
    const host = 'http://localhost:4001'

    const [cardDetails, setCardDetails] = useState([])

    const fetchDetails = async (id) => {
        try {
            const response = await fetch(`${host}/paymentcard/fetch/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            const json = await response.json()
            if(response.status==401){
                toast.error(json.message,{position:'top-center',duration:4000})
            }
            else{
                if (json.status === 'Success') {
                    setCardDetails(json.data)
                }
                else {
                    toast.error(json.message,{position:'top-center',duration:4000})
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const addDetails = async (id, obj) => {
        try {
            const response = await fetch(`${host}/paymentcard/add/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ title: obj.title, cardName: obj.cardName, cardType: obj.cardType, number: obj.number, securityCode: obj.securityCode })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                setCardDetails(cardDetails.concat(json.data))
                toast.success("Your Card Detail is successfully added!!", { duration: 4000, position: 'top-center' })
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
            const response = await fetch(`${host}/paymentcard/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            const json = await response.json()
            if (json.status === 'Success') {
                const remDetails = cardDetails.filter((detail) => detail._id !== id)
                setCardDetails(remDetails)
                toast.success("Your Card Detail is successfully deleted!!!", { duration: 4000, position: 'top-center' })
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
            const response = await fetch(`${host}/paymentcard/update/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ title: obj.title, cardName: obj.cardName, cardType: obj.cardType, number: obj.number, securityCode: obj.securityCode })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                let newDetails = JSON.parse(JSON.stringify(cardDetails))
                for (let index = 0; index < cardDetails.length; index++) {
                    const item = newDetails[index]
                    if (item._id === id) {
                        newDetails[index].title = obj.title
                        newDetails[index].cardName = obj.cardName
                        newDetails[index].cardType = obj.cardType
                        newDetails[index].number = obj.number
                        newDetails[index].securityCode = obj.securityCode
                        break;
                    }
                }
                setCardDetails(newDetails)
                toast.success("Your Card Detail is successfully updated!!!", { duration: 4000, position: 'top-center' })
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
            <UserCardContext.Provider value={{ cardDetails, fetchDetails, addDetails, deleteDetails, updateDetails }}>
                {props.children}
            </UserCardContext.Provider>
        </>
    )
}
