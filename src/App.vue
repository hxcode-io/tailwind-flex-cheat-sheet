<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {PropertyBoxData} from './models/models'
import PropertyBox from "./components/PropertyBox.vue";

const flexDirection:PropertyBoxData = {
  type: "container",
  title: "Direction",
  count: 3,
  classContainer: "",
  classItems: "w-1/5 h-1/3",
  items: [
    { tailwind: "flex-row", css: "flex-direction: row", classContainer: "flex-row" },
    { tailwind: "flex-row-reverse", css: "flex-direction: row-reverse", classContainer: "flex-row-reverse" },
    { tailwind: "flex-col", css: "flex-direction: column", classContainer: "flex-col" },
    { tailwind: "flex-col-reverse", css: "flex-direction: column-reverse", classContainer: "flex-col-reverse" },
  ]
}
const flexWrap:PropertyBoxData = {
  type: "container",
  title: "Wrap",
  count: 3,
  classContainer: "",
  classItems: "w-2/5 h-1/3",
  items: [
    { tailwind: "flex-wrap", css: "flex-wrap: wrap;", classContainer: "flex-wrap" },
    { tailwind: "flex-wrap-reverse", css: "flex-wrap: wrap-reverse;", classContainer: "flex-wrap-reverse" },
    { tailwind: "flex-nowrap", css: "flex-wrap: nowrap;", classContainer: "flex-nowrap" }
  ]
}
const flexJustify:PropertyBoxData = {
  type: "container",
  title: "Justify Content",
  count: 3,
  classContainer: "",
  classItems: "w-1/5 h-1/3",
  items: [
    { tailwind: "justify-start", css: "justify-content: flex-start", classContainer: "justify-start" },
    { tailwind: "justify-end", css: "justify-content: flex-end", classContainer: "justify-end" },
    { tailwind: "justify-center", css: "justify-content: center", classContainer: "justify-center" },
    { tailwind: "justify-between", css: "justify-content: space-between", classContainer: "justify-between" },
    { tailwind: "justify-around", css: "justify-content: space-around", classContainer: "justify-around" },
    { tailwind: "justify-evenly", css: "justify-content: space-evenly", classContainer: "justify-evenly" },
  ]
}
const flexAlignItems:PropertyBoxData = {
  type: "container",
  title: "Align Items",
  count: 3,
  classContainer: "",
  classItems: "w-1/5",
  items: [
    { tailwind: "items-stretch", css: "align-items: stretch", classContainer: "items-stretch" },
    { tailwind: "items-start", css: "align-items: flex-start", classContainer: "items-start", classItems: "h-1/3" },
    { tailwind: "items-end", css: "align-items: flex-end", classContainer: "items-end", classItems: "h-1/3" },
    { tailwind: "items-center", css: "align-items: center", classContainer: "items-center", classItems: "h-1/3" },
    { tailwind: "items-baseline", css: "align-items: baseline", classContainer: "items-baseline", classItems: "h-1/3" },
  ]
}

const flexAlignContent:PropertyBoxData = {
  type: "container",
  title: "Align Content",
  count: 8,
  classContainer: "flex-row flex-wrap",
  classItems: "w-1/5 h-1/3",
  items: [
    { tailwind: "content-center", css: "align-content: center", classContainer: "content-center" },
    { tailwind: "content-start", css: "align-content: flex-start", classContainer: "content-start" },
    { tailwind: "content-end", css: "align-content: flex-end", classContainer: "content-end" },
    { tailwind: "content-between", css: "align-content: space-between", classContainer: "content-between" },
    { tailwind: "content-around", css: "align-content: space-around", classContainer: "content-around" },
    { tailwind: "content-evenly", css: "align-content: space-evenly", classContainer: "content-evenly" },
  ]
}

// ---------------------------------------------------------------------------------------------------------------------------

const flexOrder:PropertyBoxData = {
  type: "items",
  title: "Order",
  count: 5,
  classContainer: "",
  classItems: "w-1/5 h-1/3",
  items: [
    { tailwind: "order-{1-12}", css: "order: {1-12}", oneItemClass: "order-1" },
    { tailwind: "-order-{1-12}", css: "order: -{1-12}", oneItemClass: "-order-1" },
    { tailwind: "order-first", css: "order: -9999", oneItemClass: "order-first" },
    { tailwind: "order-last", css: "order: 9999", oneItemClass: "order-last" },
  ]
}
const flexGrow:PropertyBoxData = {
  type: "items",
  title: "Grow",
  count: 5,
  classContainer: "",
  classItems: "min-40px h-1/3",
  items: [
    { tailwind: "grow", css: "flex-grow: 1;", oneItemClass: "grow" },
    { tailwind: "grow-0", css: "flex-grow: 0;", oneItemClass: "grow-0" }
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
          <property-box :data="flexGrow" />
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
.min-40px {
  width: 40px;
  min-width: 40px;
}
</style>
