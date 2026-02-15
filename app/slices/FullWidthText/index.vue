<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.FullWidthTextSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :id="slice.primary.slice_id || ''"
  >
    <div class="w-full bg-lightblue text-white px-[20px] md:px-[50px] lg:px-[200px] py-[50px] text-center md:text-left">
      <p class="font-bebas uppercase text-l md:text-xl leading-[100%]">{{ slice.primary.title }}</p>
      <div class="font-montserrat text-m md:text-l"><PrismicRichText :field="slice.primary.text" /></div>
    </div>
  </section>
</template>
