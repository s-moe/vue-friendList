const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234567",
          email: "manuel@manuel.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "01234567",
          email: "julie@manuel.com",
        },
      ],
    };
  },
});
app.mount("#app");
