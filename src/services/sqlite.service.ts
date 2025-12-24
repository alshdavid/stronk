/**
 * Lazily load the SQLite wasm module
 */

import { Injectable } from '@angular/core';

type SQLiteModule = typeof import('../../public/web-sqlite/index.d.ts')
type SQLite = InstanceType<SQLiteModule['SQLite']>
export type Database = InstanceType<SQLiteModule['Database']>

const DATABASE_NAME = "stronk_db"

@Injectable()
export class SQLiteService {
  // @ts-ignore
  #sqliteModule: Promise<SQLiteModule>
  #sqlite: Promise<SQLite>
  #database: Promise<Database>

  constructor() {
    this.#sqliteModule = new Promise((res, rej) => {
      const script = document.createElement('script')
      script.src = "/web-sqlite/index.js"
      script.type = "module"
      script.onerror = rej
      script.onload = () => res(
        // @ts-expect-error
        globalThis.SQLite)
      document.head.append(script)
    })

    // TODO: Use indexdb as storage
    this.#sqlite = this.#sqliteModule.then(({
      IndexedDbFS,
      MemoryFS,
      SQLite
    }) => {
      return SQLite.initialize({
        fs: MemoryFS
      });
    })

    this.#database = this.#sqlite.then((sqlite) => {
      return sqlite.open(DATABASE_NAME)
    })
  }

  async exec<T>(query: string): Promise<Array<T>> {
    const db = await this.#database
    return db.exec(query)
  }
}
