<template>
  <div class="home p-3 w-full text-center">
    <p class="text-4xl text-center font-black italic text-primary">
      Welcome
    </p>
    <p class="text-xl font-black italic my-4" >1. Go to gate number A9</p>
    <img src="/test.svg" class="object-contain object-left w-full h-48" />
    <p class="text-xl font-black italic my-4" >2. Grab some food and drinks and go to block {{ $store.state.block }}</p>
    <yb-sector-c />
    <p class="text-xl font-black italic my-4" >3. Take the seat {{ $store.state.seatNumber }} and support your team ! </p>
    <img src="/grey2.svg" class="object-contain object-left w-full h-48 " />
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
  },
};
</script>
