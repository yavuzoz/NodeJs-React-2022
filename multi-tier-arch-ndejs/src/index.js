import express from "express";
import bodyParser from'body-parser'; // post islemleri icin, payload okunmasini saglar
import cors from 'cors';

import {router as employeeRouter} from './controller/employee-router.js'
import {router as bookRouter} from './controller/book-router.js'

const app = express();

// Configuring body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/employees', employeeRouter);
app.use('/books', bookRouter);

app.listen(3000, ()=>{
    console.log("rest api server has benn just on port 3000 started!")
});