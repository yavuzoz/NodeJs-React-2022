const Joi = require('Joi');
const express = require('express');
const router = express.Router();


const personList = [
  {
      "firstName": "John",
      "lastName": "Meier",
      "gender": "M",
      "birthday": "01.05.2000",
      "email": "john@hicoders.ch",
      "password": "s34ret",
      "about": "me about me",
      "id": "1"
  },
  {
      "firstName": "Mirjam",
      "lastName": "Herrman",
      "gender": "F",
      "birthday": "21.05.2002",
      "email": "mirjam@hicoders.ch",
      "password": "s34ret",
      "about": "I am crazy!",
      "id": "2"
  },
  {
      "firstName": "Selami",
      "lastName": "Mettler",
      "gender": "M",
      "birthday": "11.02.1940",
      "email": "selami@hicoders.ch",
      "password": "s34ret",
      "about": "Merhaba selam!",
      "id": "3"
  }
];


/* GET home page. */
router.get('/employees/', function(req, res, next) {
  let newArray = JSON.parse(JSON.stringify(personList))
  let list = newArray.reverse().filter( (o, i) => i<20)
  res.json(list);
});

router.post('/employees/', function(req, res, next) {
  personList.push(req.body)
  res.sendStatus(200);
});

//PUT
router.put('/employees/:id', function(req, res, next) {
  const employee = personList.find(c=> c.id=== parseInt(req.params.id));
  if(employee) res.status(404).send("The EMPLOYEE with the given ID..")

  const schema ={
    name: Joi.string().min(3).required() 
  };
  const result =Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  employee.name = req.body.name;
  res.send(employee);
});

//DELETE

router.delete('/employees/:id', function(req, res, next) {
  const employee = personList.find(c=> c.id=== parseInt(req.params.id));
  if(!personList) res.status(404).send("The employee with the given ID was ..")
  
  const index = personList.indexOf(employee);
  personList.splice(index, 1);

  res.send(employee);
});

module.exports = router;