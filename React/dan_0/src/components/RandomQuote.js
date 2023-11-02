function RandomQuote() {
  const getRandomQuote = require("random-quote-generator5.0");
  const quote = getRandomQuote();

  return <div>{quote}</div>;
}

export default RandomQuote;
