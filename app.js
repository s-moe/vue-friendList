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
app.component("friend-contact", {
  template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show Details' }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234567",
        email: "manuel@manuel.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
