const express = require('express')

const schema = require('../schema/Character')


//Import do graphqlHTTP que cria um servidor preparado pro GraphQL + HTTP
const graphqlHTTP = require('express-graphql')



//Exporta uma função
module.exports = () => {
  //Cria uma variavel recebendo uma instância do Express
  const app = express()

  //Resolve questões de cross-domain
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  
  //Rota apenas para testar a aplicação
  //app.get('/', (req, res) => res.json({test: 'success'}))
  
  //Registrando a rota '/player'
  app.use(
    '/player',
    graphqlHTTP({
      schema,
      graphiql: true,
    }), //Passando a instancia da função graphqlHTTP
  )

  //Retorna a instancia do Express
  return app
}