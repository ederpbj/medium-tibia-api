const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { hasSpecificLength } = require("./validations.utils");

const getTextContent = (dom = {}, selector = '') => {
  if (dom.window === undefined) {
    throw new Error('DOM must contains a window property')
  }
  if (hasSpecificLength({ target: selector, length: 0 })) {
    throw new Error('Selector is required')
  }

  //if (selector.length === 0) throw new Error("Selector is required");

  //selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)'
  //###ERROR
  //return dom.window.document.querySelector(selector).textContent;
  return dom.window.document.querySelector(selector).textContent
}

const getDomFromURL = (url = '') => {
  // Alterado para usar a função validadora de length
  if (hasSpecificLength({ target: url, length: 0 })) {
    throw new Error('URL is required')
  }

  return JSDOM.fromURL(url)
}

  /*Antigo
  if (url.length === 0) throw new Error("URL is required");
  return JSDOM.fromURL(url);
  */


//Código apenas para testar a função rapidamente
/*
const myDom = getDomFromURL(
  `https://www.tibia.com/community/?subtopic=characters&name=hue+proliferator`,
  )
  console.log(myDom)
*/

//getDomFromURL()

module.exports = {
  getDomFromURL,
  getTextContent
};
