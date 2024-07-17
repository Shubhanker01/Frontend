import UserNotesContext from "../../Context/User Notes/UserNotesContext";
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function UserNotesState(props) {
    const host = 'http://localhost:4001'
    const [notes, getNotes] = useState([])

    const addNote = async (id, title, description) => {
        try {
            const response = await fetch(`${host}/notes/create/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            })
            const json = await response.json()
            if (json.status === 'Success') {
                getNotes(notes.concat(json.notes))
                toast.success("Your note is successfully added!!", { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchNotes = async (id) => {
        try {
            const response = await fetch(`${host}/notes/fetchnotes/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            if (json.status === 'Success') {
                getNotes(json.notes)

            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`${host}/notes/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            if (json.status === 'Success') {
                const remDetails = notes.filter((detail) => detail._id !== id)
                getNotes(remDetails)
                toast.success("Your note is successfully deleted!!", { duration: 4000, position: 'top-center' })
            }
            else {
                toast.error(json.message, { duration: 4000, position: 'top-center' })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateNote = async (id, title, description) => {
        try {
            const response = await fetch(`${host}/notes/update/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            })
            const json = await response.json()

            if (json.status === 'Success') {
                let newNotes = JSON.parse(JSON.stringify(notes))
                for (let index = 0; index < notes.length; index++) {
                    const item = newNotes[index]
                    if (item._id === id) {
                        newNotes[index].title = title
                        newNotes[index].description = description
                        break;
                    }
                }
                getNotes(newNotes)
                toast.success("Your note is successfully updated!!", { duration: 4000, position: 'top-center' })
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
            <UserNotesContext.Provider value={{ addNote, notes, fetchNotes, deleteNote, updateNote }}>
                {props.children}
            </UserNotesContext.Provider>
        </>
    )
}
