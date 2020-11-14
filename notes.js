const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
  const notes = loadNotes() // eslint-disable-line
  console.log(chalk.blueBright.bold.underline('Your notes')) // eslint-disable-line
  notes.forEach((note) => console.log(note.title)) // eslint-disable-line
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({ title, body })
    saveNotes(notes) // eslint-disable-line
    console.log(chalk.green.inverse('New note added')) // eslint-disable-line
  } else {
    console.log(chalk.red.inverse('Note title taken')) // eslint-disable-line
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const updatedNotes = notes.filter((note) => note.title !== title)

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red.inverse('Nothing was removed')) // eslint-disable-line
  } else {
    console.log(chalk.green.inverse(`Note "${title}" was removed`)) // eslint-disable-line
    saveNotes(updatedNotes)
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((selectedNote) => selectedNote.title === title)

  if (note) {
    console.log(chalk.blue.inverse(note.title)) // eslint-disable-line
    console.log(note.body) // eslint-disable-line
  } else {
    console.log(chalk.red.inverse('No note was found')) // eslint-disable-line
  }
}

module.exports = { listNotes, addNote, removeNote, readNote }
