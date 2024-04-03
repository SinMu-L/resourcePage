<script setup lang="ts">
import { onBeforeMount, ref } from "vue";


import {getSupabaseResrouces} from '@/api/api'
import Card from "./components/Card.vue";


var resources = ref()

onBeforeMount(async ()=>{
    resources.value= await getSupabaseResrouces()
})

</script>

<template>

  <div class=" sticky top-0 left-0 bg-red-400 w-full h-10 hidden">这里是导航栏</div>
  <div class="grid grid-cols-2 m-1 md:grid-cols-6">
      <Card v-for="(resource,index) in resources" :key="index" :name="resource.name" :src="resource.src" :icon="resource.icon" :desc="resource.desc"></Card>

  </div>
</template>
