import Database from "better-sqlite3";

const db = new Database("./database/database.sqlite");

db.prepare("CREATE TABLE IF NOT EXISTS fours (id INTEGER PRIMARY KEY AUTOINCREMENT, fours TEXT)").run();

export const getAll = () => db.prepare("SELECT * FROM fours").all();

export const getById = (id) => db.prepare("SELECT * FROM fours WHERE id = ?").get(id);

export const getByFour = (fours) => db.prepare("SELECT * FROM fours WHERE fours = ?").get(fours);

export const save = (fours) => db.prepare("INSERT INTO fours (fours) VALUES (?)").run(fours);