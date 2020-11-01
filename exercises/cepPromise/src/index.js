import 'regenerator-runtime/runtime'
import cep from 'cep-promise';

const cepLabel = document.querySelector('.cepLabel');
const stateLabel = document.querySelector('.state');
const cityLabel = document.querySelector('.city');
const neighborhoodLabel = document.querySelector('.neighborhood');
const streetLabel = document.querySelector('.street');

async function getCep(cepPromise) {
  try {
    return cep(cepPromise)
      .then(({cep, state, city, neighborhood, street}) => {
        cepLabel.innerHTML = cep,
        stateLabel.innerHTML = state,
        cityLabel.innerHTML = city,
        neighborhoodLabel.innerHTML = neighborhood,
        streetLabel.innerHTML = street
      })
  } catch (error) {
    console.log(error);
  }
}

const inputCep = document.querySelector(".inputCep")

const btn = document.querySelector(".searchCep")
btn.addEventListener("click", () => {
  
  if (inputCep.value.length !== 8) {
    alert("Há quantidade de números digitados não bate");
    inputCep.focus();
  } else {
    getCep(inputCep.value);
    inputCep.value = "";
    inputCep.focus()
  }
})
