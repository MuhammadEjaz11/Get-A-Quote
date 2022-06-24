let quote = document.getElementById('quote');
let author = document.getElementById('author');
let qbtn = document.getElementById('btn');
qbtn.addEventListener('click', majorF);
let loader = document.getElementById('loader');


function majorF(){
    btnDisabled();
    loaderf();
    getQuote();
}
function btnDisabled(){
    qbtn.disabled = true;
    console.log("asd");
}

function loaderf(){
    loader.style.display = "flex";
    document.getElementById('check').style.display = "none";
}
function loaderf1(){
    loader.style.display = "none";
    document.getElementById('check').style.display = "flex";
}
function getQuote(){
   let newp =  fetch('https://dummyjson.com/quotes/random')
    .then( res => res.json())
    .then(json=>{
        let quotetxt = json.quote;
        let authortxt = json.author;
        quote.innerHTML = `"${quotetxt}"`;
        author.innerHTML = `"${authortxt}"`;
    })
    .then(()=>{qbtn.disabled = false;})
    .finally(loaderf1);
}

