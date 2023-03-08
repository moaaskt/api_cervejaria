const pg = require('pg')
const database = new pg.Client('postgres://psqqjxqs:exwsEFSo32QwzKUlpku33lqzG5Gi02pI@babar.db.elephantsql.com/psqqjxqs')

database.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar ao ElephantSQL')
    } else {
        return console.log('Conectado ao ElephantSQL')
    }
})

module.exports = database