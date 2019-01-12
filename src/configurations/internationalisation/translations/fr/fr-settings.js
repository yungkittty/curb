const frSettings = {
  settings: "Paramètres",
  general: {
    title: "Général",
    description: "Language  ·  Déconnexion  ·  Supprimer mon compte",
    menu: {
      language: {
        title: "Language",
        description: "Langue d'affichage de l'application",
        menu: {
          en: "Anglais",
          fr: "Français",
          cn: "Chinois"
        }
      },
      logout: {
        title: "Déconnexion",
        description: "Déconnecte votre compte de cet appareil"
      },
      deleteAccount: {
        title: "Supprimer mon compte",
        description: "Supprime définitivement votre compte",
        buttonTitle: "Supprimer mon compte",
        contentTitle: "Voulez-vous vraiment supprimer votre compte ?",
        contentDescription1:
          "Cette action étant irréversible, tout votre contenu publié sera définitivement supprimé.",
        contentDescription2:
          "Si vous souhaitez rejoindre Curb à nouveau, vous aurez à créer un nouveau compte.",
        contentDescription3:
          "Si vous acceptez cela, vous pouvez cliquer sur le bouton ci-dessous :"
      }
    }
  }
};

export default frSettings;
