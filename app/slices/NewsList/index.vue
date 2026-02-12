<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.NewsListSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="w-full bg-white p-[50px] flex flex-col gap-[50px] items-center justify-center text-lightblue">
      <p class="font-bebas text-xl">{{ slice.primary.title }}</p>

      <div class="grid grid-cols-3 gap-[20px]">
        <div v-for="(news, id) in slice.primary.news">
          <div class="w-full overflow-hidden h-[200px] flex items-center justify-center relative mb-[10px]"><PrismicImage :field="news.image" class="w-full h-full object-cover" /></div>
          <p class="font-carmen text-m font-bold">{{ news.title }}</p>
          <p class="font-carmen text-xs">{{ letterDate(news.date) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
