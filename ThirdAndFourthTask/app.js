import express from "express";
import cors from "cors";
import * as db from "./database/database.js";

const PORT = 4444;

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.get("/fours", (req, res) => res.status(200).json(db.getAll()));

app.get("/fours/:id", (req, res) => {
    const four = db.getById(+req.params.id);
    if (!four)
        return res.status(404).json({message: "Four not found"})
    return res.status(200).json(four);
});

app.post("/fours", (req,res) => {
    const {four} = req.body;
    if (!four)
        return res.status(400).json({message: "Missing data"});
    const regex = /^\[\d+,\d+,\d+,\d+\]$/;
    if (!regex.test(four))
        return res.status(400).json({message: "Invalid data"});
    if (db.getByFour(four))
        return res.status(400).json({message: "There is alredy added"});
    db.save(four);
    return res.status(201).json({message: "Created"});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});