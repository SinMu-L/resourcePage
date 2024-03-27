<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'
const props = defineProps(['name', 'src', 'desc', 'icon'])
function openWindow(src) {
    window.open(src, '_blank')
}

var defaultIcon = computed(() => {
    return props.icon ? props.icon : "defaultIconf.png"
})
</script>

<template>
    <div class=" w-40 md:w-64 h-24  rounded-md p-2  hover:border hover:border-2 border border-[#c6c5f2]  shadow-default_boxshadow md:shadow-none"
        @click="openWindow(src)">
        <div class="h-full w-full flex flex-col  ">
            <div class="flex flex-row h-3/5 mb-1">
                <div class="  w-1/6 h-full mr-6 md:mr-4 ">
                    <Icon :image="defaultIcon"></Icon>
                </div>

                <div class="flex items-center">{{ name }}</div>
            </div>
            <div class="h-2/5  text-[#676e75] text-xs flex justify-start  align-middle">
                {{ desc }}
            </div>
        </div>
    </div>
</template>


<style scoped>
/* card bg-[#fdfdfd] rounded-md w-64 h-24 hover:border-[#c6c5f2]  */
</style>