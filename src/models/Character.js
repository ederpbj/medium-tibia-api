//const { getTextContent } = require("../utils/xx - dom.utils");
const { tibiaTime2Moment } = require('../utils/conversors.utils')

class Character {
  //Criando um construtor que recebera um dom
  constructor (table) {
    //atribui uma variável interna para o objeto chamado '_dom' com o DOM recebido
    this._table = table
  }

  //Se player inexistente
  playerDoesntExists () {
    if (this._table.name === undefined) {
      console.log("table.name ######>",this._table.name)
      console.log("table ######>",this._table)
      return "Player doesn't exists"
    }
  }

  //Se player inexistente - Antigo
  /* 
  playerDoesntExists(){
    const selector = `#characters > div.Border_2 > div > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td`

    const title = getTextContent(this._dom, selector)
    console.log("####passou")
    //regex responsável por fazer um teste na string e verificar se contém as palavras 'not find' :
    return /not find/gi.test(title) 
    */
   
   //}

    /*
    Caso você não tenha lido meus artigos sobre regex, todas as regex 
    em JavaScript (e em outras linguagens também) possuem um método de 
    teste, logo, nossa Regex /not find/ , que possui as flags g que significa 
    global (não parar de validar na primeira ocorrência) e i que indica que não 
    queremos fazer distinção de minusculo e maiúsculo. Caso o mesmo contenha as palavras, 
    retornará true, caso contrário, false .
    */


/* Antigos
  // Getter do Name
  get name() {
    //Migrando o código do service para cá
    //const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`
    const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`;
    //Passando para o getText o DOM que temos guardado
    const name = getTextContent(this._dom, playerNameSelector);
    //retornando o texto recebido
    return name;
  }
  
  get sex() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
  get vocation() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
  get level() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
  get achievementPoints() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
  get world() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(8) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
  get residence() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(9) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
  get lastLogin() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(10) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
  get accountStatus() {
    const selector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2)`;
    return getTextContent(this._dom, selector);
  }
 */

  get allCharacterInformation () {
    return {
      name: this._table.name,
      formerNames: this._table.formernames,
      sex: this._table.sex,
      vocation: this._table.vocation,
      level: this._table.level,
      achievementPoints: this._table.achievementpoints,
      world: this._table.world,
      formerWorld: this._table.formerworld,
      residence: this._table.residence,
      house: this._table.house,
      guildMembership: this._table.guildmembership,
      lastLogin: tibiaTime2Moment(this._table.lastlogin).format(),
      comment: this._table.comment,
      accountStatus: this._table.accountstatus
    }
  }
}

module.exports = Character
