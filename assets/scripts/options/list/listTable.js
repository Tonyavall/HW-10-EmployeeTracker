const inquirer = require('inquirer');
const connection = require('../../../../config/connection')
const restart = require('../restart');

const listTable = async listName => {
    try {
        const res = await connection.query(
            `SELECT * FROM ${listName}`
        )
        console.table(res)
    } catch (err) {
        console.log(err)
    }
    return restart()
}

module.exports = listTable;