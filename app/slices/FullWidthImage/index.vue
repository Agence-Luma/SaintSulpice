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
  >
    <PrismicImage :field="(isMobile && slice.primary.mobile_image.url) ? slice.primary.mobile_image : slice.primary.image" class="w-full" />
  </section>
</template>
