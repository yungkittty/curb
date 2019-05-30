const esValidation = {
  username: {
    missing: "Falta el nombre de usuario",
    invalid: "Debe tener entre 4 y 30 caracteres"
  },
  email: {
    missing: "Falta el correo electrónico",
    invalid: "Correo electrónico no válida",
    ACCOUNTS_NOT_FOUND: "No se ha encontrado ninguna cuenta con esta correo electrónico"
  },
  password: {
    missing: "Falta la contraseña",
    invalid: "Debe tener entre 6 y 64 caracteres",
    tooeasy: "Contraseña es demasiado fácil de adivinar",
    dontmatch: "Las contraseñas no coinciden"
  },
  resetPassCode: { ACCOUNTS_CODE_DIFFERENT: "El código de validación no es válido" },
  groupName: {
    missing: "Falta el nombre del grupo",
    invalid: "Debe tener entre 6 y 30 caracteres",
  },
  discoverability: {
    missing: "Debes elegir una opción"
  },
  modules: {
    missing: "Debes elegir al menos un módulo"
  },
  theme: {
    missing: "Debes elegir un tema"
  }
};

export default esValidation;
