<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {PropertyBoxData} from './models/models'
import PropertyBox from "./components/PropertyBox.vue";
import { ClipboardCheckIcon } from '@heroicons/vue/outline';
import {ref} from "vue";

const flexDirection:PropertyBoxData = {
  type: "container",
  title: "Direction",
  description: "This establishes the main-axis.",
  count: 3,
  classContainer: "",
  classItems: "w-1/5 h-1/3",
  disableOrderOn3: false,
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
  description: "By default, flex items will all try to fit onto one line. You can change that.",
  count: 3,
  classContainer: "",
  classItems: "w-2/5 h-1/3",
  disableOrderOn3: false,
  items: [
    { tailwind: "flex-wrap", css: "flex-wrap: wrap;", classContainer: "flex-wrap" },
    { tailwind: "flex-wrap-reverse", css: "flex-wrap: wrap-reverse;", classContainer: "flex-wrap-reverse" },
    { tailwind: "flex-nowrap", css: "flex-wrap: nowrap;", classContainer: "flex-nowrap" }
  ]
}
const flexJustify:PropertyBoxData = {
  type: "container",
  title: "Justify Content",
  description: "This defines the alignment along the main axis. ",
  count: 3,
  classContainer: "",
  classItems: "w-1/5 h-1/3",
  disableOrderOn3: false,
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
  description: "This defines the default behavior for how flex items are laid out along the cross axis on the current line.",
  count: 3,
  classContainer: "",
  classItems: "w-1/5",
  disableOrderOn3: false,
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
  description: "This aligns a flex container’s lines within when there is extra space in the cross-axis.",
  count: 8,
  classContainer: "flex-row flex-wrap",
  classItems: "w-1/5 h-1/3",
  disableOrderOn3: false,
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
  description: "By default, flex items are laid out in the source order.",
  count: 5,
  classContainer: "",
  classItems: "w-1/5 h-1/3 order-1",
  disableOrderOn3: true,
  items: [
    { tailwind: "order-1", css: "order: 1", oneItemClass: "-order-1" },
    { tailwind: "order-2", css: "order: 2", oneItemClass: "order-1" },
    { tailwind: "order-3", tailwindDescription: "(until 12)", css: "order: 3", oneItemClass: "order-2" },
    { tailwind: "-order-1", css: "order: -1", oneItemClass: "-order-1" },
    { tailwind: "-order-2", css: "order: -2", oneItemClass: "-order-2" },
    { tailwind: "-order-3", tailwindDescription: "(until 12)", css: "order: -3", oneItemClass: "-order-3" },
    { tailwind: "order-first", css: "order: -9999", oneItemClass: "order-first" },
    { tailwind: "order-last", css: "order: 9999", oneItemClass: "order-last" },
  ]
}
const flexGrow:PropertyBoxData = {
  type: "items",
  title: "Grow",
  description: "This defines the ability for a flex item to grow if necessary.",
  count: 5,
  classContainer: "",
  classItems: "min-40px h-1/3",
  disableOrderOn3: false,
  items: [
    { tailwind: "grow", css: "flex-grow: 1;", oneItemClass: "grow" },
    { tailwind: "grow-0", css: "flex-grow: 0;", oneItemClass: "grow-0" }
  ]
}
const flexShrink:PropertyBoxData = {
  type: "items",
  title: "Shrink",
  description: "This defines the ability for a flex item to shrink if necessary.",
  count: 5,
  classContainer: "",
  classItems: "w-1/3 h-1/3",
  disableOrderOn3: false,
  items: [
    { tailwind: "shrink", css: "flex-shrink: 1;", oneItemClass: "shrink" },
    { tailwind: "shrink-0", css: "flex-shrink: 0;", oneItemClass: "shrink-0" }
  ]
}

const show = ref(false);
const copiedText = ref("");
const timeOut = ref(-1);

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
      .then(() => {
        copiedText.value = text;
        show.value = true;
        if (timeOut.value != -1) {
          clearTimeout(timeOut.value);
        }
        timeOut.value = setTimeout(() => {
          show.value = false;
          timeOut.value = -1;
        }, 3000);
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
}
</script>

<template>
  <div class="mx-14 my-8">
<!--    <div class="text-center text-gray-400">Cheatsheet</div>-->
    <h1 class="text-4xl text-center">Flex Properties in TailwindCSS</h1>
    <div class="text-center text-gray-500 mt-2">
      - Move your mouse over the property lines and click to copy -
    </div>
    <div class="flex justify-center text-gray-300 mt-2">
      <svg style="width:48px;height:48px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15A8,8 0 0,0 12,23A8,8 0 0,0 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z" />
      </svg>
    </div>
    <div class="grid grid-cols-2 gap-x-32 -mt-10">
      <div>
        <h2 class="text-gray-400 text-center border-b">Properties for the flex container</h2>
        <div class="grid grid-cols-2 gap-x-6">
          <property-box :data="flexDirection" @copy="copyToClipboard"/>
          <property-box :data="flexWrap" @copy="copyToClipboard" />
          <property-box :data="flexJustify" @copy="copyToClipboard" />
          <property-box :data="flexAlignItems" @copy="copyToClipboard" />
          <property-box :data="flexAlignContent" @copy="copyToClipboard" />
        </div>
      </div>
      <div>
        <h2 class="text-gray-400 text-center border-b">Properties for the flex children</h2>
        <div class="grid grid-cols-2 gap-x-6">
          <property-box :data="flexOrder" @copy="copyToClipboard" />
          <property-box :data="flexGrow" @copy="copyToClipboard" />
          <property-box :data="flexShrink" @copy="copyToClipboard" />
        </div>
      </div>
    </div>
    <div class="mt-20">
      Inspired by an <a target="blank" class="text-blue-700" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">article from CSS-TRICKS</a>.
    </div>
  </div>


  <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="bg-green-500 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <ClipboardCheckIcon class="h-16 w-16 text-white" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 px-4 py-2">
                <p class="text-sm font-medium text-white">
                  Copied to clipboard!
                </p>
                <p class="mt-1 text-sm text-green-200">
                  {{ copiedText }}
                </p>
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
