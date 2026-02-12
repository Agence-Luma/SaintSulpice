<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.FullWidthTextSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="w-full bg-lightblue text-white px-[200px] py-[50px]">
      <p class="font-bebas uppercase text-xl leading-[100%]">{{ slice.primary.title }}</p>
      <div class="font-carmen text-l"><PrismicRichText :field="slice.primary.text" /></div>
    </div>
  </section>
</template>
