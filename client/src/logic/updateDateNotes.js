import axios from 'axios'

export default function updateDateNotes(noteId, date) {

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
      date
    })
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
