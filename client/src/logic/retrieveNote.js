import axios from "axios";

export default function retrieveNote(noteId) {

  return axios.get(`${process.env.REACT_APP_API_URL}/notes/${noteId}`)
    .then(response => {
      const { data: note } = response

      return note
    })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
