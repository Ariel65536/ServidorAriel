const { Client } = require('pg');

class autenticador {
    constructor() {
        console.log("Autenticador!");
        const connectionData = {
            user: process.env.USUARIO_POSTGRES,
            host: 'localhost',
            database: process.env.BASEDATOS_POSTGRES,
            password: process.env.CONTRA_POSTGRES,
            port: 5432,
        }
        const client = new Client(connectionData)

        client.connect()
        client.query('SELECT * FROM Usuarios')
            .then(response => {
                console.log(response.rows)
                client.end()
            })
            .catch(err => {
                client.end()
            })
    }
}

module.exports = autenticador;