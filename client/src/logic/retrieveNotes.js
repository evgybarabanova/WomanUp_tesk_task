import axios from "axios";

export default function retrieveNotes() {

  return axios.get(`${process.env.REACT_APP_API_URL}/notes`)
    .then(response => {
      const { data: notes } = response

      return notes
    })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
