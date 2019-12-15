//Importando novamente as nossas dependencias do DOM
const {
  getDomFromURL,
  getTextContent
} = require('../utils/dom.utils')

const {
  hasSpecificLength
} = require('../utils/validations.util')

//Aplicando o `async` na função
const getCharacterInfos = async(playerName = '') => {
  if (hasSpecificLength({
      target: playerName,
      length: 0
    })) throw new Error('Player name is required')

  //Criando a nossa URL a partir do nome recebido
  const url = `https://www.tibia.com/community/?subtopic=characters&name=${playerName}`
  //Criando o DOM com o await, para que possamos escrever o código de forma síncrona
  const dom = await getDomFromURL(url)

  //Inserido o código antigo pra dentro da função apenas para ver se tudo continua funcionando.
  const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`
  const playerNameFromDOM = getTextContent(dom, playerNameSelector)
  console.log(playerNameFromDOM)

}

//Apenas testes
getCharacterInfos('hue proliferator')
getCharacterInfos('mad dentist')

module.exports = {
  getCharacterInfos
}