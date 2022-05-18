import express from 'express';
const router = express.Router();

import * as employeeService from '../service/employee-service.js';

// ReST API Endpoints
router.get("/", (req, res)=>{
    // business Logic
    const employeeList = employeeService.getEmployees();
    res.status(200).send(employeeList);
})

router.post("/", (req, res)=>{
    // get params
    const person = req.body;
    // business Logic
    const newEmployee = employeeService.employPerson(person);
    // return result
    res.status(201).send(newEmployee);
})

router.put("/:id", (req, res)=>{
    // params
    const personId = req.params.id;
    const person = req.body;
    // business Logic
    const updatedEmployee = employeeService.updateEmployee(personId, person);
    // return result
    res.status(200).send(updatedEmployee);
})

router.delete("/:id", (req, res)=>{
    // get params
    const personId = req.params.id;
    // no logic
    employeeService.quitEmployee(personId);
    // retrun result to the client
    res.status(200);
})

export {router};