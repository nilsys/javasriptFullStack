class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.events();
  }

  events() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validInputs = this.validInputs();
    const validPassword = this.validPassword();
    if(validInputs && validPassword) {
      alert("Formulário Enviado com sucesso!");
    }
  }

  validPassword() {
    let valid = true;

    const password = this.formulario.querySelector('.senha');
    const repeatPassowrd = this.formulario.querySelector('.repetir-senha');

    if(password.value !== repeatPassword.value) {
      this.setError(password, "Senhas não são iguais");
      this.setError(repeatPassword, "Senhas não são iguais");
      valid = false;
    }

    if(password.value.length < 3 || password.value.length > 12) {
      this.setError(password, "Senha precisa conter entre 3 a 12 caracteres")
      valid = false;
    }

    return valid;
  }

  validInputs() {
    let valid = true;

    for(let error of this.formulario.querySelectorAll('.error-text')) {
      error.remove();
    }

    //Pegando todos os campos com a class '.validar'
    for (let input of this.formulario.querySelectorAll('.validar')) {
      const label = input.previousElementSibling.innerText;
     
      if(!input.value) {
        this.setError(input, `Campo "${label}" esta em branco`)
        valid = false;
      }
      //Validando input CPF
      if(input.classList.contains('cpf')) {
        if(!this.validaCPF(input)) valid = false
      }
      //Campo usuário
      if(input.classList.contains('usuario')) {
        if(!this.validUserName(input)) valid = false
      }
    }

    return valid;
  }

  validUserName(input) {
    const user = input.value;
    let valid = true;

    if(user.length < 3 || user.length > 12) {
      this.setError(input, 'user precisa ter entre 3 e 12 caracteres');
      valid = false;
    } 
    if(!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.setError(input, 'user precisa conter apenas letras ou números');
      valid = false;
    }

    return valid;
  }

  validaCPF(input) {
    const cpf = new ValidaCPF(input.value)
    if(!cpf.valida()) {
      this.setError(input, 'CPF invalido!');
      return false;
    }
    return true;
  }

  setError(input, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    input.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();