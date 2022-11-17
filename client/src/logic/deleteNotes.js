import axios from 'axios'

export default function deleteNotes(noteId) {

  return axios
    .delete(`${process.env.REACT_APP_API_URL}/notes/${noteId}`)
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
