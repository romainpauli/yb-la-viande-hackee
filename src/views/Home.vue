<template>
  <div class="home p-3 w-full text-center" >
    <p class="text-4xl text-center font-black italic text-primary">
      Gate
    </p>
    <p>Go to gate number A9</p>
    <p>your seat number is: {{ $store.state.seatNumber }}</p>
    <img src="/test.svg" class="object-contain object-left w-full h-48" />
    <img src="/yellow_stroke.svg" class="object-contain object-left w-full h-48" />
    <img src="/grey.svg" class="object-contain object-left w-full h-48" />
    <img src="/bigger.svg" class="object-contain object-left w-full h-48" />
    <testmap />
  </div>
</template>

<script>
import testmap from '@/components/testmap.vue'

export default {
  name: "Home",
  components: {
    testmap
  },
  data() {
    return {
      welcome: ""
    };
  }
};
</script>
