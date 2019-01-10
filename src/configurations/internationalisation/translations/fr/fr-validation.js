const frValidation = {
  username: { missing: "Nom d'utilisateur manquant" },
  email: { missing: "Adresse mail manquante" },
  password: {
    missing: "Mot de passe manquant",
    dontmatch: "Les mots de passe ne correspondent pas"
  }
};

export default frValidation;
