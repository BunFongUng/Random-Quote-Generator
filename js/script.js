/**
 * creating the list of quote
 */

const quotes = [{
    quote: "Don't cry because it's over, smile because it happened.",
    source: 'Dr. Seuss',
    year: 1991,
    citation: 'speech'
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: 'Oscar Wilde',
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: 'Albert Einstein',
  },
  {
    quote: "A room without books is like a body without a soul.",
    source: 'Marcus Tullius Cicero',
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    source: 'Robert Frost',
  }
];

/**
 * function to handle random quote by passing in list of quote
 * and return the random selected quote
 * @param {Array} quotes 
 * @returns {Object} quote
 */
let getRandomQuote = (quotes) => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

/**
 * function to handle creating html with quote data
 * @param {Object} quote 
 * @returns {String} message
 */
let creatingHTML = (quote) => {
  let message = '';
  message += '<p class="quote">' + quote.quote + '</p>';
  message += '<p class="source">' + quote.source;
  
  if (quote.citation) {
    message += '<span class="citation">' + quote.citation + '</span>';
  } 
  
  if (quote.year) {
    message += '<span class="year">' + quote.year + '</span></p>';
  } 

  message += '</p>';

  return message;
};

/**
 * print the random quote to the web page
 */
let printQuote = () => {
  let quote = getRandomQuote(quotes);
  let message = creatingHTML(quote);
  document.getElementById('quote-box').innerHTML = message;
}

/**
 * get the new random quote each user click on loadQuote button
 */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);