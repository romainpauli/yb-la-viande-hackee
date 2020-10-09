<template>
  <div class="home p-3">
    <p class="text-4xl" @click="toggleTheme">
      {{ welcome }}
    </p>
    <p>your seat number is: {{ $store.state.seatNumber }}</p>
    <vinum-btn @click.native="toggleTheme">Changer les couleurs</vinum-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      welcome: "Bienvenue"
    };
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    }
  }
};
</script>
