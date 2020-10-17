//                    -4             -3            -2          -1
//                     0              1             2           3
const produtos = ['Coca-cola', 'Sukita-Laranja', 'Pepsi', 'Cerveja Skol'];

//primeiro argumento
//produtos.splice(indice, quantidade a ser deletada);
const produtoDel = produtos.splice(-1, 1);
console.log(produtoDel);

//Adicionando um novo item ao array
produtos.splice(-1, 0, 'Sprite', 'Fanta-Laranja');
console.log(produtos, addnewProduct);