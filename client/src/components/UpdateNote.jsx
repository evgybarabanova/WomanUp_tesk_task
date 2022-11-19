import { retrieveNote, updateNote} from '../logic'
import { useEffect, useState } from 'react'

export default function UpdateNote({ noteId, onUpdated }) {
    const [note, setNote] = useState()

    useEffect(() => {
        try {
            retrieveNote(noteId)
                .then(note => setNote(note))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    const handleUpdateNote = event => {
        event.preventDefault()

        const name = event.target.name.value
        const description = event.target.description.value
        const date = event.target.date.value
        const status = event.target.status.value

        try {
            updateNote(noteId, name, description, date, status)
                .then(() => onUpdated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form onSubmit={handleUpdateNote}>
        
        <input type="text" name="name" defaultValue={note?.name} />
        <input type="text" name="description" defaultValue={note?.description} />
        <input type="date" name="date" defaultValue={note?.date} />
        <input type="checkbox" name="status" defaultValue={note?.status} />
        <button>Update</button>
    </form>
}