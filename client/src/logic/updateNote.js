import axios from 'axios'

export default function updateNote(noteId, name, description, date, status) {

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
      name,
      description,
      date,
      status
    })
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
