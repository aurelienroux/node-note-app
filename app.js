// const validator = require('validator')
// const chalk = require('chalk')
// const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes')

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: 'true',
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// List command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    console.log('list all notes') // eslint-disable-line
  }
})

// Read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('read a note') // eslint-disable-line
  }
})

yargs.parse()
// console.log(yargs.argv)
