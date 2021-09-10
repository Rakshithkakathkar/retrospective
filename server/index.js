import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();


app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); //helps in making requests from one website to another

app.get('/', (req, res) => {
    res.send("Hello from retrospective app");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))