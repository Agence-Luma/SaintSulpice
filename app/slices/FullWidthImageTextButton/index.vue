<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.FullWidthImageTextButtonSlice>());

const { isMobile } = useDevice();
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :id="slice.primary.slice_id || ''"
  >
    <div class="relative flex items-center h-[500px] overflow-hidden">
      <div class="text-white w-[370px] flex flex-col items-center ml-[20px] mr-[20px] md:mr-[0px] md:ml-[50px] lg:ml-[200px]">
        <p class="font-bebas uppercase w-full text-l md:text-xl leading-[100%]">{{ slice.primary.title }}</p>
        <div class="font-montserrat w-full text-m md:text-l mb-[20px]"><PrismicRichText :field="slice.primary.text" /></div>
        <PrismicLink :field="slice.primary.link" target="_blank" class="border-[2px] rounded-full px-[50px] py-[5px] text-m font-bold font-montserrat" />
      </div>

      <div class="w-full h-full absolute top-1/2 -translate-y-1/2 left-0 -z-[1] flex items-center justify-center">
        <PrismicImage :field="(isMobile && slice.primary.mobile_image.url) ? slice.primary.mobile_image : slice.primary.image" class="min-h-full min-w-full object-cover" />
      </div>
    </div>
  </section>
</template>
