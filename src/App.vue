<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import NavbarVue from "./components/Navbar.vue";
import {getResrouces} from '@/api/api'
import Card from "./components/Card.vue";


var resources = ref()

onBeforeMount(async ()=>{
    resources.value = await getResrouces()
})

</script>

<template>
  <NavbarVue></NavbarVue>
  
  <div class="grid grid-cols-2 m-1 md:grid-cols-6">
      <Card v-for="(resource,index) in resources.data.documents" :key="index" :name="resource.name" :src="resource.src" :icon="resource.icon" :desc="resource.desc"></Card>

  </div>
</template>
