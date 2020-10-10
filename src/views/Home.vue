<template>
  <div class="home p-3 w-full text-center">
    <p class="text-4xl text-center font-black italic text-primary">
      {{ $t("titrehome") }}
    </p>
    <p v-if="$store.state.handicap" class="text-xl font-black italic my-1" >{{ $t("handicaphelp") }}</p>
    <p v-else class="text-xl font-black italic mt-4 mb-1">{{ $t("gotogate") }} {{ $store.state.bestdoor[0] }} {{ $t('oulaporte')}} </p>
    <p v-if="! $store.state.handicap" class="italic text-sm mb-2"> {{$t('accesplace')}} {{ $store.state.bestdoor[1] }} {{$t('accesplace2')}}</p>
    <yb-map-outside class="-my-36" />
    <p class="text-xl font-black italic mb-1">
      {{ $t("grabsomefood") }} {{ $store.state.block }}
    </p>
    <p class="italic text-sm mb-4"> {{$t('grabsomefoo')}}</p>
    <yb-sector-c />
    <p class="text-xl font-black italic my-1">
      {{ $t("takeaseat") }} 
    </p>
    <p class="italic text-sm mb-4">
    {{ $t("reihe") }}: {{ $store.state.seatNumber.split('-')[0].split('.')[1].replace("R", "") }},
     {{ $t("platz") }}: {{ $store.state.seatNumber.split('-')[1] }}
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
import YbMapOutside from "@/components/YbMapOutside.vue";

export default {
  name: "Home",
  data() {
    return {
      welcome: ""
    };
  },
  components: {
    YbSectorC,
    YbMapOutside
  }
};
</script>
