<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.BandeauSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="relative flex flex-col items-center justify-center h-[400px] overflow-hidden">
      <div class="text-white w-[90%] lg:w-[80%] flex flex-col items-center">
        <p class="font-bebas uppercase w-full text-l md:text-xl leading-[100%] text-center">{{ slice.primary.title }}</p>
        <div class="font-montserrat w-full text-xs md:text-s lg:text-m mb-[20px] uppercase text-center"><PrismicRichText :field="slice.primary.subtitle" /></div>
        <PrismicLink :field="slice.primary.link" target="_blank" class="border-[2px] border-white rounded-full px-[100px] py-[5px] pt-[8px] text-m font-bebas uppercase hover:text-lightblue hover:bg-white hover:cursor-pointer transition-all" />
        <p class="font-bebas uppercase w-full text-m md:text-l leading-[100%] text-center mt-[50px]">{{ slice.primary.text_1 }}</p>
        <div class="font-montserrat w-full text-xs md:text-s uppercase text-center hover:underline"><PrismicRichText :field="slice.primary.text_2" /></div>
      </div>

      <div class="w-full h-full absolute top-1/2 -translate-y-1/2 left-0 -z-[2] flex items-center justify-center">
        <PrismicImage :field="slice.primary.image" class="min-h-full min-w-full object-cover" />
      </div>
      <div class="w-full h-full absolute top-0 left-0 -z-[1] bg-lightblue/70">
      </div>
    </div>
  </section>
</template>
