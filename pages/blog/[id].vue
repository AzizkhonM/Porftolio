<template>
    <h1 class="text-[50px] font-medium text-center mb-10" data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">Blog</h1>
    <div class="mb-[150px] container mx-auto border rounded-lg p-4" v-html="blogStore.one.text"></div>
</template>

<script setup>
import { useBlog } from '../../service/blog';
import { useBlogStore } from '../../stores/blogStore';

const i = useRoute().params.id
console.log(i);

const blogStore = useBlogStore()

const listUpdate = () => {
  useBlog.one(i).then((res) => {
    console.log(res);
    blogStore.set_one(res?.data)
  })
}

console.log(blogStore.one);


onMounted(() => {
  listUpdate()
})

</script>

<style lang="scss" scoped>

</style>