<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.PeopleListSlice>());

const opened = ref(false);
const openedID = ref(0);

const open = (id = 0) => {
  opened.value = true;
  openedID.value = id;
}

const close = () => {
  opened.value = false;
}
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :id="slice.primary.slice_id || ''"
  >
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
    <div v-for="(people, id) in slice.primary.peoples" @click="open(id)" class="aspect-square overflow-hidden relative">
      <PrismicImage :field="people.image" class="absolute top-1/2 -translate-y-1/2 -z-[1]" />
      <div class="w-full h-full bg-lightblue/30 font-bebas text-white flex items-center justify-center text-m p-[10px] text-center opacity-0 hover:opacity-100 transition hover:cursor-pointer">{{ people.name }}</div>
    </div>
  </div>

  <div v-show="opened" class="w-full h-full z-[10] fixed top-0 left-0 flex items-center justify-center">
    <div class="w-full h-full md:w-[90%] md:h-[80%] bg-lightblue/90 relative p-[10px] md:p-[50px] flex flex-col md:flex-row gap-[50px] items-center overflow-scroll pb-[20px] md:pb-[0px]">
      <div @click="close" class="absolute top-[15px] right-[20px] md:right-[30px] font-montserrat text-l text-white hover:cursor-pointer">X</div>

      <div class="w-[80%] md:w-[40%] aspect-square relative overflow-hidden">
        <PrismicImage :field="slice.primary.peoples[openedID]!.image" class="absolute top-1/2 -translate-y-1/2" />
      </div>

      <div class="w-[90%] md:w-[60%] text-white overflow-scroll">
        <p class="text-l md:text-xl font-bebas">{{ slice.primary.peoples[openedID]!.name }}</p>
        <p class="text-s md:text-m mb-[20px] italic font-bebas">{{ slice.primary.peoples[openedID]!.title }}</p>
        <div class="font-montserrat text-2xs md:text-xs"><PrismicRichText :field="slice.primary.peoples[openedID]!.text" /></div>
      </div>
    </div>
  </div>
  </section>
</template>
