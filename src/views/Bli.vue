<template>
  <div class="about p-3">
    <h1>Say hi to the API</h1>
    <input class="my-2 text-lg p-2 bg-secondary border-secondary" v-model="question" @keydown.enter="helloApi(question)" />
    <vinum-btn :loading="isLoading" @click="helloApi(question)" >say hello</vinum-btn>
    <p>{{ qui }}</p>
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
        this.isLoading = true
      ApiService.hello(qui).then(res => {
        this.qui = res.data;
      }).catch((e)=>{
          alert(e)
      }).finally(()=> {
          this.isLoading = false
      });
    }
  }
};
</script>
