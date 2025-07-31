export class UsersRepository {
  constructor(db) {
    this.db = db
  }

  findAll() {
    const stmt = this.db.prepare('SELECT * FROM users')
    return stmt.all()
  }
}
