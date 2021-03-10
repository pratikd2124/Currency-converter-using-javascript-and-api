//GET https://api.exchangeratesapi.io/latest?base=USD;

const from_currency = document.getElementById("Currency_selector_1");
const from_ammount = document.getElementById("curr_amount_1");
const to_currency = document.getElementById("Currency_selector_2") ;
const to_ammount = document.getElementById("curr_amount_2");


var d = new Date();
document.querySelector("#dd").innerHTML = d.getUTCDate();
document.querySelector("#mm").innerHTML = d.getMonth();
document.querySelector("#yyyy").innerHTML = d.getFullYear();

//const answer = async () => {}
api = `https://api.exchangeratesapi.io/latest?base=${from_currency.value}`;
fetch(api)
.then(Response => Response.json())
.then((content) => {
    document.querySelector("#according").innerHTML = content.date;
    console.log(content.rates);
});

const base_to_final = (base_curr,to_curr) => {
    base_curr = from_ammount.value;
    to_curr = to_ammount.value;
    
    var result = base_curr*to_curr;

    return result;
}

const cnv = document.querySelector("#convert");

cnv.addEventListener("click", () => {
    var base_curr = from_ammount.value;
    var to_curr = to_ammount.value;
    
    var result = base_curr*to_curr;
    //result = `content.rates.${to_currency.value}`;
    //document.querySelector("#curr_amount_2").innerHTML;
});

