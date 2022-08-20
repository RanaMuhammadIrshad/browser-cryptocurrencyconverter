const crypto = document.getElementById('inputGroupSelect01');
const currency = document.getElementById('inputGroupSelect02');
const inputCrypto = document.querySelector('.form-control');
const outputCurrency = document.querySelector('#basic-url');
const button = document.querySelector('.btn-primary');

let fromCrypto = '';
let toCurrency = '';
let cryptoIn = '';
let url = '';

crypto.addEventListener('change', () => {
  fromCrypto = crypto.value;
  console.log(fromCrypto);
  url = `https://api.coinbase.com/v2/prices/${fromCrypto}-${toCurrency}/spot`;
});
currency.addEventListener('change', () => {
  toCurrency = currency.value;

  url = `https://api.coinbase.com/v2/prices/${fromCrypto}-${toCurrency}/spot`;
});

inputCrypto.addEventListener('input', () => {
  cryptoIn = inputCrypto.value;
});

button.addEventListener('click', calculateRate);

async function calculateRate() {
  const response = await fetch(url);
  const data = await response.json();
  const { amount } = data.data;
  outputCurrency.value = amount * cryptoIn;
}
