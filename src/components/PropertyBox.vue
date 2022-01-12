<script setup lang="ts">
  import {ref} from "vue";
  import {PropertyBoxData} from "../models/models";

  defineProps<{
    data: PropertyBoxData
  }>()

  const containerClass = ref("flex-row");

  // Idea:
  // Animation with: https://codepen.io/osublake/pen/dMLQJr

</script>

<template>
  <div class="property-box" :class="{ 'flex-container' : data.type === 'container', 'flex-items': data.type === 'items'}">
    <div class="title">{{ data.title }}</div>
    <div class="showbox" :class="containerClass">
      <div class="item"><span>1</span></div>
      <div class="item"><span>2</span></div>
      <div class="item"><span>3</span></div>
    </div>
    <ul class="tailwind-list">
      <li class="flex header">
        <div class="w-1/2">Tailwind Class</div>
        <div class="w-1/2">CSS Property</div>
      </li>
      <li v-for="item in data.items" :key="item" class="flex data" @mouseenter="containerClass = item.classContainer" @mouseleave="containerClass = ''">
        <div class="w-1/2 tailwindColor">{{ item.tailwind }}</div>
        <div class="w-1/2 cssColor">{{ item.css }}</div>
      </li>
    </ul>
  </div>
</template>

<style>
  .property-box {
    @apply my-8 px-8 py-6 rounded-lg;
  }
  .flex-container {
    background: linear-gradient(180deg, rgba(189, 104, 255, 0.17) 0%, rgba(196, 196, 196, 0) 100%);
  }
  .flex-items {
    background: linear-gradient(180deg, rgba(255, 167, 104, 0.33) 0%, rgba(196, 196, 196, 0) 100%);
  }
  .property-box .title {
    @apply mb-4 text-lg font-bold text-black;
  }

  .showbox {
    @apply flex bg-white gap-1 px-4 py-2 rounded-lg mb-4;
    height: 100px;
  }
  .showbox .item {
    @apply h-full bg-green-500 text-xs rounded shadow flex justify-center items-center;
    width: 40px;
  }
  .showbox .item > span {
    @apply text-white;
  }

  .tailwind-list {
    /*@apply ml-8*/
  }
  .tailwind-list li {
    @apply border-b border-gray-300 py-1
  }
  .tailwind-list li:hover {
    @apply bg-gray-100;
  }
  .tailwind-list li.header > div {
    @apply text-gray-400 text-xs
  }
  .tailwind-list li.data > div {
    /*@apply text-lg*/
  }

</style>
