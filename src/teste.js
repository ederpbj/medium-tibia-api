const jsdom = require('jsdom')
const {JSDOM} = jsdom

//Importando a função criada
const { getTextContent } = require('./utils/dom.utils')
const url = 'https://www.tibia.com/community/?subtopic=characters&name=hue+proliferator'

/*
JSDOM.fromURL(url)
    .then(dom => console.log(dom))
    .catch(error => console.log(error))
*/

JSDOM.fromURL(url)
    .then(dom => {
        //criar variável com nosso seletor
        const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`

        const playerName = getTextContent(dom, playerNameSelector)
        console.log(playerName)

        //criar variável com o nosso elemento
        //const $playerName = dom.window.document.querySelector(playerNameSelector)

        //console.log('Elemento: ', $playerName)
        //console.log('TextContent: ', $playerName.textContent)

    })