/*1*/
let employees = {
    "employeeList":[
    {
        "firstName": "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raiseEligble" : true
},
{
    "firstName": "Mary",
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : 18500,
    "raiseEligble" : true
},
{
        "firstName": "Bill",
        "department" : "HR",
        "designation" : "Trainee",
        "salary" : 21200,
        "raiseEligble" : false
},
]
}
console.log(employees);
/*2*/
let company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employeeList":[
        {
            "firstName": "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligble" : true
    },
    {
        "firstName": "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligble" : true
    },
    {
            "firstName": "Bill",
            "department" : "HR",
            "designation" : "Trainee",
            "salary" : 21200,
            "raiseEligble" : false
    }]
}
console.log(company);

/*3*/
let newEmployee = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employeeList":[
        {
            "firstName": "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligble" : true
    },
    {
        "firstName": "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligble" : true
    },
    {
            "firstName": "Bill",
            "department" : "HR",
            "designation" : "Trainee",
            "salary" : 21200,
            "raiseEligble" : false
    }]
}
console.log(newEmployee);

function addEmployee(obj, name, department, designation, salary, raise){
    let employee = {
        "firstName": name,
        "department" : department,
        "designation" : designation,
        "salary" : salary,
        "raiseEligble" : raise
    };
    obj['employeeList'].push(employee);
}
addEmployee(newEmployee, "Anna", "Tech", "Executive", 25600, false);

/*4*/
let salaryTotal = 0;
for(let i = 0; i < newEmployee.employeeList.length; i++){
    salaryTotal += newEmployee.employeeList[i]['salary'];
}
console.log(salaryTotal);

/*5*/
for(let i = 0; i < newEmployee.employeeList.length; i++){
    if(newEmployee.employeeList[i]['raiseEligble']===true){
        newEmployee.employeeList[i]['salary']+= newEmployee.employeeList[i]['salary'] * .1;
        newEmployee.employeeList[i]['raiseEligble'] = false;
    }
}
console.log(newEmployee.employeeList);

/*6*/

let wfh = ['Anna', 'Sam'];
for(let i = 0; i < newEmployee.employeeList.length; i++){
    let check = false;
    let name = newEmployee.employeeList[i].firstName;
    console.log(check);
for(let j = 0; j < wfh.length; j++){
    if (wfh[j] === name){
        check = true;
    }
}
if(check === true){
    newEmployee['employeeList'][i].workFromHome = true;
}
else {
    newEmployee['employeeList'][i].workFromHome = false;
}
}
console.log(newEmployee);