<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {PropertyBoxData} from './models/models'
import PropertyBox from "./components/PropertyBox.vue";

const flexDirection:PropertyBoxData = {
  type: "container",
  title: "Direction",
  items: [
    { tailwind: "flex-row", css: "flex-direction: row", classContainer: "flex-row", classItems: "w-1/5" },
    { tailwind: "flex-row-reverse", css: "flex-direction: row-reverse", classContainer: "flex-row-reverse", classItems: "w-1/5" },
    { tailwind: "flex-col", css: "flex-direction: column", classContainer: "flex-col", classItems: "w-1/5" },
    { tailwind: "flex-col-reverse", css: "flex-direction: column-reverse", classContainer: "flex-col-reverse", classItems: "w-1/5" },
  ]
}
const flexWrap:PropertyBoxData = {
  type: "container",
  title: "Wrap",
  items: [
    { tailwind: "flex-wrap", css: "flex-wrap: wrap;", classContainer: "flex-wrap", classItems: "w-2/5 h-1/2" },
    { tailwind: "flex-wrap-reverse", css: "flex-wrap: wrap-reverse;", classContainer: "flex-wrap-reverse", classItems: "w-2/5 h-1/2" },
    { tailwind: "flex-nowrap", css: "flex-wrap: nowrap;", classContainer: "flex-nowrap", classItems: "w-2/5 h-1/2" }
  ]
}
const flexOrder:PropertyBoxData = {
  type: "items",
  title: "Order",
  items: [
    { tailwind: "flex-row", css: "flex-direction: row", classContainer: "flex-row", classItems: "" },
    { tailwind: "flex-row-reverse", css: "flex-direction: row-reverse", classContainer: "flex-row", classItems: "" },
    { tailwind: "flex-col", css: "flex-direction: column", classContainer: "flex-row", classItems: "" },
    { tailwind: "flex-col-reverse", css: "flex-direction: column-reverse", classContainer: "flex-row", classItems: "" },
  ]
}

</script>

<template>
  <div class="m-14">
    <h1 class="text-2xl font-bold">
      Tailwind v3 Flex Properties
    </h1>
    <div class="grid grid-cols-2 gap-x-24 mt-10">
      <div>
        <h2 class="font-bold">Container</h2>
        <div class="grid grid-cols-2 gap-x-12">
          <property-box :data="flexDirection" />
          <property-box :data="flexWrap" />
          <property-box :data="flexDirection" />
          <property-box :data="flexDirection" />
          <property-box :data="flexDirection" />
        </div>
      </div>
      <div>
        <h2 class="font-bold">Items</h2>
        <div class="grid grid-cols-2 gap-x-12">
          <property-box :data="flexOrder" />
          <property-box :data="flexOrder" />
        </div>
      </div>
    </div>
    <div class="mt-20">
      Inspired by an <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">article from CSS-TRICKS</a>
    </div>
  </div>
</template>


<style>
a {
  @apply text-blue-400 hover:underline
}
.tailwindColor {
  color: #0EA5E9;
}
.cssColor {
  color: #E546AF;
}
</style>
