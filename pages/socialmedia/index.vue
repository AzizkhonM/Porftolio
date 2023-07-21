<script setup>
</script>


<template>
    <div class="container mx-auto">
    <h1 class="text-[50px] font-medium text-center mb-10" data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">Social Media Pages</h1>
    <div class="card justify-center grid grid-cols-3 mx-auto"  data-aos="fade-in" data-aos-duration="500" data-aos-delay="750">
  <a class="social-link1" href="https://www.instagram.com/azizkhon_muzaffarov/">
    <i class="bx bxl-instagram text-5xl"></i>
  </a>
  <a class="social-link2" href="https://twitter.com/m_azizkhon">
    <i class="bx bxl-twitter text-5xl"></i>
  </a>
  <a class="social-link3" href="https://www.facebook.com/profile.php?id=100091728452436">
    <i class="bx bxl-facebook text-5xl"></i>
  </a>
  <a class="social-link4" href="https://wa.me/+998930422240">
    <i class="bx bxl-whatsapp text-5xl"></i>
  </a>
  <a class="social-link5" href="https://github.com/AzizkhonM">
    <i class="bx bxl-github text-5xl"></i>
  </a>
  <a class="social-link6" href="https://www.linkedin.com/in/azizkhon-muzaffarov-23934b248/">
    <i class="bx bxl-linkedin text-5xl"></i>
  </a>
</div>             
  </div>
</template>


<style lang="scss" scoped>
.card {
  width: 80%;
}

.card .social-link1,.card .social-link2,.card .social-link3,.card .social-link4, .card .social-link5, .card .social-link6 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  color: black;
  font-size: 24px;
  text-decoration: none;
  transition: 0.25s;
  border-radius: 50px;
  cursor: pointer;
}


.card a{
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card .social-link1:hover {
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  animation: bounce_613 0.4s linear;
}

.card .social-link2:hover {
  background-color: #00ccff;
  animation: bounce_613 0.4s linear;
}

.card .social-link3:hover {
  background-color: #3b5998;
  animation: bounce_613 0.4s linear;
}

.card .social-link4:hover {
  background-color: #12a50b;
  animation: bounce_613 0.4s linear;
}

.card .social-link5:hover {
  background-color: #171515;
  animation: bounce_613 0.4s linear;
}

.card .social-link6:hover {
  background-color: #0A66C2;
  animation: bounce_613 0.4s linear;
}

.card a:hover{
  color: white
}

@keyframes bounce_613 {
  40% {
    transform: scale(1.4);
  }

  60% {
    transform: scale(0.8);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@media only screen and (max-width: 400px) {
  .card a {
    border-radius: 50%;
  }
}

</style>