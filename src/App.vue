<script setup lang="ts">
import ResourceCard from './components/ResourceCard.vue';
import reources from './reources'
</script>

<template>
  <div class="flex flex-row h-full">
    <div class=" w-1/12 bg-blue-400 hidden">1</div>
    <div class="h-full w-full p-12 bg-main_color flex flex-wrap gap-4 ">
      <ResourceCard v-for="(item,index) in reources.data" :key="index" :name="item['name']" :src="item['src']" :desc="item['desc']"></ResourceCard>

    </div>
  </div>

</template>./reources
