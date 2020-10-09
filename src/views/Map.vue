<template>
  <div class="about p-3">
    <testmap />
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
import testmap from "@/components/testmap.vue";

export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    testmap
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
    }
  }
};
</script>
