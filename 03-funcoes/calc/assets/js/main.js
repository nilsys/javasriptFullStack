function criacalculadora() {
  return {
    display: document.querySelector('.display'),
    
    inicia() {
      this.cliquebotoes();
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta)
        if(!conta) {
          alert('Conta invalida!');
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert('Conta Invalida!');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },

    cliquebotoes() {
      document.addEventListener('click', (e) => {
        
        const el = e.target;
        console.log(this)

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

      });
    },
  };
}

const calc = criacalculadora();
calc.inicia();
