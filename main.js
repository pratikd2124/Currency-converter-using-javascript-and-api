//GET https://api.exchangeratesapi.io/latest?base=USD;

var d = new Date();
document.querySelector("#dd").innerHTML = d.getUTCDate();
document.querySelector("#mm").innerHTML = d.getMonth();
document.querySelector("#yyyy").innerHTML = d.getFullYear();

api = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP';
fetch(api);
