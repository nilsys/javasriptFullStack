//Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(this.verSaldo());
    return
  }

  const saque = this.saldo -= valor;
  return `Valor retirado da conta R$${saque}`;
}

Conta.prototype.depositar = function(valor) {
  const deposito = this.saldo += valor;
  return `Foi depositado R$${deposito},00`
}

Conta.prototype.verSaldo = function() {
  return `Saldo R$${this.saldo},00`;
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(this.verSaldo());
    return
  }

  const saque = this.saldo -= valor;
  return `Valor retirado da conta R$${saque}`;
}


const conta = new Conta(0001, 19391951, 500);
conta.sacar(250);

const c = new ContaCorrente(0001, 19391951, 500, 100);
console.log(c);
