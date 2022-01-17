<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {PropertyBoxData} from './models/models'
import PropertyBox from "./components/PropertyBox.vue";

const flexDirection:PropertyBoxData = {
  type: "container",
  title: "Direction",
  count: 3,
  items: [
    { tailwind: "flex-row", css: "flex-direction: row", classContainer: "flex-row", classItems: "w-1/5 h-1/3" },
    { tailwind: "flex-row-reverse", css: "flex-direction: row-reverse", classContainer: "flex-row-reverse", classItems: "w-1/5 h-1/3" },
    { tailwind: "flex-col", css: "flex-direction: column", classContainer: "flex-col", classItems: "w-1/5 h-1/3" },
    { tailwind: "flex-col-reverse", css: "flex-direction: column-reverse", classContainer: "flex-col-reverse", classItems: "w-1/5 h-1/3" },
  ]
}
const flexWrap:PropertyBoxData = {
  type: "container",
  title: "Wrap",
  count: 3,
  items: [
    { tailwind: "flex-wrap", css: "flex-wrap: wrap;", classContainer: "flex-wrap", classItems: "w-2/5 h-1/3" },
    { tailwind: "flex-wrap-reverse", css: "flex-wrap: wrap-reverse;", classContainer: "flex-wrap-reverse", classItems: "w-2/5 h-1/3" },
    { tailwind: "flex-nowrap", css: "flex-wrap: nowrap;", classContainer: "flex-nowrap", classItems: "w-2/5 h-1/3" }
  ]
}
const flexJustify:PropertyBoxData = {
  type: "container",
  title: "Justify Content",
  count: 3,
  items: [
    { tailwind: "justify-start", css: "justify-content: flex-start", classContainer: "justify-start", classItems: "w-1/5 h-1/3" },
    { tailwind: "justify-end", css: "justify-content: flex-end", classContainer: "justify-end", classItems: "w-1/5 h-1/3" },
    { tailwind: "justify-center", css: "justify-content: center", classContainer: "justify-center", classItems: "w-1/5 h-1/3" },
    { tailwind: "justify-between", css: "justify-content: space-between", classContainer: "justify-between", classItems: "w-1/5 h-1/3" },
    { tailwind: "justify-around", css: "justify-content: space-around", classContainer: "justify-around", classItems: "w-1/5 h-1/3" },
    { tailwind: "justify-evenly", css: "justify-content: space-evenly", classContainer: "justify-evenly", classItems: "w-1/5 h-1/3" },
  ]
}
const flexAlignItems:PropertyBoxData = {
  type: "container",
  title: "Align Items",
  count: 3,
  items: [
    { tailwind: "items-stretch", css: "align-items: stretch", classContainer: "items-stretch", classItems: "w-1/5" },
    { tailwind: "items-start", css: "align-items: flex-start", classContainer: "items-start", classItems: "w-1/5 h-1/3" },
    { tailwind: "items-end", css: "align-items: flex-end", classContainer: "items-end", classItems: "w-1/5 h-1/3" },
    { tailwind: "items-center", css: "align-items: center", classContainer: "items-center", classItems: "w-1/5 h-1/3" },
    { tailwind: "items-baseline", css: "align-items: baseline", classContainer: "items-baseline", classItems: "w-1/5 h-1/3" },
  ]
}

const flexAlignContent:PropertyBoxData = {
  type: "container",
  title: "Align Content",
  count: 8,
  items: [
    { tailwind: "content-center", css: "align-content: center", classContainer: "flex-row flex-wrap content-center", classItems: "w-1/5 h-1/3" },
    { tailwind: "content-start", css: "align-content: flex-start", classContainer: "flex-row flex-wrap content-start", classItems: "w-1/5 h-1/3" },
    { tailwind: "content-end", css: "align-content: flex-end", classContainer: "flex-row flex-wrap content-end", classItems: "w-1/5 h-1/3" },
    { tailwind: "content-between", css: "align-content: space-between", classContainer: "flex-row flex-wrap content-between", classItems: "w-1/5 h-1/3" },
    { tailwind: "content-around", css: "align-content: space-around", classContainer: "flex-row flex-wrap content-around", classItems: "w-1/5 h-1/3" },
    { tailwind: "content-evenly", css: "align-content: space-evenly", classContainer: "flex-row flex-wrap content-evenly", classItems: "w-1/5 h-1/3" },
  ]
}

// ---------------------------------------------------------------------------------------------------------------------------

const flexOrder:PropertyBoxData = {
  type: "items",
  title: "Order",
  count: 5,
  items: [
    { tailwind: "order-1", css: "flex-direction: row", classContainer: "flex-row", classItems: "w-1/5 h-1/3", oneItemClass: "order-1" },
    { tailwind: "order-first", css: "flex-direction: row-reverse", classContainer: "flex-row", classItems: "w-1/5 h-1/3" },
    { tailwind: "order-last", css: "flex-direction: column", classContainer: "flex-row", classItems: "w-1/5 h-1/3" },
  ]
}

</script>

<template>
  <div class="m-14">
    <h1 class="text-2xl font-bold">
      Tailwind v3 Flex Properties
    </h1>
    <div class="grid grid-cols-2 gap-x-24 mt-10">
      <div class="border">
        <h2 class="font-bold bg-gray-600 text-white p-2">Container (Properties for the parent)</h2>
        <div class="grid grid-cols-2 gap-x-12 px-8">
          <property-box :data="flexDirection" />
          <property-box :data="flexWrap" />
          <property-box :data="flexJustify" />
          <property-box :data="flexAlignItems" />
          <property-box :data="flexAlignContent" />
        </div>
      </div>
      <div class="border">
        <h2 class="font-bold bg-gray-600 text-white p-2">Items (Properties for the children)</h2>
        <div class="grid grid-cols-2 gap-x-12 px-8">
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
