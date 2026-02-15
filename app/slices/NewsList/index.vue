<script setup lang="ts">
import type { Content } from "@prismicio/client";

const props = defineProps(getSliceComponentProps<Content.NewsListSlice>());

const countToShow = ref(6);
const moreToShow = ref(countToShow.value < props.slice.primary.news.length);

const showMore = () => {
  countToShow.value++;
  if (countToShow.value >= props.slice.primary.news.length) moreToShow.value = false;
};

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
    <div class="w-full bg-white px-[20px] md:px-[50px] py-[80px] flex flex-col gap-[50px] items-center justify-center text-lightblue">
      <p class="font-bebas text-xl text-center">{{ slice.primary.title }}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        <div v-for="(news, id) in slice.primary.news.slice(0, countToShow)" @click="open(id)" class="hover:cursor-pointer">
          <div class="w-full overflow-hidden h-[250px] flex items-center justify-center relative mb-[10px]"><PrismicImage :field="news.image" class="w-full h-full object-cover" /></div>
          <p class="font-montserrat text-m font-bold mb-[5px]">{{ news.title }}</p>
          <p class="font-montserrat text-xs">{{ letterDate(news.date) }}</p>
        </div>
      </div>

      <button v-if="moreToShow" @click="showMore" class="bg-lightblue text-white rounded-full px-[50px] py-[5px] text-m font-bold font-montserrat">Afficher plus</button>

      <div v-show="opened" class="w-full h-full z-[10] fixed top-0 left-0 flex items-center justify-center">
        <div class="w-full h-full md:w-[90%] md:h-[80%] bg-white/90 relative p-[10px] md:p-[50px] flex flex-col-reverse md:flex-row gap-[50px] items-center overflow-scroll pb-[20px] md:pb-[0px]">
          <div @click="close" class="absolute top-[15px] right-[20px] md:right-[30px] font-montserrat text-l text-black hover:cursor-pointer">X</div>

          <div class="w-[90%] md:w-[60%] text-black overflow-scroll">
            <p class="text-l md:text-xl font-bebas">{{ slice.primary.news[openedID]!.title }}</p>
            <p class="text-s md:text-m mb-[20px] italic font-bebas">{{ letterDate(slice.primary.news[openedID]!.date) }}</p>
            <div class="font-montserrat text-2xs md:text-xs"><PrismicRichText :field="slice.primary.news[openedID]!.text" /></div>
          </div>

          <div class="w-[80%] md:w-[40%] aspect-square relative overflow-hidden">
            <PrismicImage :field="slice.primary.news[openedID]!.image" class="absolute top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
