<template>
    <div  style="font-family: 'Oswald', sans-serif">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>


<style scoped>

main{
  padding: 16px;
}

</style>