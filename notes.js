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

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
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

module.exports = { addNote, removeNote }
