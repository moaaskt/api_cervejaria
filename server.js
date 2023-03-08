const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')
const port = 3000

const app = express()
app.use(bodyParser.json())



//metodo para cadastrar as cervejas
app.get('/cervejas', (req, res) => {
    database.query('SELECT * FROM produtos').then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})



//buscando a ceveja pelo nome
app.get('/buscar-cerveja/:nome', (req, res) => {
    console.log(req.params)
    
    database.query(`SELECT * FROM produtos WHERE nome= '${req.params.nome}'` ).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})



app.get('/buscar-cerveja-inicial/:nome', (req, res) => {
    console.log(req.params)
    //lower transforma todas as letras em minusculas 
    database.query(`SELECT * FROM produtos WHERE lower(nome) like lower('%${req.params.nome}%')` ).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})


app.get('/buscar-cerveja-abv', (req, res) => {
    console.log(req.params)
    
    database.query(`SELECT * FROM produtos order by abv desc` ).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})


app.get('/buscar-cerveja-nacionalidade/:nacionalidade', (req, res) => {
    console.log(req.params)
    
    database.query(`SELECT * FROM produtos WHERE nacionalidade = '${req.params.nacionalidade}'` ).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})




app.get('/buscar-cerveja-tipo/:tipo', (req, res) => {
    console.log(req.params)
    
    database.query(`SELECT * FROM produtos WHERE tipo = '${req.params.tipo}'` ).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})





app.post('/cadastrar-cerveja', (req, res) => {
    const novoProduto = req.body
    const query = 'INSERT INTO produtos(nome, abv, tipo,nacionalidade) VALUES ($1, $2,$3,$4)'
    const values = [novoProduto.nome, novoProduto.abv, novoProduto.tipo , novoProduto.nacionalidade]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Cerveja cadastrada com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})


app.delete('/deletar-cerveja/:id', (req, res) => {
    const idDoProduto = req.params.id
    const query = 'DELETE FROM produtos WHERE produto_id=$1'
    
    database.query(query, [idDoProduto]).then(() => {
        res.status(200).send({ mensagem: 'Removido com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.listen(port, () => {
    console.log('API executando')
})