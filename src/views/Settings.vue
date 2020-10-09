<template>
  <div class="about p-3">
    <h1>Say hi to the API</h1>
    <input
      class="my-2 text-lg p-2 bg-secondary border-secondary w-full"
      v-model="question"
      @keydown.enter="helloApi(question)"
    />
    <vinum-btn
      class="w-full"
      :loading="isLoading"
      @click.native="helloApi(question)"
      >say hello</vinum-btn
    >
    <vinum-btn
      class="w-full my-2"
      @click.native="$store.dispatch('setSeatNumber', null)"
      >Réinitialiser mon siège</vinum-btn
    >
    <p>{{ qui }}</p>
    <vinum-btn @click.native="toggleTheme">Changer les couleurs</vinum-btn>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";

export default {
  data() {
    return {
      isLoading: false,
      question: "",
      qui: ""
    };
  },
  methods: {
    helloApi(qui) {
      this.isLoading = true;
      ApiService.hello(qui)
        .then(res => {
          this.qui = res.data;
        })
        .catch(e => {
          alert(e);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    }
  }
};
</script>
