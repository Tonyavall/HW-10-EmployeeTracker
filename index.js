const inquirer = require('inquirer')

const menu = require('./assets/scripts/menu')
const exitHandler = require('./assets/scripts/exitHandler')

const listTable = require('./assets/scripts/options/list/listTable')
const newDepartment = require('./assets/scripts/options/add/newDepartment')
const newEmployee = require('./assets/scripts/options/add/newEmployee')
const newRole = require('./assets/scripts/options/add/newRole')
const updateRole = require('./assets/scripts/options/updateRole')
const deleteDepartment = require('./assets/scripts/options/delete/deleteDepartment')
const deleteEmployee = require('./assets/scripts/options/delete/deleteEmployee')
const deleteRole = require('./assets/scripts/options/delete/deleteRole')

const promptUser = () => inquirer.prompt(menu)

const init = async () => {
    const { options } = await promptUser(menu)

    switch (options) {
        case '':
            console.log("Goodbye!")
            process.exit()

        case 'departments_list':
            exitHandler(
                listTable, 
                'department',
                init
            )
            break

        case 'roles_list':
            exitHandler(
                listTable, 
                'role', 
                init
            )
            break

        case 'employees_list':
            exitHandler(
                listTable,
                'employee',
                init
            )
            break

        case 'departments_add':
            exitHandler(
                newDepartment,
                '',
                init
            )
            break

        case 'roles_add':
            exitHandler(
                newRole,
                '',
                init
            )
            break

        case 'employees_add':
            exitHandler(
                newEmployee,
                '',
                init
            )
            break

        case 'roles_update':
            exitHandler(
                updateRole,
                '',
                init
            )
            break

        case 'departments_delete':
            exitHandler(
                deleteDepartment,
                '',
                init
            )
            break

        case 'roles_delete':
            exitHandler(
                deleteRole,
                '',
                init
            )
            break

        case 'employees_delete':
            exitHandler(
                deleteEmployee,
                '',
                init
            )
            break
    }
}


init()