<template>
  <div class="about">
    <h1 class="text-4xl text-center font-black italic text-primary">
      Waiting times {{ maxtime }}
    </h1>
    <div
      class="w-full px-3 py-2"
      v-for="elem in waitingTimes"
      :key="elem.label"
    >
      <div
        class="p-3 text-lg border-2 border-primary relative text-textcolor-ad"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-primary"></div>
        <div
          class="absolute top-0 left-0 h-full bg-primary-d"
          :style="'width:' + (elem.time / (maxtime + 1)) * 100 + '%;'"
        ></div>
        <div class="relative z-30 flex justify-between items-center">
          <div class="font-black italic">{{ elem.label }}</div>
          <div class="text-sm italic">{{ elem.time }} min</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waitingTimes: [
        {
          label: "Chips",
          time: 7
        },
        {
          label: "Grill",
          time: 3
        },
        {
          label: "Pizza",
          time: 11
        },
        {
          label: "Wurst",
          time: 5
        },
        {
          label: "Beer",
          time: 1
        },
        {
          label: "Toilettes Messieurs",
          time: 3
        },
        {
          label: "Toilettes Dames",
          time: 7
        }
      ]
    };
  },
  computed: {
    maxtime() {
      const reducer = (accumulator, currentValue) =>
        Math.max(accumulator, currentValue.time);
      return this.waitingTimes.reduce(reducer, 0);
    }
  }
};
</script>
