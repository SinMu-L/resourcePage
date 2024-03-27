<script setup>
const props = defineProps(['image'])

</script>


<template>
    <div class="w-10 h-10 bg-[#e2e2e3]/[1] flex justify-center items-center">
        <div class=" w-4/5 h-4/5    rounded-md  overflow-hidden saturate-200 ">
            <img :src="image" alt="" class="w-full h-full " />
        </div>

    </div>

</template>