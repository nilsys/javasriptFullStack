const produtos = ['Coca-cola', 'Sukita-Laranja', 'Pepsi', 'Cerveja Skol'];

console.log(produtos);
console.log(`Tamanho do pedido ${produtos.length} itens`);

//Uma forma de adicionar um item ao array
const novaLista = [...produtos, 'Poty'];

//Remove o ultimo item do array
const itemRemovido = novaLista.pop();
console.log(`Item removido: ${itemRemovido}`);

//Outra forma de adicionar um item ao array
produtos.push('Colorado');

console.log(produtos);