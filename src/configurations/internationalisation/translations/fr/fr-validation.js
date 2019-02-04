const frValidation = {
  username: { missing: "Nom d'utilisateur manquant" },
  email: {
    missing: "Adresse mail manquante",
    invalid: "Adresse mail invalide"
  },
  password: {
    missing: "Mot de passe manquant",
    dontmatch: "Les mots de passe ne correspondent pas"
  },
  groupName: {
    missing: "Nom du groupe manquant"
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
