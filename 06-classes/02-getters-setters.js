class Carro {
  constructor(modelo, ano, preco = 1000) {
    this.modelo = modelo;
    this.ano = ano;
    this.preco = preco;
  }

  set setPreco(valor) {
    this.preco = valor;
  }

  get getPreco() {
    return this.preco;
  } 

  pagaIpva() {
    return this.ano >= 2000 ? "Paga IPVA" : "Não Paga!";
  }

}

const fusca = new Carro("fusca", 2000);
fusca.preco = 2309
