<template>

    <div class="container mx-auto grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-10">
        <div class="grid grid-cols-1">
            <div>
                <div class="name md:text-9xl text-8xl font-medium mb-10" data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="500">
                    <h1>Hi! I am</h1>
                    <h1>Azizkhon</h1>
                    <h1>Muzaffarov</h1>
                </div>
                <h1 class="about text-3xl mb-10" data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="750">I am a Full-Stack Developer and I am discovering new
                    technologies and frameworks for myself</h1>
                <div  data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="1000" class="btns flex justify-start gap-[80px] mb-[100px]">
                    <a href="https://www.instagram.com/azizkhon_muzaffarov/"><button class="Btn1">HIRE ME!</button></a>
                    <button class="Btn2">PROJECTS</button>
                </div>
            </div>
        </div>
        <div class="h-[85vh] bg-[#f5f5f5] rounded-tr-[100px] rounded-br-[100px] grid iicon"  data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="1500">
<div class="grid grid-cols-2 z-50">
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

<style scoped lang="scss">
.Btn1 {
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(15, 15, 15);
    border: none;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
}


.Btn1::before {
    width: 130px;
    height: 130px;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: .3s;
    mix-blend-mode: difference;
}

.Btn1:hover::before {
    transition-duration: .3s;
    transform: translate(100%, -50%);
    border-radius: 0;
}

.Btn1:active {
    transform: translate(5px, 5px);
    transition-duration: .3s;
}

.Btn2 {
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    border: none;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
}


.Btn2::before {
    width: 130px;
    height: 130px;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: .3s;
    mix-blend-mode: difference;
}

.Btn2:hover::before {
    transition-duration: .3s;
    transform: translate(100%, -50%);
    border-radius: 0;
}

.Btn2:active {
    transform: translate(5px, 5px);
    transition-duration: .3s;
}

@media screen and (max-width: 1280px) {
    .iicon {
        display: none;
        width: 0px;
    }
}

@media screen and (max-width: 450px) {

    .name{
        font-size: 60px;
    }

    .about{
        font-size: 20px;
    }
}

@media screen and (max-width: 400px) {
    .btns {
        gap: 40px;
        justify-content: space-between;
    }
}

</style>