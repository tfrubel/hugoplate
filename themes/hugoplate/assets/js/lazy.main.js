// Vuejs Example
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const { createApp } = Vue;
  createApp({
    data() {
      return { opacity: 1 };
    },
    methods: {
      vanish() {
        this.opacity = this.opacity - 0.1;
      },
    },
  }).mount("#testVueApp");
});
