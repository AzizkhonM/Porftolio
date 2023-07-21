<script setup>
const { data } = await useFetch("https://back-portfolio-azizkhon.vercel.app/api/services");
</script>


<template>
    <div class="container mx-auto">
        <h1 class="text-[50px] font-medium text-center mb-10" data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">Services</h1>
        <div class="all 2xl:gap-[50px] xl:gap-[30px] lg:gap-[20px]"  data-aos="fade-in" data-aos-duration="500" data-aos-delay="750">
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow" v-for="(el, ind) in data">
        <img class="rounded-t-lg scale-75" :src="el.image" alt="" />
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ el.service }}</h5>
    </div>
</div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.all{
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
}

@media only screen and (max-width: 1024px) {
    .all{
        grid-template-columns: auto auto;
        gap: 30px
    }
}


@media only screen and (max-width: 600px) {
    .all{
        grid-template-columns: auto;
        gap: 30px;
        margin-bottom: 170px;
    }
}
</style>