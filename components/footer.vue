<template>
    <div class="bg-[#252525] w-full py-5 foot p-4">
        <div class="flex justify-between items-center container mx-auto mb-4">
            <ul class="flex lg:gap-[100px] md:gap-[50px] gap-[30px]" style="font-family: 'Oswald', sans-serif;">
                <nuxt-link v-for="(el, ind) in header" class="text-white" :to="el.to"><button class="head--">{{ el.title
                }}</button></nuxt-link>
            </ul>
        </div>
        <nuxt-link class="btn" style="font-family: Oswald;" to="/contact">Contact</nuxt-link>
    </div>
</template>

<script setup>
import { header } from "../constants/header"
</script>

<style lang="scss" scoped>

.btn {
  display: inline-block;
  padding: 10px 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 3px solid red;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  transform: translateX(-100%);
  transition: all .3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(0);
}

@media screen and (min-width: 600px) {
  .foot {
    display: none;
  }
}

</style>