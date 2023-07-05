<script setup>
import { header } from "../constants/header"
</script>


<template>
  <div class="bg-[#252525] w-full py-5">
    <div class="big container mx-auto">
      <nuxt-link to="/" class="text-white text-6xl font-bold"
        style="font-family: 'El Messiri', sans-serif;">عزيز</nuxt-link>
      <ul class="flex lg:gap-[100px] md:gap-[50px] gap-[30px]" style="font-family: 'Oswald', sans-serif;">
        <nuxt-link v-for="(el, ind) in header" class="text-white" :to="el.to"><button class="head--">{{ el.title
        }}</button></nuxt-link>
      </ul>
      <nuxt-link class="btn" style="font-family: Oswald;" to="/contact">Contact</nuxt-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.head-- {
  color: white;
  text-decoration: none;
  font-size: 25px;
  border: none;
  background: none;
  font-weight: 500;
}

.head--::before {
  margin-left: auto;
}

.head--::after,
.head--::before {
  content: '';
  width: 0%;
  height: 2px;
  background: red;
  display: block;
  transition: 0.5s;
}

.head--:hover::after,
.head--:hover::before {
  width: 100%;
}

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


@media screen and (max-width: 1024px) {
  .head-- {
    font-size: 20px;
  }
}

@media screen and (max-width: 600px) {
  ul{
    display: none;
  }

  .btn{
    display: none;
  }

  .big{
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: 600px) {
  .big{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>