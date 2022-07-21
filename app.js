import express from 'express';
import db from './database/BancoDeDados.js'
const app = express();
const port = 3080;

app.use(express.json())
controller(app,db)

app.listen(
    console.log(`http://localhost:${port}`)
);
