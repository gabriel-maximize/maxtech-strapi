export default {
  config: {
    theme: {
      light: {
        colors: {
          // primary100: "#FF0"
        }
      },
      dark: {
        colors: {
          // primary100: "#E5E5E5"
        }
      }
    },
    notifications: {
      releases: false
    },
    tutorials: false,
    locales: ["pt-BR"],
  },
  bootstrap(app) {
    console.log(app);
  },
};
