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
  >
  <div class="grid grid-cols-7">
    <div v-for="(people, id) in slice.primary.peoples" @click="open(id)" class="aspect-square overflow-hidden relative">
      <PrismicImage :field="people.image" class="absolute top-1/2 -translate-y-1/2 -z-[1]" />
      <div class="w-full h-full bg-lightblue/30 font-bebas text-white flex items-center justify-center text-m p-[10px] text-center opacity-0 hover:opacity-100 transition hover:cursor-pointer">{{ people.name }}</div>
    </div>
  </div>

  <div v-show="opened" class="w-full h-full z-[10] fixed top-0 left-0 flex items-center justify-center">
    <div class="w-[90%] h-[80%] bg-lightblue/90 relative p-[50px] flex gap-[50px] items-center">
      <div @click="close" class="absolute top-[15px] right-[30px] font-carmen text-l text-white hover:cursor-pointer">X</div>

      <div class="w-[40%] aspect-square relative overflow-hidden">
        <PrismicImage :field="slice.primary.peoples[openedID]!.image" class="absolute top-1/2 -translate-y-1/2" />
      </div>

      <div class="w-[60%] text-white">
        <p class="text-xl font-bebas">{{ slice.primary.peoples[openedID]!.name }}</p>
        <p class="text-m mb-[20px] -mt-[10px] italic font-bebas">{{ slice.primary.peoples[openedID]!.title }}</p>
        <div class="font-carmen text-xs"><PrismicRichText :field="slice.primary.peoples[openedID]!.text" /></div>
      </div>
    </div>
  </div>
  </section>
</template>
