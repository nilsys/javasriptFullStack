const hora = 66;
if (hora >= 0 && hora <= 12) {
  console.log(`Bom dia! São ${hora} Hrs`)
} else if (hora > 12 && hora <= 18) {
  console.log('Opa! Boa tarde! Já passou das 12:00hrs');
} else if (hora > 18 && hora <= 23) {
  console.log('Boa noite!');
} else {
  console.log('Erro no sistema!');
}