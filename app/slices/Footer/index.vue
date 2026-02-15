<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.FooterSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :id="slice.primary.slice_id || ''"
  >
  <div class="w-full h-[600px] md:h-[350px] bg-gradient-to-t from-lightblue/100 from-60% md:from-30% to-lightblue/0 relative">
    <div class="absolute w-[70%] left-[15%] bottom-[50px] flex flex-col items-center gap-[30px]">
      <div class="flex flex-col md:flex-row items-center justify-center w-full">
        <PrismicImage :field="slice.primary.image" class="max-h-[100px] w-auto" />

        <div class="flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-[30px] lg:gap-[80px] text-white font-bebas w-full mx-[0px] md:mx-[50px] my-[30px] md:my-[0px]">
          <div v-for="link in slice.primary.links" class="text-center">
            <PrismicLink :field="link" />
          </div>
        </div>

        <div class="flex items-center justify-between gap-[10px]">
          <div v-for="social in slice.primary.social_medias">
            <PrismicLink :field="social.link">
              <PrismicImage :field="social.image" class="max-h-[50px] max-w-[50px]" />
            </PrismicLink>
          </div>
        </div>
      </div>
      <p class="text-white font-montserrat text-2xs opacity-50 text-center">{{ slice.primary.text }}</p>
    </div>
  </div>
  </section>
</template>
