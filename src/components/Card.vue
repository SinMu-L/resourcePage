<script setup>
import { computed } from "vue"

const props = defineProps(['name', 'src', 'desc', 'icon'])
function openWindow(src) {
    window.open(src, '_blank')
}

var defaultIcon = computed(() => {
    return props.icon ? props.icon : "defaultIconf.png"
})

</script>

<template>
  <div class=" p-2  md:p-3 " >
    <div class="grid grid-rows-4 rounded-md  border border-red  px-4 pb-2  md:hover:border md:hover:border-[#3451b2]">
      <div class="row-span-3  grid grid-cols-4" @click="openWindow(src)">
        <div class="col-span-1   flex justify-center items-center">
          <div class="">
            <div class="w-6">
              <img :src="defaultIcon" />
            </div>
          </div>
        </div>
        <div class="col-span-3 flex justify-start items-center px-2 truncate"><p class=" truncate">{{ name }}</p></div>
  
      </div>
      <div class="row-span-1 text-xs text-slate-400 truncate subpixel-antialiased  flex justify-start items-center">
        <p class="truncate">{{ desc }}</p>
      </div>
    </div>
  </div>

</template>