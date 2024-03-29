<script setup lang="ts">
import {onMounted, ref, toRefs} from "vue";
  import {FlexItem, PropertyBoxData} from "../models/models";

  const props = defineProps<{
    data: PropertyBoxData
  }>()

  const { data } = toRefs(props);

  const containerClass = ref("");

  const itemClass = ref("");
  const oneItemClass = ref("");

  function selectItem(item?: FlexItem) {
    if (item === undefined) {
      item = data.value.items[0];
    }

    containerClass.value = data.value.classContainer + " " + (item.classContainer || "");
    itemClass.value = data.value.classItems + " " + (item.classItems || "");
    oneItemClass.value = data.value.classItems + " " + (item.classItems || "") + (item.oneItemClass || "");
  }

  const emit = defineEmits<{
    (e: 'copy', text: string): void;
  }>();

  onMounted(() => {
    selectItem();
  });

  // Idea:
  // Animation with: https://codepen.io/osublake/pen/dMLQJr

</script>

<template>
  <div class="property-box" :class="{ 'flex-container' : data.type === 'container', 'flex-items': data.type === 'items'}">
    <div class="title">{{ data.title }}</div>
    <div class="description">{{ data.description }}</div>
    <div class="showbox stripes" :class="containerClass">
      <div v-for="idx in data.count" :key="idx" class="item" :class="(data.type === 'items' && idx === 3) ? oneItemClass : itemClass"
           :style="(data.disableOrderOn3 && idx === 3) ? '' : ('order: ' + idx)">
        <span>{{ idx }}</span>
      </div>
    </div>
    <ul class="tailwind-list">
      <li class="flex header">
        <div class="w-1/2">Tailwind Class</div>
        <div class="w-1/2">CSS Property</div>
      </li>
      <li v-for="item in data.items" :key="item.tailwind" class="flex data" @mouseenter="selectItem(item)" @mouseleave="selectItem()">
        <div class="w-1/2 tailwindColor cursor-pointer" @click="emit('copy', item.tailwind)">
          {{ item.tailwind }}
          <span v-if="item.tailwindDescription" class="text-gray-400 ml-4">{{ item.tailwindDescription }}</span>
        </div>
        <div class="w-1/2 cssColor cursor-pointer" @click="emit('copy', item.css)">{{ item.css }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .property-box {
    //@apply my-8 px-8 py-6 rounded-lg;
    @apply my-8  rounded-lg;
    &.flex-container {
      //background: linear-gradient(180deg, rgba(189, 104, 255, 0.17) 0%, rgba(196, 196, 196, 0) 100%);
      .showbox .item {
        @apply bg-green-500;
      }
    }
    &.flex-items {
      //background: linear-gradient(180deg, rgba(255, 167, 104, 0.33) 0%, rgba(196, 196, 196, 0) 100%);
      .showbox .item {
        @apply bg-green-300;
        > span {
          @apply text-white;
        }
        &:nth-child(3) {
          @apply bg-green-500;
        }
      }
    }
    .title {
      @apply text-lg font-bold text-black;
    }
    .description {
      @apply mb-2 text-gray-400 text-sm;
    }
    .showbox {
      @apply flex bg-white gap-1 px-4 py-2 rounded-lg mb-4;
      height: 100px;
      .item {
        @apply text-xs rounded shadow flex justify-center items-center;
        > span {
          @apply text-white;
        }
      }
    }
    .tailwind-list {
      li {
        @apply border-b border-gray-300 py-1;
        &:hover {
          @apply bg-gray-100;
        }
        &.header > div {
          @apply text-gray-400 text-xs;
        }
        &.data > div {
          @apply h-1/4;
        }
      }
    }


    .stripes {
      //background-color: #818cf81a;
      @apply bg-gray-50;
      background-image: linear-gradient(
              135deg
          ,#4ade8080 10%,transparent 0,transparent 50%,#4ade8080 0,#4ade8080 60%,transparent 0,transparent);
      background-size: 7.07px 7.07px;
    }
  }
</style>
