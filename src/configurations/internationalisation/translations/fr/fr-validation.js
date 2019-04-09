const frValidation = {
  username: {
    missing: "Nom d'utilisateur manquant",
    invalid: "Doit être compris entre 4 à 30 caractères."
  },
  email: {
    missing: "Adresse mail manquante",
    invalid: "Adresse mail invalide"
  },
  password: {
    missing: "Mot de passe manquant",
    invalid: "Doit faire de 6 à 64 caractères",
    tooeasy: "Votre mot de passe est trop facile à deviner",
    dontmatch: "Les mots de passe ne correspondent pas"
  }
};

export default frValidation;
