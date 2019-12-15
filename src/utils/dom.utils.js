
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const getTextContent = (dom = {}, selector = '') => {
    if (dom.window === undefined)
      throw new Error('DOM must contains a window property')
  
    if (selector.length === 0) 
      throw new Error('Selector is required')
  
    return dom.window.document.querySelector(selector).textContent
  }
  
const getDomFromURL = (url = '') => {
  if(url.length === 0) throw new Error('URL is required')
  return JSDOM.fromURL(url)
}

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
    getTextContent,
  }

