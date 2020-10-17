function Fornecedor(nome, cnpj, setor, whatsapp)  {
  this.nome = nome;
  this.cnpj = cnpj;
  this.setor = setor;
  this.whatsapp = whatsapp;

  this.dadosEmpresa = () => {
    return `Empresa: ${this.nome}, Cnpj: ${this.cnpj}, Setor: ${this.setor}, Whats: ${whatsapp}`;
  }
}

empresa1 = new Fornecedor('Borracharia', 	5338720500010, 'Materiais de Borracha', 16993986525);
console.log(empresa1);
