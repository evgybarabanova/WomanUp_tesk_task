import axios from 'axios'

export default function createNotes(description) {

  return axios
    .post(`${process.env.REACT_APP_API_URL}/notes`, {
      description
    })
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
