<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ qui }}</p>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";

export default {
  data() {
    return {
      qui: ""
    };
  },
  mounted() {
    ApiService.hello("Basti").then(res => {
      this.qui = res.data;
    });
  }
};
</script>
