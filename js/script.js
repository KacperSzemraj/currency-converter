let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.4660;
let rateGBP = 4.8851;
let rateUSD = 3.9806;
let rateCHF = 4.1818;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultElement.innerHTML = `<span class="container__inputAmount">${amount.toFixed(2)} PLN</span> to w przeliczeniu <span class="container__outputAmount">${result.toFixed(2)} ${currency}</span>`;
});