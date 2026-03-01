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
    <div class="w-full bg-black flex" :class="slice.primary.reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'">
      <div class="w-full md:w-[400px] lg:w-[500px] h-[300px] bg-white flex flex-col items-center justify-center text-lightblue">
        <p class="font-bebas uppercase text-xl leading-[100%] mb-[10px]">{{ slice.primary.title }}</p>
        <PrismicLink :field="slice.primary.link" target="_blank" class="bg-lightblue text-white rounded-full px-[50px] py-[5px] text-m font-bold font-montserrat border-[2px] border-lightblue hover:text-lightblue hover:bg-white hover:cursor-pointer transition-all" />
      </div>
      <div class="w-full md:w-[calc(100%-400px)] lg:w-[calc(100%-500px)] h-[300px] flex items-center justify-center overflow-hidden" v-if="slice.primary.image.url">
        <PrismicImage :field="slice.primary.image" class="min-h-full min-w-full object-cover" />
      </div>
    </div>
  </section>
</template>
