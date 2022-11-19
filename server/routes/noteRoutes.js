const router = require('express').Router()
const {
  createNotes, deleteNotes, updateNotes, retrieveNotes, retrieveNote,
} = require('../logic')

router.get('/', async (req, res) => {
  try {
    const notes = await retrieveNotes()

    res.status(200).json(notes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


router.get('/:noteId', async (req, res) => {
  try {
    const { params: { noteId } } = req
    const note = await retrieveNote(noteId)

    res.status(200).json(note)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

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
    const { params: { noteId }, body: { name, description, date, status } } = req

    await updateNotes(noteId, name, description, date, status)
    res.status(201).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


module.exports = router
