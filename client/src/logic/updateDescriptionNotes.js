import axios from 'axios'

export default function updateDescriptionNotes(noteId, description) {

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
      description
    })
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
