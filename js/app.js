const app = Vue.createApp({
  data() {
    return {
      isSubmitted: false,
      choice: null,
    };
  },
  computed: {
    getChoice() {
      console.log(this.choice);
      return this.choice;
    },
  },
}).mount("#app");
