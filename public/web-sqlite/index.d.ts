export const IndexedDbFS: symbol;
export const MemoryFS: symbol;
// export const SQLiteInternal: symbol;
// export const SQLiteFactory: symbol;

export declare class SQLite {
    #private;
    constructor(module: any, sqlite3: any, vfs: any);
    static initialize({ fs }?: {
        fs?: any;
    }): Promise<SQLite>;
    inner(): any;
    open(name: string): Promise<Database>;
}

export declare class Database {
    #private;
    constructor(database: any, sqlite3: any);
    exec<T>(sql: string): Promise<Array<T>>;
}
