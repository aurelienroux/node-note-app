const fs = require('fs')

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

// const originalJSON = { name: 'Andrew', planet: 'Earth', age: 27 }

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Aurelien'
user.age = 39

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
