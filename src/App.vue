<script setup lang="ts">
import ResourceCard from './components/ResourceCard.vue';
import reources from './reources'
</script>

<template>
  <div class="flex flex-row h-full">
    <div class=" w-1/12 bg-blue-400 hidden">1</div>
    <div class="h-full w-full p-4 bg-main_color ">
      <div class="flex flex-wrap justify-start  gap-4  ">
        <ResourceCard class="" v-for="(item,index) in reources.data" :key="index" :name="item['name']" :src="item['src']" :desc="item['desc']" :icon="item['icon']"></ResourceCard>
      </div>
      

    </div>
  </div>

</template>./reources
