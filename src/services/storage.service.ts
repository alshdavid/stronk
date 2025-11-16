import { Injectable } from '@angular/core';

export const DATABASE_DEFAULT_KEY = 'default';
export const DATABASE_NAME = 'alshdavid:stronk';

@Injectable()
export class StorageService {
  #db: Connection;

  constructor() {
    this.#db = new Connection();
  }

  listItems(): Promise<string[]> {
    return this.#db.listItems();
  }

  clear(): Promise<void> {
    return this.#db.clear();
  }

  getItem<T extends string | ArrayBuffer | unknown = unknown>(key: string): Promise<T | null> {
    return this.#db.getItem<T>(key);
  }

  setItem(key: string, value: IDBValidKey): Promise<void> {
    return this.#db.setItem(key, value);
  }

  removeItem(key: string): Promise<void> {
    return this.#db.removeItem(key);
  }

  getItemJson<T = unknown>(key: string): Promise<T | null> {
    return this.#db.getItemJson(key);
  }

  setItemJson(key: string, value: any): Promise<void> {
    return this.#db.setItemJson(key, value);
  }
}

type DbConnection = { clients: number; db?: Promise<IDBDatabase> };
const CONNECTION: DbConnection = { clients: 0, db: undefined };

export class Connection {
  #storeKey: string;

  constructor(storeKey: string = DATABASE_DEFAULT_KEY) {
    this.#storeKey = storeKey;
  }

  async listItems(): Promise<string[]> {
    const db = await this.#getDb();

    const tx = db.transaction(this.#storeKey, 'readonly');
    const st = tx.objectStore(this.#storeKey);
    const gRequest = st.getAllKeys();

    return new Promise<string[]>(async (resolve, reject) => {
      gRequest.onsuccess = () => {
        resolve(gRequest.result as string[]);
      };

      gRequest.onerror = () => {
        reject(gRequest.error);
      };
    });
  }

  async clear(): Promise<void> {
    const db = await this.#getDb();

    const tx = db.transaction(this.#storeKey, 'readwrite');
    const st = tx.objectStore(this.#storeKey);
    const gRequest = st.clear();

    return new Promise<any>(async (resolve, reject) => {
      gRequest.onsuccess = () => {
        if (gRequest.result === undefined) {
          resolve(null);
        } else {
          resolve(gRequest.result);
        }
      };

      gRequest.onerror = () => {
        reject(gRequest.error);
      };
    });
  }

  async getItem<T extends string | ArrayBuffer | unknown = unknown>(
    key: string,
  ): Promise<T | null> {
    const db = await this.#getDb();

    const tx = db.transaction(this.#storeKey, 'readonly');
    const st = tx.objectStore(this.#storeKey);
    const gRequest = st.get(key);

    return new Promise<any>(async (resolve, reject) => {
      gRequest.onsuccess = () => {
        if (gRequest.result === undefined) {
          resolve(null);
        } else {
          resolve(gRequest.result);
        }
      };

      gRequest.onerror = () => {
        reject(gRequest.error);
      };
    });
  }

  async setItem(key: string, value: IDBValidKey): Promise<void> {
    const db = await this.#getDb();

    const tx = db.transaction(this.#storeKey, 'readwrite');
    const st = tx.objectStore(this.#storeKey);
    const sRequest = st.put(value, key);

    return new Promise((resolve, reject) => {
      sRequest.onsuccess = function () {
        resolve();
      };

      sRequest.onerror = function () {
        reject(sRequest.error);
      };
    });
  }

  async removeItem(key: string): Promise<void> {
    const db = await this.#getDb();

    const tx = db.transaction(this.#storeKey, 'readwrite');
    const st = tx.objectStore(this.#storeKey);
    const rRequest = st.delete(key);

    return new Promise((resolve, reject) => {
      rRequest.onsuccess = function () {
        resolve();
      };

      rRequest.onerror = function () {
        reject(rRequest.error);
      };
    });
  }

  async getItemJson<T = unknown>(key: string): Promise<T | null> {
    const str = await this.getItem<string>(key);
    if (!str) return null;
    return JSON.parse(str);
  }

  async setItemJson(key: string, value: any): Promise<void> {
    const str = JSON.stringify(value);
    await this.setItem(key, str);
  }

  async close(): Promise<void> {
    if (CONNECTION.clients === 0) return;
    const db = await this.#getDb();

    CONNECTION.clients = CONNECTION.clients - 1;
    if (CONNECTION.clients === 0) {
      db.close();
    }
  }

  #getDb(): Promise<IDBDatabase> {
    let db = CONNECTION.db;

    if (!db) {
      db = new Promise<IDBDatabase>((resolve, reject) => {
        const oRequest = indexedDB.open(DATABASE_NAME, 1);

        oRequest.onupgradeneeded = () => {
          const db = oRequest.result;
          db.createObjectStore(this.#storeKey);
        };

        oRequest.onsuccess = () => {
          resolve(oRequest.result);
        };

        oRequest.onerror = () => {
          reject(oRequest.error);
        };
      });

      CONNECTION.db = db;
    }

    CONNECTION.clients = CONNECTION.clients + 1;
    return db;
  }
}
