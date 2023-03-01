export default ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "no-reply@strapi.io",
        defaultReplyTo: "no-reply@strapi.io",
        testAddress: "noreply@gabrielmelo.com",
      },
    },
  },
});
