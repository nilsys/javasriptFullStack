function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    configurable: true, // Permite ser redefinivel essas configurações
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if(typeof valor !== 'number') {
        throw new TypeError('O valor passado não é um número');
      }
    }
  });
}

const p1 = new Produto('Coca-Cola', 6.99, 240);
console.log(p1.estoque);