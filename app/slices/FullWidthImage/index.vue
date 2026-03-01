<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.FullWidthImageSlice>());

const { isMobile } = useDevice();
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :id="slice.primary.slice_id || ''"
    class="relative"
  >
    <PrismicImage :field="(isMobile && slice.primary.mobile_image.url) ? slice.primary.mobile_image : slice.primary.image" class="w-full -z-[1]" />
    <div class="absolute w-full h-[75%] bottom-0 left-0 flex flex-col items-center justify-center">
      <p class="font-bebas uppercase w-full text-m md:text-l leading-[100%] text-center text-white">{{ slice.primary.title }}</p>
      <p class="font-montserrat w-full text-2xs sm:text-s md:text-m leading-[100%] text-center text-white">{{ slice.primary.subtitle }}</p>
    </div>
  </section>
</template>
