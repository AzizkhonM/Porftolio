<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useBlogStore } from "~/stores/blogStore"
import { useBlog } from "../../service/blog";

const blogStore = useBlogStore()

const listUpdate = () => {
  useBlog.list().then((res) => {
    console.log(res);
    blogStore.set_list(res?.data)
  })
}

onMounted(() => {
  listUpdate()
})

</script>


<template>
  <div class="container mx-auto">
    <h1 class="text-[50px] font-medium text-center mb-10" data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="500">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 main" data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="1250">
      <nuxt-link :to="'/blog/' + el._id" v-for="el in blogStore.array" class="border rounded-lg py-4 px-3">
        <div class="w-[100%] md:h-[50vh] h-[25vh] flex justify-center items-center"><img class="image w-[60%] md:h-auto md:w-[90%]" :src="el.image" alt=""></div>
        <div class="text-[35px] mb-6">{{ el.title }}</div>
        <div class="text-[15px] text-right">{{ el.short }}</div>
      </nuxt-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .main{
    margin-bottom: 150px;
  }
  }

  @media screen and (max-width: 550px) {
  .image{
    width: 50%
  }
  }

  
  @media screen and (max-width: 768px) {
  .image{
    width: 40%
  }
  }
</style>