const logger = require('winston')

//Importando novamente as nossas dependencias do DOM
const {
  getDomFromURL
  //getTextContent
} = require("../utils/xx - dom.utils");
const { hasSpecificLength } = require("../utils/validations.utils");
//Importando o Modelo Character
const Character = require("../models/Character");
const { getTableFromURL } = require('../utils/tabletojson.utils')

//Aplicando o `async` na função
const getCharacterInfos = (playerName = '') =>
  //retornando uma promise async
  new Promise(async (resolve, reject) => {
    const playerNameWasNotSent = hasSpecificLength({
      target: playerName,
      length: 0,
    })

    if (playerNameWasNotSent) {
      reject(new Error('Player name is required'))
    }

    /* 
      Como estamos usando o await, podemos usar o try/catch para capturar qualquer eventual
      erro que possa ocorrer, e, caso aconteça, rejeitamos ele na promise.
    */
    try {
      //Criando a nossa URL a partir do nome recebido
      const url = `https://www.tibia.com/community/?subtopic=characters&name=${playerName}`;
      //Criando o DOM com o await, para que possamos escrever o código de forma síncrona
      console.log("Nome do player ###>",playerName)
      const table = await getTableFromURL(url)
      //console.log("table do player ###>",this._table.name)
      //Criando uma nova instância de Character, passando o dom recebido
      const character = new Character(table)
      //Se for  'true', ou seja, se o player não existir...
      
      if (character.playerDoesntExists()) {
        logger.log('info', "Player doesn't exists")
        reject("Player doesn't exists")
      }

      //if (character.playerDoesntExists()) {
        //logger.log('info', "Player doesn't exists")
        //reject("Player doesn't exists")
        //Rejeita um error, passando a mensagem de player inexistente
        //console.trace(`Player doesn't exists`);
        //reject(Error(`Player doesn't exists`));
      //}
      //Caso contrário resolve (retorna) as informações do player
      //resolve(character.allCharacterInformation)

      //Printando o name
      //console.log(character.name)
      //console.log(character.allCharacterInformation)
      //return character.allCharacterInformation;

      //Inserido o código antigo pra dentro da função apenas para ver se tudo continua funcionando.
      /*
    const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`
    const playerNameFromDOM = getTextContent(dom, playerNameSelector)
    console.log(playerNameFromDOM)
    */
    } catch (error) {
      //Rejeita qualquer erro
      logger.log('error', error)
      //console.trace(error)
      reject(error)
    }
  })
//};

//Apenas testes
//getCharacterInfos('hue proliferator')
//getCharacterInfos('mad dentist')

module.exports = {
  getCharacterInfos,
}
