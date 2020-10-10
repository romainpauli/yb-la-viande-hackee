<template>
  <div class="about px-3">
    <h1 class="text-3xl pt-3 text-center font-black italic text-primary">
      {{ $t("waitingtimes") }}
    </h1>
    <h2 class="text-xl pb-3 text-center font-black italic text-secondary-dd">
      {{ $t("sector") }} C
    </h2>
    <h3 class="text-sm italic font-semibold ">
      {{ $t("catering") }}
    </h3>
    <div class="w-full py-2" v-for="elem in cateringSorted" :key="elem.title">
      <div
        class="p-3 text-lg border-2 border-primary relative text-textcolor-ad"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-primary"></div>
        <div
          class="absolute top-0 left-0 h-full bg-primary-d"
          :style="'width:' + (Math.round(elem.time) / fixedMax) * 100 + '%;'"
        ></div>
        <div class="relative z-30 flex justify-between items-center">
          <icon-base
              width="24"
              height="24"
              icon-name="map"
              maincolor="transparent"
              ><icon-stable v-if="plusmoins(elem.forecast)==='stable'"
            />
            <icon-decrease v-if="plusmoins(elem.forecast)==='decrease'"
            />
            <icon-increase v-if="plusmoins(elem.forecast)==='increase'"
            /></icon-base>
          <div class="font-black italic">{{ $t(elem.title) }}</div>
          <div class="text-sm italic">{{ Math.round(elem.time) }} min</div>
        </div>
      </div>
    </div>
    <h3 class="text-sm italic font-semibold ">
      {{ $t("toilets") }}
    </h3>
    <div class="w-full py-2" v-for="elem in toiletSorted" :key="elem.title">
      <div
        class="p-3 text-lg border-2 border-primary relative text-textcolor-ad"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-primary"></div>
        <div
          class="absolute top-0 left-0 h-full bg-primary-d"
          :style="'width:' + (Math.round(elem.time) / fixedMax) * 100 + '%;'"
        ></div>
        <div class="relative z-30 flex justify-between items-center">
                   <icon-base
              width="24"
              height="24"
              icon-name="map"
              maincolor="transparent"
              ><icon-stable v-if="plusmoins(elem.forecast)==='stable'"
            />
            <icon-decrease v-if="plusmoins(elem.forecast)==='decrease'"
            />
            <icon-increase v-if="plusmoins(elem.forecast)==='increase'"
            /></icon-base>
          <div class="font-black italic">{{ $t(elem.title) }}</div>
          <div class="text-sm italic">{{ Math.round(elem.time) }} min</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      fixedMax: 15,
    };
  },
  methods: {
    plusmoins(a) {
      if (a === 0) {
        return 'stable'
      } else if (a > 0) {
        return 'increase'
      } else {
        return 'decrease'
      }
    }
  },
  computed: {
    maxtime() {
      const reducer = (accumulator, currentValue) =>
        Math.max(accumulator, currentValue.time);
      return this.waitingTimes.reduce(reducer, 0);
    },
    cateringSorted: function() {
      function compare(a, b) {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
      }
      return [...this.qtimes.filter(x => x.type == "c")].sort(compare);
    },
    toiletSorted: function() {
      function compare(a, b) {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
      }
      return [...this.qtimes.filter(x => x.type == "w")].sort(compare);
    },
    ...mapState(["qtimes"])
  }
};
</script>
