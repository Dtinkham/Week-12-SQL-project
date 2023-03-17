const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table')


function mainMenu() {
    inquirer.prompt({
        name: 'mainMenu',
        type: 'list',
        message: "Please choose an option:",
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add an employee',
            'Update an employee role'
        ],
    })

    .then((response) => {
        let choice = response.mainMenu;
        switch (choice) {
            case 'View all departments':
                viewDepartments();
                break;
            
            case 'View all roles':
                viewRoles();
                break;

            case 'View all employees':
                viewEmployees();
                break;
            
            case 'Add an employee':
                addEmployee();
                break;

            case 'Add an department':
                addDepartment();
                break;
            
            case 'Add a role':
                addRole();
                break     
                    

            case 'Update an employee role':
                updateRole();
                break;
        }   
    })
}
mainMenu()

//Functions for viewing:
function viewDepartments() {
    db.query('Select * FROM department', function (results){
        console.table(results)
    }) 
    }

function viewRoles() {
    db.query('Select * FROM roles', function (results){
        console.table(results)
    }) 
    }
    
function viewEmployees() {
    db.query('Select * FROM employee', function (results){
        console.table(results)
    }) 
    }

//Function to create new Departments
function addDepartment() {
    inquirer.prompt ([{
        type: 'input',
        message: 'Please name the new department:',
        name: 'name'        
    }])
    
    .then((response) => {
        db.query('INSERT INTO department (department_name) Values (?)', [response.dept], function(err, res) {
            console.table(res)
        })
    } )
    
}

//Function to create New Role
function addRole() {
    inquirer.prompt ([
        {
        type: 'input',
        message: 'Please name the new role:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter the salary of the new role:',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'Please enter the department for the new role:',
        name: "department"
    }]
    )
    
    .then((response) => {
        db.query('INSERT INTO role (name,salary,department_id) Values (?,?,?)', [response.name, response.salary, response.department], function(err, res) {
            console.table(res)
        })
    } )
}

//Function to add new Employees
function addEmployee() {
    inquirer.prompt ([{
        type: 'input',
        message: 'Please enter the first name of the new employee:',
        name: 'first_Name'
        },
        {
        type: 'input',
        message: 'Please enter the last name of the new employee:',
        name: 'last_Name'
        },

        {
        type: 'input',
        message: 'Please enter the role of the new employee:',
        name: 'role'        
        },
        {
        type: 'input',
        message: "Please enter the new employee's manager:",
        name: 'manager'
        }]
        )

    .then((response) => {
        db.query('INSERT INTO employee (first_name, last_name, role, manager) Values (?)', [response.first_Name, response.last_Name,response.role,response.manager], function(err, res) {
            console.table(res)
        })
    } )    
}

function updateRole() {
    inquirer.prompt([ 
        {
            type: 'input',
            message:'Please enter the first name of the employee:',
            name: 'employee'
        },
        {
            type: 'input',
            message: 'Please enter the new role:',
            name: 'role'
        }

    ])
    .then((response) => {
        db.query('UPDATE employee SET role_id=? WHERE first_Name= ?',[response.role,response.employee], function(err,res){
          console.table(res)  
        })
    })
}

