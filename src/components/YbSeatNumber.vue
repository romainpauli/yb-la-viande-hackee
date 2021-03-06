<template>
  <div
    class="h-screen flex flex-col align-center justify-center px-5 text-center pb-16"
  >
    <img src="/logo.png" class="object-contain object-center w-full h-24" />
    <h1 class="font-black text-3xl mb-4 text-primary">{{ $t("welcome") }}</h1>
    <h1 class="italic text-medium text-base mb-3">
      {{ $t("enterseatnumber") }}
    </h1>
    <div class="flex flex-row mx-auto">
      <label class="text-xs pt-3 pb-1 text-center w-12 mr-2 italic font-black">
        {{ $t("block") }}
      </label>
      <label class="text-xs pt-3 pb-1 text-center w-12 mr-2 italic font-black">
        {{ $t("reihe") }}
      </label>
      <label class="text-xs pt-3 pb-1 text-center w-16 italic font-black">
        {{ $t("platz") }}
      </label>
    </div>
    <div class="flex flex-row mx-auto">
      <input
        v-model="seatNumberBlock"
        @click="seatNumberBlock = ''"
        @keyup="gonextfield($event, seatNumberBlock, 3)"
        v-mask="['A##', 'A#']"
        class="bg-secondary-dd text-lg py-3 text-center w-12 mr-2"
        placeholder="C7"
      />
      <input
        v-model="seatNumberReihe"
        @click="seatNumberReihe = ''"
        @keyup="gonextfield($event, seatNumberReihe, 2)"
        v-mask="['##', '#']"
        type="number"
        class="bg-secondary-dd text-lg py-3 text-center w-12 mr-2"
        placeholder="8"
      />
      <input
        v-model="seatNumberPlatz"
        @click="seatNumberPlatz = ''"
        v-mask="['###', '##', '#']"
        type="number"
        class="bg-secondary-dd text-lg py-3 text-center w-16"
        placeholder="321"
      />
    </div>
    <div class="mt-4 flex justify-center items-center">
      <span
        @click="toggleHandi"
        role="checkbox"
        tabindex="0"
        aria-checked="false"
        :class="$store.state.handicap ? 'bg-primary' : 'bg-gray-200'"
        class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
      >
        <!-- On: "translate-x-5", Off: "translate-x-0" -->
        <span
          aria-hidden="true"
          :class="$store.state.handicap ? 'translate-x-5 ' : 'translate-x-0'"
          class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
        ></span>
      </span>
      <img src="/handicap.svg" class="ml-3" height="36" width="36" />
    </div>
    <vinum-btn @click.native="setSeatNumber" :loading="loading" class="mt-6">{{
      $t("next")
    }}</vinum-btn>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import ApiService from "@/services/ApiService.js";

export default {
  directives: { mask },
  data() {
    return {
      seatNumberBlock: "",
      seatNumberReihe: "",
      seatNumberPlatz: "",
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
      if (this.seatNumberBlock[1] === "0") {
        this.seatNumberBlock =
          this.seatNumberBlock[0] + this.seatNumberBlock[2];
      }
      ApiService.validateSeat(
        this.seatNumberBlock +
          "-" +
          this.seatNumberReihe +
          "-" +
          this.seatNumberPlatz
      )
        .then(res => {
          if (JSON.parse(res.data.body).result) {
            this.$store.dispatch(
              "setSeatNumber",
              this.seatNumberBlock +
                ".R" +
                this.seatNumberReihe +
                "-" +
                this.seatNumberPlatz
            );
          } else {
            alert("unknown seat");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    toggleHandi() {
      this.$store.dispatch("toggleHandi");
    },
    gonextfield(e, val, lmax) {
      if (val.length > lmax - 1) {
        e.target.nextElementSibling.focus();
      }
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
