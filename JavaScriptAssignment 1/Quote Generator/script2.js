const quote = [
  ["1. You only live once, but if you do it right, once is enough.","Mae West"],
    ["2.I am so clever that sometimes I don't understand a single word of what I am saying.","Oscar Wilde"],
    ["3. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
	["4. The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","Albert Einstein"]
	["5.It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
	["6.All men who have turned out worth anything have had the chief hand in their own education.","Walter Scott"],
	["7.Trust yourself. You know more than you think you do.","Benjamin Spock"],
	
  
];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * quote.length);
  document.getElementById("Quote_Show").innerHTML = quote[randomNumber];
}