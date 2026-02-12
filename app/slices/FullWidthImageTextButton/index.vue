<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.FullWidthImageTextButtonSlice>());

const { isMobile } = useDevice();
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="relative flex items-center h-[500px] overflow-hidden">
      <div class="text-white w-[370px] flex flex-col items-center ml-[200px]">
        <p class="font-bebas uppercase w-full text-xl leading-[100%]">{{ slice.primary.title }}</p>
        <div class="font-carmen w-full text-l mb-[20px]"><PrismicRichText :field="slice.primary.text" /></div>
        <PrismicLink :field="slice.primary.link" target="_blank" class="border-[2px] rounded-full px-[50px] pb-[5px] text-m font-bold" />
      </div>

      <PrismicImage :field="(isMobile && slice.primary.mobile_image.url) ? slice.primary.mobile_image : slice.primary.image" class="w-full absolute top-1/2 -translate-y-1/2 left-0 -z-[1]" />
    </div>
  </section>
</template>
