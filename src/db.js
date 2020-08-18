import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json')
const db = lowdb(adapter)

// Set some defaults
db.defaults({ recipes: {} })
    .write()

// // Add a post
// db.get('posts')
//     .push({ id: 1, title: 'lowdb is awesome' })
//     .write()

// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//     .write()

export default db;