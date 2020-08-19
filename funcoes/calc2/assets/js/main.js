function Calculator() {

  this.display = document.querySelector('.display');

  this.capClick = () => {
    document.addEventListener('click', (event) => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumberDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.equal();

    });
  }

  this.addNumberDisplay = (el) => this.display.value += el.innerText; 
  this.clear = () => this.display.value = ''
  this.del = () => this.display.value = this.display.value.slice(0, -1)

  this.equal = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert('Conta invalida!!!');
        return;
      } 

      this.display.value = conta;
    } catch (err) {
      alert('Conta invalida!!!');
      return;
    }
  }
  
  this.start = () => this.capClick();
}

const calc = new Calculator();
calc.start();