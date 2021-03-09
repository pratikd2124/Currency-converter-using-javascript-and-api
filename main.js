//GET https://api.exchangeratesapi.io/latest?base=USD;

const from_currency = document.getElementById("Currency_selector_1");
const from_ammount = document.getElementById("curr_amount_1");
const to_currency = document.getElementById("Currency_selector_2") ;
const to_ammount = document.getElementById("curr_amount_2");


var d = new Date();
document.querySelector("#dd").innerHTML = d.getUTCDate();
document.querySelector("#mm").innerHTML = d.getMonth();
document.querySelector("#yyyy").innerHTML = d.getFullYear();

api = 'https://api.exchangeratesapi.io/latest?base=';
fetch(api)
.then(Response => Response.json())
.then(content => console.log(content.rates.INR));


const cnv = document.querySelector("#convert");

cnv.addEventListener("click", () =>{
    var base_curr = from_ammount.value;
    var result = to_ammount.value;

});

