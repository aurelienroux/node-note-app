const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes')

const notes = getNotes()
console.log(notes)

console.log(chalk.blue.bold(validator.isEmail('test@test.ca')))
console.log(chalk.yellow(validator.isEmail('test@test.c')))
console.log(chalk.whiteBright(validator.isEmail('test@test.c')))
console.log(chalk.green.underline(validator.isEmail('test@test')))
console.log(chalk.blue(validator.isURL('example.com')))
