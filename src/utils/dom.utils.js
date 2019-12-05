const getTextContent = (dom = {}, selector = '') => {
    if (dom.window === undefined)
      throw new Error('DOM must contains a window property')
  
    if (selector.length === 0) 
      throw new Error('Selector is required')
  
    return dom.window.document.querySelector(selector).textContent
  }
  
  
  module.exports = {
    getTextContent,
  }