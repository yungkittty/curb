const frValidation = {
  username: {
    missing: "Nom d'utilisateur manquant",
    invalid: "Format incorrect"
  },
  email: {
    missing: "Adresse mail manquante",
    invalid: "Adresse mail invalide"
  },
  password: {
    missing: "Mot de passe manquant",
    invalid: "Doit inclure 1 lettre, 1 chiffre, et faire de 6 à 32 caractères",
    dontmatch: "Les mots de passe ne correspondent pas"
  }
};

export default frValidation;
