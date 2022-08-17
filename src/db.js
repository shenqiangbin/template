import Dexie from 'dexie'

const db = new Dexie('user_db')
db.version(1).stores({
  t_user: '++id,name,age',
})
db.open()

export default db
