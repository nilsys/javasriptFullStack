let umaString = "Um texto";
let outraString = "Outro texto";

console.log(umaString.indexOf('texto')); //Retorna o primeiro item
console.log(umaString.charAt(6));
console.log("Codigo ASCII", umaString.charCodeAt(6));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search());
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.length);