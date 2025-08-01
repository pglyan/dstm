export class TaskRepository {
  constructor(db) {
    this.db = db
  }

  findAll() {
    const stmt = this.db.prepare('SELECT * FROM tasks')
    return stmt.all()
  }
}
