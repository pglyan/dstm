export class QuestRepository {
  constructor(db) {
    this.db = db
    this._findAllStmt = this.db.prepare('SELECT * FROM quest')
  }

  findAll() {
    return this._findAllStmt.all()
  }
}
