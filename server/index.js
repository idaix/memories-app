import express from "express";
// body parser helps to do body requests 
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'


// init app

const app = express();


// setup routers
app.use('/posts', postRoutes);


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const CONNECTION_URL = 'mongodb://admin:admin@cluster0-shard-00-00.omurn.mongodb.net:27017,cluster0-shard-00-01.omurn.mongodb.net:27017,cluster0-shard-00-02.omurn.mongodb.net:27017/?ssl=true&replicaSet=atlas-vwkpug-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

let connection = mongoose.connect(CONNECTION_URL);
connection.then(() => app.listen(PORT, ()=> console.log('server running on port', PORT)));
connection.catch(err=>console.log(err.message));
mongoose.set('debug', true);