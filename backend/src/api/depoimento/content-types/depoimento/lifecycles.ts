export default {
  async afterCreate(event) {
    console.log(event);
    // const { result } = event;

    // try {
    //   await strapi.plugins["email"].services.email.send({
    //     to: "gabriel.melo@maximize.art.br",
    //     from: "manutencao@homolog.mx",
    //     subject: "Hello world",
    //     text: "Hello world",
    //     html: `<h4>Hello world</h4>`,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  },
};
