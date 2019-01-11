const enSettings = {
  settings: "Settings",
  general: {
    title: "General",
    description: "Language  ·  Logout  ·  Delete account",
    menu: {
      language: {
        title: "Language",
        description: "Display language of the application",
        menu: {
          english: "English",
          french: "French",
          german: "German",
          spanish: "Spanish",
          chinese: "Chinese"
        }
      },
      logout: {
        title: "Logout",
        description: "Disconnect your account from this device"
      },
      deleteAccount: {
        title: "Delete account",
        description: "Permanently delete your account",
        buttonTitle: "Delete my account",
        contentTitle: "Are you sure you want to delete your account?",
        contentDescription1:
          "You’ll never be able to recover your account, and all of your data content will be deleted forever.",
        contentDescription2:
          "If you ever want to join Curb again, you’ll have to create a new account.",
        contentDescription3:
          "If you agree with that, you can confirm this action by clicking the button below:"
      }
    }
  }
};

export default enSettings;
