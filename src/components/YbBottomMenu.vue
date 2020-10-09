<template>
  <div class="fixed bottom-0 bg-primary w-screen text-xs">
    <div class="max-w-screen-xl mx-auto py-0 px-0 text-textcolor-ad">
      <ul class="flex">
        <router-link
          to="/"
          exact-active-class="text-primary bg-primary-d"
          class="text-center block flex-1 pb-6 pt-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="home"
              maincolor="transparent"
              ><icon-home
            /></icon-base>
          </li>
        </router-link>
        <router-link
          to="/about"
          active-class="text-primary bg-primary-d"
          class="text-center block flex-1 pb-6 pt-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="list"
              maincolor="transparent"
              ><icon-list
            /></icon-base></li
        ></router-link>
        <router-link
          to="/map"
          active-class="text-primary bg-primary-d"
          class="text-center block flex-1 pb-6 pt-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="map"
              maincolor="transparent"
              ><icon-map
            /></icon-base>
          </li>
        </router-link>
        <router-link
          to="/settings"
          active-class="text-primary bg-primary-d"
          class="text-center block flex-1 pb-6 pt-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="settings"
              maincolor="transparent"
              ><icon-settings
            /></icon-base></li
        ></router-link>
      </ul>
    </div>
  </div>
</template>
