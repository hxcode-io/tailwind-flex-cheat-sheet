<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import PropertyBox from './components/PropertyBox.vue'

const flexDirection = {
  title: "Direction",
  items: [
    { tailwind: "flex-row", css: "flex-direction: row" },
    { tailwind: "flex-row-reverse", css: "flex-direction: row-reverse" },
    { tailwind: "flex-col", css: "flex-direction: column" },
    { tailwind: "flex-col-reverse", css: "flex-direction: column-reverse" },
  ]
}

</script>

<template>
  <div class="container mx-auto mt-14">
    <h1 class="text-2xl font-bold">
      Tailwind v3 Flex Properties
    </h1>
    <div class="grid grid-cols-2 gap-x-24 mt-10">
      <div>
        <h2 class="font-bold">Container</h2>
<!--        <property-box property="display" type="container" -->
<!--            :items="['flex']"-->
<!--        >-->
<!--        </property-box>-->
        <property-box :data="flexDirection" type="container" />
        <property-box :data="flexDirection" type="container" />
<!--        <property-box property="flex-wrap" type="container"-->
<!--            :items="['flex-wrap','flex-wrap-reverse','flex-nowrap']">-->
<!--        </property-box>-->
      </div>
      <div>
        <h2 class="font-bold">Items</h2>
<!--        <property-box property="order" type="items"-->
<!--            :items="['order1 - order12','order-none','order-first','order-last']">-->
<!--        </property-box>-->
<!--        <property-box property="flex-grow" type="items"-->
<!--            :items="['grow','grow-0']">-->
<!--        </property-box>-->
<!--        <property-box property="flex-shrink" type="items"-->
<!--            :items="['shrink','shrink-0']">-->
<!--        </property-box>-->
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
