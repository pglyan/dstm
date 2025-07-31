import fs from 'node:fs/promises'
import path from 'node:path'

export async function runDatabaseMigrations(db) {
  const migrationsDir = path.join(import.meta.dirname, 'migrations')
  const migrationFiles = await fs.readdir(migrationsDir)

  const orderedMigrations = migrationFiles.sort((a, b) => {
    const aNum = parseInt(a.split('_')[0], 10)
    const bNum = parseInt(b.split('_')[0], 10)
    return aNum - bNum
  })

  for (const file of orderedMigrations) {
    const filePath = path.join(migrationsDir, file)
    const sql = await fs.readFile(filePath, 'utf-8')
    db.exec(sql)
  }
}
