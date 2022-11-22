import axios from 'axios'

export default function uploadFileNotes(noteId, file) {
  
  return (`${process.env.REACT_APP_API_URL}/notes/${noteId}/upload`, {
    file,
  })
    .then((result) => console.log('File Send Success'))
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}