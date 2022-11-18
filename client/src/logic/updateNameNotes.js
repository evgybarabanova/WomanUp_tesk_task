import axios from 'axios'

export default function updateNameNotes(noteId, name) {

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
      name
    })
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
