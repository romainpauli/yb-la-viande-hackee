<template>
  <div class="about p-3">
    <h1 class="text-3xl text-center font-black italic text-primary">
      Sector {{ $store.state.sector }}
    </h1>
    <yb-sector-c />
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
import YbSectorC from "@/components/YbSectorC.vue";

export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    YbSectorC
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
