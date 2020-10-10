<template>
  <div class="home p-3 w-full text-center">
    <p class="text-4xl text-center font-black italic text-primary">
      {{ $t("titrehome") }}
    </p>
    <p class="text-xl font-black italic my-4">1. {{ $t("gotogate") }} XX</p>
    <img
      src="https://d2b5gjn60kv9v9.cloudfront.net/tickets.jpg"
      class="object-contain object-left w-full h-48"
    />
    <p class="text-xl font-black italic my-4">
      2. {{ $t("grabsomefood") }} {{ $store.state.block }}
    </p>
    <yb-sector-c />
    <p class="text-xl font-black italic my-4">
      3. {{ $t("takeaseat") }} {{ $store.state.seatNumber }}
      {{ $t("supportteam") }}
    </p>
    <img
      v-if="$store.state.imagerdy"
      :src="
        'https://d2b5gjn60kv9v9.cloudfront.net/' +
          $store.state.seatNumberForApi +
          '.svg'
      "
      class="object-contain object-left w-full h-48 "
    />
  </div>
</template>

<script>
import YbSectorC from "@/components/YbSectorC.vue";

export default {
  name: "Home",
  data() {
    return {
      welcome: ""
    };
  },
  components: {
    YbSectorC
  }
};
</script>
