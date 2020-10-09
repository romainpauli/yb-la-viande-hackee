<template>
  <div
    class="h-screen flex flex-col align-center justify-center px-5 text-center pb-16"
  >
    <h1 class="font-black text-3xl mb-4 text-primary">Welcome</h1>
    <h1 class="italic text-medium text-base mb-3">Enter your seat number</h1>
    <input
      v-model="seatNumber"
      v-mask="'A## R###-###'"
      class="bg-secondary-dd text-lg py-3 text-center"
      placeholder="A11 R11-111"
    />
    <vinum-btn @click.native="setSeatNumber" :loading="loading" class="mt-12"
      >next</vinum-btn
    >
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      seatNumber: "",
      loading: false
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  },
  methods: {
    setSeatNumber() {
      this.loading = true;
      this.$store.dispatch("setSeatNumber", this.seatNumber).then(() => {
        this.$router.push("/");
      });
      this.loading = false;
    }
  }
};
</script>

<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  margin: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
