fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=966c3ee06e7b4b7e9a4f9526a37d76a1")
.then((result) => {
    let data = result.json();
    return data;
}).then((current) => {
    let amount = document.querySelector(".amount");
    let egyPrice = document.querySelector(".egy span");
    let euroPrice = document.querySelector(".euro span");

    egyPrice.innerHTML = Math.floor(amount.innerHTML * current.rates["EGP"]);
    euroPrice.innerHTML = Math.floor(amount.innerHTML * current.rates["EUR"]);
});