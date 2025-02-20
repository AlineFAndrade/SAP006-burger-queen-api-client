
export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = "Preencha seu nome";
    }
  
    if (!values.email) {
      errors.email = "Preencha o email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Formato do email inválido";
    }

    if (!values.password) {
      errors.password = "Preencha a senha";
    } else if (values.password.length < 6) {
      errors.password = "Insira no mínimo 6 caracteres";
    }

    if(values.role !== "atendente" && values.role !== "cozinheirx") {
      errors.role = "Selecione uma função"
    }
  
    return errors;
  }
