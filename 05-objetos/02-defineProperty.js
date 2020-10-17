function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    value: estoque, // O valor dela
    writable: false, // Permite ser editavel o valor
    configurable: true, // Permite ser redefinivel essas configurações
  });
}

const p1 = new Produto('Coca-Cola', 6.99, 289);
console.log(p1);