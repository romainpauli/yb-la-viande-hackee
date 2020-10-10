<template>
  <div class="home p-3 w-full text-center">
    <p class="text-4xl text-center font-black italic text-primary">
      {{ $t("titrehome") }}
    </p>
    <p class="text-xl font-black italic my-4">1. {{ $t("gotogate") }} XX</p>
    <img
      src="http://svg-seat-maps.s3-website-eu-west-1.amazonaws.com/tickets.jpg"
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
        'http://svg-seat-maps.s3-website-eu-west-1.amazonaws.com/' +
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
