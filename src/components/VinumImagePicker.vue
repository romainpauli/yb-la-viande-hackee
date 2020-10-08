<template>
  <div class="fixed inset-0 overflow-hidden" style="z-index: 100">
    <div class="absolute inset-0 overflow-hidden">
      <section
        class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16"
      >
        <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div class="w-screen max-w-2xl">
          <div
            class="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll"
          >
            <header class="px-4 sm:px-6">
              <div class="flex items-start justify-between space-x-3">
                <h2 class="text-lg leading-7 font-medium text-gray-900">
                  Panel title
                </h2>
                <div class="h-7 flex items-center">
                  <button
                    aria-label="Close panel"
                    class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                    @click="$emit('close')"
                  >
                    <!-- Heroicon name: x -->
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </header>
            <div class="relative flex-1 px-4 sm:px-6">
              <!-- Replace with your content -->

              <div>
                <div class="flex flex-wrap">
                  <img
                    class="h-24 m-1"
                    v-for="img in imageslist"
                    :src="
                      'https://dae0xb4n97pho.cloudfront.net/100x100/' + img.Key
                    "
                    :key="img.Key"
                    @click="$emit('update', img.Key)"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    id="file"
                    ref="file"
                    accept="image/*"
                    @change="addSelectedFiles($event, nomimage)"
                    @drop.prevent="addDroppedFile($event, nomimage)"
                    @dragover.prevent
                    class="h-32 w-full border-dashed border p-12"
                  />
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AdminService from "@/services/AdminService.js";
import FileService from "@/services/FileService.js";

export default {
  props: {
    debut: String,
    nomimage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      imageslist: []
    };
  },
  methods: {
    async listImages() {
      const token =
        "Bearer " +
        (await this.$Amplify.Auth.currentSession()).getIdToken().getJwtToken();
      AdminService.listImages(token, this.debut)
        .then(res => {
          this.imageslist = res.data.list.Contents;
        })
        .catch(err => {
          alert(err.message);
        })
        .finally(() => {
          this.saveInProgress = false;
        });
    },
    async addDroppedFile(e, fname) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      var lastfile = droppedFiles[0];
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      /*      ([...droppedFiles]).forEach(f => {
        lastfile = f
      });*/
      var filename = Math.floor(Date.now() / 1000) + ".jpeg";
      if (fname !== "") {
        filename = fname;
      }
      const token =
        "Bearer " +
        (await this.$Amplify.Auth.currentSession()).getIdToken().getJwtToken();
      FileService.uploadFile(token, lastfile, this.debut + filename).then(
        res => {
          this.imageslist.push({
            Key: res.config.url.replace("/vinum-images/", "")
          });
        }
      );
    },
    async addSelectedFiles(e, fname) {
      let droppedFiles = e.target.files;
      if (!droppedFiles) return;
      var lastfile = droppedFiles[0];
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      /*      ([...droppedFiles]).forEach(f => {
        lastfile = f
      });*/
      var filename = Math.floor(Date.now() / 1000) + ".jpeg";
      if (fname !== "") {
        filename = fname;
      }
      const token =
        "Bearer " +
        (await this.$Amplify.Auth.currentSession()).getIdToken().getJwtToken();
      FileService.uploadFile(token, lastfile, this.debut + filename).then(
        res => {
          this.imageslist.push({
            Key: res.config.url.replace("/vinum-images/", "")
          });
        }
      );
    }
  },
  mounted() {
    this.listImages();
  }
};
</script>
