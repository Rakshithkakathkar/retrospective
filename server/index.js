import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import retroRoutes from './routes/retros.js';

const app = express();

app.use('/retros', retroRoutes);

dotenv.config();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); //helps in making requests from one website to another

app.get('/', (req, res) => {
    res.send("Hello from retrospective app");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));