<template>
  <button
    class="transition duration-200 uppercase bg-secondary hover:bg-primary text-primary hover:text-secondary py-2 px-4 border border-primary focus:outline-none transition duration-200 ease-in-out"
  >
    <span v-if="!loading"><slot /></span>
    <div v-else class="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </button>
</template>

<script>
export default {
  name: "vinum-btn",
  props: {
    loading: {
      type: Boolean,
      default: false
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
