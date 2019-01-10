const frValidation = {
  username: { missing: "Nom d'utilisateur manquant" },
  email: { missing: "Adresse mail manquante" },
  password: {
    missing: "Mot de passe manquant",
    dontmatch: "Les mots de passe ne correspondent pas"
  },
  groupName: {
    missing: "Nom du groupe manquant"
  }
};

export default frValidation;
