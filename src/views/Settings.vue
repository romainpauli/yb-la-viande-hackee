<template>
  <div class="about p-3">
    <p class="text-4xl text-center font-black italic text-primary mb-6">
      {{ $t("settings") }}
    </p>
    <h3 class="my-2">{{$t('noseat')}}</h3>
    <vinum-btn
      class="w-full my-2"
      @click.native="$store.dispatch('setSeatNumber', null)"
      >{{$t('resetseat')}}</vinum-btn
    >
    <h3 class="my-2" >{{$t('changelangue')}}</h3>
    <vinum-btn
      v-if="$i18n.locale != 'de'"
      class="w-full my-2"
      @click.native="$i18n.locale = 'de'"
      >Deutsch</vinum-btn
    >
    <vinum-btn
      v-if="$i18n.locale != 'fr'"
      class="w-full my-2"
      @click.native="$i18n.locale = 'fr'"
      >Francais</vinum-btn
    >
    <vinum-btn
      v-if="$i18n.locale != 'en'"
      class="w-full my-2"
      @click.native="$i18n.locale = 'en'"
      >Englisch</vinum-btn
    >
    <vinum-btn
      v-if="$i18n.locale != 'it'"
      class="w-full my-2"
      @click.native="$i18n.locale = 'it'"
      >Italiano</vinum-btn
    >
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";

export default {
  data() {
    return {
      isLoading: false,
      question: "",
      qui: ""
    };
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
    },
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    }
  }
};
</script>
