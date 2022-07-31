import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
    // const q = req.query.q;
    const {q} = req.query;
    // http://localhost:5000/?q=asd
    console.log(q);
    res.json(Users.splice(0,10));
});

app.listen(5000, () => console.log("API is working!"));