const app = require('./src/app');

const PORT = 4000;

app.get('/', function(req, res) {
    res.send({
        message: 'primeiro get'
    })
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
