<template>
  <svg
    :class="'inline ' + svgClass"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
    style="stroke-width: 2"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g stroke="currentColor" :fill="maincolor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: "icon-base",
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    maincolor: {
      type: String,
      default: "transparent"
    },
    svgClass: {
      type: String,
      default: ""
    }
  }
};
</script>
