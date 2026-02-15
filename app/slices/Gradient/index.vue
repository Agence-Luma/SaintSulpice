<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.GradientSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :id="slice.primary.slice_id || ''"
  >
    <div class="w-full h-[50px] overflow-hidden">
      <PrismicImage :field="slice.primary.gradient" class="w-full" />
    </div>
  </section>
</template>
