const express = require('express')
const mysql = require('mysql')
const app = express()
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'base'
}

const port = 3000

app.listen(port, () => {
    console.log(`Running on [${port}]`)
})

const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * from pessoa', (error, results) => {
            return error ? reject(error) : resolve(results)
        })
    })
}

const insert = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO pessoa (nome) values ('Rodrigo')", (error) => {
            return error ? reject(error) : resolve()
        })
    })
}

const toResponse = (pessoa) => {
    const mappedPessoa = pessoa.map(value => `<p>- ${value['nome']}</p>`).join('')
    return `<h1>Full Cycle Rocks!</h1>${mappedPessoa}`
}



app.get('/', (req, res) => {
    console.log('teste')
    const connection = mysql.createConnection(config)
    return insert(connection)
        .then(() => findAll(connection))
        .then(results => res.send(toResponse(results)))
        .finally(() => connection.end())
})

app.get('/health', (req, res) => {
    res.send({ status: 'OK' })
})