<template>
    <div class="container mx-auto grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-10">
        <div class="grid grid-cols-1">
            <div>
                <div style="font-family: 'Oswald', sans-serif" class="text-9xl font-medium mb-10">
                    <h1>Hi! I am</h1>
                    <h1>Azizkhon</h1>
                    <h1>Muzaffarov</h1>
                </div>
                <h1 style="font-family: Oswald;" class="text-3xl">I am Full-Stack Developer and I am discovering new
                    technologies and frameworks for myself</h1>
            </div>
            <div>Salom</div>
        </div>
        <div class="h-[85vh] bg-[#DED1C1] grid iicon">
            <div class="grid grid-cols-2">
                <div v-for="el in langs"
                    class="flex justify-center items-center  hover:opacity-100 opacity-60 duration-300 hover:cursor-pointer">
                    <i :class="el.icon" class="icons-prog text-8xl mx-auto my-auto"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { langs } from '../constants/langs';


</script>

<style scoped>
@media screen and (max-width: 1280px) {
    .iicon {
        display: none;
        width: 0px;
    }
}
</style>