<script setup>
const { params } = useRoute();
const { data } = await useFetch(`
  https://back-portfolio-azizkhon.vercel.app/api/posts/${params.id}`
);
console.log(data.value.text);
</script>

<template>
    <h1 class="text-[50px] font-medium text-center mb-10" data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">Blog</h1>
    <div data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="750" v-html="data.text" class="border rounded-lg p-8 mb-[125px] container mx-auto text-[25px]"></div>
</template>

<style lang="scss" scoped>

</style>