import * as employeeRepository from '../data/employee-repository.js'

export function getEmployee(pEmployeeId){
    //...
    employeeRepository.findEmployee(pEmployeeId)
    return null;
}

export function getEmployees(){
    //...
    employeeRepository.findEmployees();
    return null;
}

export function updateEmployee(pId, pEmployee){
    //...
    const employee = employeeRepository.findEmployee(pId);
    if(employee.iactive && employeeRepository.existsExployee(pId)){
        employeeRepository.updateEmployee(pEmployee);
    }
    return null;
}

export function quitEmployee(){
    //..
    return null;
}

export function paySalary(){
    //.. 
    return null;
}

export function employPerson(pPerson){
    const employee = employeeRepository.createEmployee(pPerson)
    return employee;
}

export function calculateIncomeTax(){
    //.. 
    return null;
}

export function getMonthlyExpenses(){
    //.. 
    return null;
}