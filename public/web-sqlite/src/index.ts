import SQLiteFactory from '../wa-sqlite/dist/wa-sqlite-async.mjs';
import * as SQLiteInternal from '../wa-sqlite/src/sqlite-api.js';
import { MemoryAsyncVFS as MemoryVFS } from '../wa-sqlite/src/examples/MemoryAsyncVFS.js';

export { IDBBatchAtomicVFS as IndexedDbFS } from '../wa-sqlite/src/examples/IDBBatchAtomicVFS.js';
export { MemoryAsyncVFS as MemoryFS } from '../wa-sqlite/src/examples/MemoryAsyncVFS.js';
export { SQLiteInternal }
export { SQLiteFactory }

export class SQLite {
  #module
  #sqlite3
  #vfs

  constructor(
    module: any,
    sqlite3: any,
    vfs: any,
  ) {
    if (!module || !sqlite3 || !vfs) {
      throw new Error('Unable to initialize SQLite')
    }
    this.#module = module
    this.#sqlite3 = sqlite3
    this.#vfs = vfs
  }

  static async initialize({
    fs = MemoryVFS
  } = {}) {
    const module = await SQLiteFactory();
    const sqlite3 = SQLiteInternal.Factory(module);
    const vfs = await fs.create("sqlite::vfs", module);
    sqlite3.vfs_register(vfs, true);
    return new SQLite(module, sqlite3, vfs)
  }

  inner() {
    return this.#sqlite3
  }

  async open(name: string): Promise<Database>  {
    const db = await this.#sqlite3.open_v2(name);
    return new Database(db, this.#sqlite3)
  }
}

export class Database {
  #database: any
  #sqlite3: any

  constructor(
    database: any,
    sqlite3: any
  ) {
    this.#database = database
    this.#sqlite3 = sqlite3
  }

  async exec<T>(sql: string): Promise<Array<T>> {
    const result: T[] = [];
    
    await this.#sqlite3.exec(this.#database, sql, (row: any, col: any) => {
      const entry: any = {};
      for (const [i, key] of col.entries()) {
        entry[key] = row[i];
      }
      result.push(entry);
    });

    return result as T[]
  }
}