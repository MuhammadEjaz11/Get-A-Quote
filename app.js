let quote = document.getElementById('quote');
let author = document.getElementById('author');
let qbtn = document.getElementById('btn');
qbtn.addEventListener('click', majorF);
let loader = document.getElementById('loader');

function majorF(){
    loaderf();
    setTimeout(getQuote, 1000);
    setTimeout(loaderf1, 2000);
}


function loaderf(){
    loader.style.display = "block";
    document.getElementById('check').style.display = "none";
}
function loaderf1(){
    loader.style.display = "none";
    document.getElementById('check').style.display = "block";
}
function getQuote(){
   let newp =  fetch('https://dummyjson.com/quotes/random')
    .then( res => res.json())
    .then(json=>{
        let quotetxt = json.quote;
        let authortxt = json.author;
        quote.innerHTML = `"${quotetxt}"`;
        author.innerHTML = `"${authortxt}"`;
    });
}

