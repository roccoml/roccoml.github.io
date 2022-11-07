const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Rocco';


async function getQuote() {
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    
    console.log(json_response['message']);
    displayQuote(json_response['message']);
}

function displayQuote(x){
document.getElementById('js-quote-text').textContent = x;

}
function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
  
    const twitterButton = document.querySelector('.twitter');
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
  }
  
getQuote(); 

