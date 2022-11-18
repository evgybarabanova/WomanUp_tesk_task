import axios from 'axios'

export default function updateNotes(noteId, name, description, date) {

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
      name,
      description,
      date
    })
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
