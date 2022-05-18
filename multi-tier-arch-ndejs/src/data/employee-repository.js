
const employeeDatabase = [
    {
        "id": 1,
        "firstname": "hi",
        "lastname": "coders",
        "salary": 4000
    },
    {
        "id": 2,
        "firstname": "Hans",
        "lastname": "Müller",
        "salary": 5000
    },
];

export function existsExployee(pId){
    return employeeDatabase.some(e=>e.id==pId);
}

export function findEmployees(){
    return employeeDatabase;
}

export function findEmployee(){
    return employeeDatabase.find(e=>e.id==pId);
}

export function createEmployee(employee){
    employeeDatabase.push(employee);
    return employee;
}

export function updateEmployee(pId, employee){
    const foundIndex = employeeDatabase.findIndex(e=>e.id==pId);
    employeeDatabase[foundIndex] = employee;
    return employee;
}

export function deleteEmployee(employeeId){
    const foundIndex = employeeDatabase.findIndex(e=>e.id==employeeId);
    employeeDatabase.splice(foundIndex, 1);
    return null;
}