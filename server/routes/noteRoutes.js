const router = require('express').Router()
const {
  createNotes, deleteNotes, updateNotes
} = require('../logic')

router.post('/', async (req, res) => {
  try {

    const { body: { name, description } } = req

    await createNotes(name, description)
    res.status(201).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete('/:noteId', async (req, res) => {
  try {
    const { params: { noteId } } = req

    await deleteNotes(noteId)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

 router.patch('/:noteId', async (req, res) => {
   try {
     const { params: { noteId }, body: { description } } = req

     await updateNotes(noteId, description)
     res.status(201).send()
   } catch (error) {
     res.status(500).json({ error: error.message })
   }
 })


module.exports = router
