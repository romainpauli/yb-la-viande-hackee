<template>
  <div class="home">
    <p v-for="i in items" :key="i" class="text-4xl" @click="toggleTheme">
      Bienvenue!
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        "romain",
        "florence",
        "romain",
        "florence",
        "romain",
        "florence",
        "romain",
        "florence",
        "romain",
        "florence"
      ],
      laliste: [],
      files: [],
      lastfile: null,
      testmd: ""
    };
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    }
  }
};
</script>
