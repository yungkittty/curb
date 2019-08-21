const frValidation = {
  username: {
    missing: "Nom d'utilisateur manquant",
    invalid: "Doit être compris entre 4 à 30 caractères"
  },
  email: {
    missing: "Adresse mail manquante",
    invalid: "Adresse mail invalide",
    ACCOUNTS_NOT_FOUND: "Aucun compte trouvé avec cette adresse mail"
  },
  password: {
    missing: "Mot de passe manquant",
    invalid: "Doit faire de 6 à 64 caractères",
    tooeasy: "Votre mot de passe est trop facile à deviner",
    dontmatch: "Les mots de passe ne correspondent pas"
  },
  resetPassCode: { ACCOUNTS_CODE_DIFFERENT: "Le code de validation est invalide" },
  groupName: {
    missing: "Nom du groupe manquant",
    invalid: "Doit être compris entre 4 à 30 caractères"
  },
  groupCategory: {
    missing: "Catégorie manquante"
  },
  discoverability: {
    missing: "Vous devez choisir une option"
  },
  modules: {
    missing: "Vous devez choisir au moins un module"
  },
  theme: {
    missing: "Vous devez choisir un thème"
  }
};

export default frValidation;
