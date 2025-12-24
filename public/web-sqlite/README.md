# Sqlite Wasm in a SharedWorker or WebWorker

This is a basic implementation of a persistent cross-tab sqlite database for the browser

On desktop apps it will use `SharedWorker`, on mobile devices it will use `WebWorker`.

The database is persisted using indexedDB

## Usage

Vendor the repo into your current project

```html
<html>
  <script type="module">
    import { SQLite, IndexedDbFS } from "@alshdavid/sqlite-web";

    const sqlite = await SQLite.initialize({
      fs: IndexedDbFS
    });

    const db = await sqlite.open("test");

    await db.exec(
      `CREATE TABLE IF NOT EXISTS test_table ("id" TEXT UNIQUE, "val" TEXT)`
    );

    await exec("INSERT INTO test_table (id, val) VALUES ('1', 'v1')");
    await exec("INSERT INTO test_table (id, val) VALUES ('2', 'v2')");
    await exec("INSERT INTO test_table (id, val) VALUES ('3', 'v3')");

    const result = await db.exec("SELECT * FROM test_table");
    console.log(result);
  </script>
</html>
```