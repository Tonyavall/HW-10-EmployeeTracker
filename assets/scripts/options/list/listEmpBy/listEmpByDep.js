const inquirer = require('inquirer')
const restart = require('../../restart')
const connection = require('../../../../../config/connection')

const listEmpByDep = async () => {
    try {
        const departments = await connection.query(
            `SELECT * FROM department`
        )
        
        const { department } = await inquirer.prompt([
            {
                type: 'list',
                name: 'department',
                message: 'Please pick a department.',
                choices: [
                    ...departments.map(department => ({ name: department.name, value: department })),
                    { name: 'Cancel', value: false }
                ]
            }
        ])
        if (!department) return restart()

        const list = await connection.query(
            `SELECT * FROM employee
                INNER JOIN role ON employee.role_id = role.id
                INNER JOIN department ON role.department_id = department.id
            WHERE department_id = ${department.id}`
        )
        const cleanList = list.map(item => {
            return {
                Name: `${item.first_name} ${item.last_name}`,
                Role: item.title, Salary: item.salary,
                Department: item.name
            }
        })
        console.table(cleanList)
    } catch (err) {
        console.log(err)
    }
}

module.exports = listEmpByDep;