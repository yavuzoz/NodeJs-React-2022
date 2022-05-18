import express from 'express';
const router = express.Router();

import * as bookService from '../service/employee-service.js';

// ReST API Endpoints
router.get("/", (req, res)=>{
    // business Logic
    const employeeList = bookService.getEmployees();
    res.status(200).send(employeeList);
})

router.post("/", (req, res)=>{
    // get params
    const person = req.body;
    // business Logic
    const newEmployee = bookService.employPerson(person);
    // return result
    res.status(201).send(newEmployee);
})

router.put("/:id", (req, res)=>{
    // params
    const personId = req.params.id;
    const person = req.body;
    // business Logic
    const updatedEmployee = bookService.updateEmployee(personId, person);
    // return result
    res.status(200).send(updatedEmployee);
})

router.delete("/:id", (req, res)=>{
    // get params
    const personId = req.params.id;
    // no logic
    bookService.quitEmployee(personId);
    // retrun result to the client
    res.status(200);
})

export {router};