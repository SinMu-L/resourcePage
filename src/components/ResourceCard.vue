<script setup>
import {   computed } from 'vue'
const props = defineProps(['name','src','desc','icon'])
function openWindow(src){
    window.open(src,'_blank')
}

var defaultIcon = computed(() => {
    return props.icon ? props.icon : "favicon.ico"
})
</script>

<template>
    <div class="  w-64 h-24 bg-white rounded-md p-4  hover:border border-[#c6c5f2] " @click="openWindow(src)">
        <div class="h-full w-full flex flex-col  ">
            <div class="flex flex-row h-3/5">
                <div class=" bg-[#e2e2e3] w-1/6 h-full flex justify-center items-center p-2 rounded-md">
                    <img :src="defaultIcon" alt="" srcset="" class=" object-contain">
                </div>
                <div class="flex items-center pl-4">{{ name }}</div>
            </div>
            <div class="h-2/5  text-[#676e75] text-xs flex justify-start items-center align-middle">
                {{ desc }}
            </div>
        </div>
    </div>
</template>


<style scoped>
/* card bg-[#fdfdfd] rounded-md w-64 h-24 hover:border-[#c6c5f2]  */
</style>