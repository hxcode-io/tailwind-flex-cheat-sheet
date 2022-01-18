<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {PropertyBoxData} from './models/models'
import PropertyBox from "./components/PropertyBox.vue";
import {ref} from "vue";

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
const flexShrink:PropertyBoxData = {
  type: "items",
  title: "Shrink",
  count: 5,
  classContainer: "",
  classItems: "w-1/3 h-1/3",
  items: [
    { tailwind: "shrink", css: "flex-shrink: 1;", oneItemClass: "shrink" },
    { tailwind: "shrink-0", css: "flex-shrink: 0;", oneItemClass: "shrink-0" }
  ]
}

const show = ref(false);

function copyToClipboard(text: string) {
  console.log("copyToClipboard in App")
  navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied")
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
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
          <property-box :data="flexDirection" @copy="show = true"/>
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
          <property-box :data="flexShrink" />
        </div>
      </div>
    </div>
    <div class="mt-20">
      Inspired by an <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">article from CSS-TRICKS</a>
    </div>
  </div>


  <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
<!--                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />-->
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  Copied to clipboard!
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Anyone with a link can now view this file.
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button @click="show = false" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close</span>
<!--                  <XIcon class="h-5 w-5" aria-hidden="true" />-->
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
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
