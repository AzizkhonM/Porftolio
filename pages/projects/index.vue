<template>
    <div class="container mx-auto">
        <h1 class="text-[50px] font-medium text-center mb-10" data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">Projects</h1>
<div class="all 2xl:gap-[130px] xl:gap-[100px] lg:gap-[50px]"  data-aos="fade-in" data-aos-duration="500" data-aos-delay="750"><figure class="relative max-w-sm transition-all flex justify-center duration-300 cursor-pointer filter grayscale hover:grayscale-0"  :class="ind == data.length-1 ? 'mb-[170px]' : ''" v-for="(el, ind) in data">
  <a :href="el.link">
    <img class="rounded-lg" :src="el.image" alt="image description">
  </a>
  <figcaption class="absolute px-3 text-lg text-white bottom-3">
      <p class="text-black text-2xl">{{ el.title }}</p>
  </figcaption>
</figure> </div>

    </div>
</template>

<script setup>
const { data } = await useFetch("https://back-portfolio-azizkhon.vercel.app/api/projects");
</script>

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
        gap: 30px
    }
}

</style>