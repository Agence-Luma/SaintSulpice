<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.TitleButtonSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :id="slice.primary.slice_id || ''"
  >
    <div class="w-full h-[300px] bg-black flex" :class="slice.primary.reverse ? 'flex-row-reverse' : 'flex-row'">
      <div class="w-[500px] h-full bg-white flex flex-col items-center justify-center text-lightblue">
        <p class="font-bebas uppercase text-xl leading-[100%] mb-[10px]">{{ slice.primary.title }}</p>
        <PrismicLink :field="slice.primary.link" target="_blank" class="bg-lightblue text-white rounded-full px-[50px] pb-[5px] text-m font-bold" />
      </div>
    </div>
  </section>
</template>
