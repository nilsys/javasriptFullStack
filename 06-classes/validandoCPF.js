class ValidaCpf {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, ''),
    });
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);
    this.novoCpf = cpfSemDigitos +  digito1 + digito2;
  }

  geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
    console.log(total);
  }

  // Verificando se é uma sequencia de números iguais
  eSquencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.eSquencia()) return false;
    this.geraNovoCpf();
    console.log(this.novoCpf)
    return this.cpf === this.cpfLimpo;
  }
}

let validaCpf = new ValidaCpf('478.540.218-05');
console.log(validaCpf.valida());