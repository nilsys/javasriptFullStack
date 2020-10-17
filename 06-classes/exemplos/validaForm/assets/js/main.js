class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasValidas();
    if(camposValidos && senhasValidas) {
      alert("Formulário Enviado com sucesso!");
    }
  }

  senhasValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      this.criaErro(senha, "Senhas não são iguais");
      this.criaErro(repetirSenha, "Senhas não são iguais");
      valid = false;
    }

    if(senha.value.length < 3 || senha.value.length > 12) {
      this.criaErro(senha, "Senha precisa conter entre 3 a 12 caracteres")
      valid = false;
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for(let error of this.formulario.querySelectorAll('.error-text')) {
      error.remove();
    }

    //Pegando todos os campos com a class '.validar'
    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;
     
      if(!campo.value) {
        this.criaErro(campo, `Campo "${label}" esta em branco`)
        valid = false;
      }
      //Validando campo CPF
      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false
      }
      //Campo usuário
      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false
      }
    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres');
      valid = false;
    } 
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Usuario precisa conter apenas letras ou números');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value)
    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF invalido!');
      return false;
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();