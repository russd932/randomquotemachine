let quotesJson;
let prevColor;

async function loadQuotes() {
    let fetchQuotes =  await fetch("https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json");
    quotesJson = await fetchQuotes.json();
    newQuote();

}

loadQuotes()

function newQuote() {
    if(!quotesJson) return;

    
    let randQuoteNum = Math.floor(Math.random() * quotesJson.length);    
    let randColor = generateRandColor();
    while(randColor === prevColor) randColor = generateRandColor();
    prevColor = randColor;
    
    document.body.style.backgroundColor = randColor;

    let quoteText = document.getElementById("quote-text");
    quoteText.innerText = quotesJson[randQuoteNum].quote;

    let quoteAuthor = document.getElementById("quote-author");
    quoteAuthor.innerText = "- " + quotesJson[randQuoteNum].author;
}

function generateRandColor() {
    let colors = ["#f8b195", "#f67280", "#FBBA72", "#519872", "#AFBBF2", "#2F4858", "#3DCCC7", "#E63946", "#C33C54", "#FFD275"];  
    return colors[Math.floor(Math.random() * colors.length)];
}
