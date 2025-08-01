import type { Database, Statement } from 'better-sqlite3'

export class UserRepository {
  private readonly _tableName = 'user'
  private readonly _findAllStmt: Statement
  private readonly _db: Database

  constructor(db: Database) {
    this._db = db
    this._findAllStmt = this._db.prepare(`SELECT * FROM ${this._tableName}`)
  }

  findAll() {
    return this._findAllStmt.all()
  }
}
