<template>

    <div class="container mx-auto grid grid-cols-1 xl:grid-cols-2 justify-items-center content-evenly justify-evenly items-center gap-10">
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
data-aos-duration="500" data-aos-delay="1000" class="btns flex justify-start gap-[80px] mb-[30px]">
                    <a href="https://www.instagram.com/azizkhon_muzaffarov/"><button class="Btn1">HIRE ME!</button></a>
                    <button class="Btn2">PROJECTS</button>
                </div>
                <a data-aos="fade-in" 
data-aos-duration="500" data-aos-delay="1000" href="/doc.pdf" download="azizkhon_muzaffarov_cv" class=" mb-[100px]"><button class="Btn1">DOWNLOAD CV</button></a>
            </div>
        </div>
        <div class="h-[85vh] flex justify-center items-center iicon" data-aos="fade-in" data-aos-duration="500" data-aos-delay="1500">
                <img src="/laptop.svg" class="w-[110%]" alt="">
        </div>
    </div>
</template>

<script setup>



</script>

<style scoped lang="scss">


img{
    animation-name: infiniteupdown;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
}

@keyframes infiniteupdown{
    0%{
        transform: translatey(0px);
    }
    25%{
        transform: translatey(25px);
    }
    75%{
        transform: translatey(-25px);
    }
    100%{
        transform: translatey(0px);
    }
}



.Btn1 {
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #3499ff, #3a3985);
    border: none;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    border-radius: 15px;
}


button:hover {
  transform: translateY(-10px);
  box-shadow: 0px 7px 1px rgb(0, 0, 0);
  border: 1px solid black;
}

button:active {
  transform: translateY(10px);
  box-shadow: 0px 0px 1px;
}
  

.Btn2 {
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-image-source:linear-gradient(to bottom right, #3499ff, #3a3985);
    border: 10px solid;
  border-image-slice: 1;
  border-width: 2px;
    color: #3a3985;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    border-radius: 15px;
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