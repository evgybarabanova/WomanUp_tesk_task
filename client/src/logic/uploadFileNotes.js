import axios from 'axios'

export default function uploadFileNotes(noteId, formData) {
  
  return axios(`${process.env.REACT_APP_API_URL}/notes/${noteId}/upload`, {
    method: 'POST',
    body: formData,
  })
  .then(() => {})
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}