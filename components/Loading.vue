<template>
    <section class="text-center mt-10">
        <div class="loader"></div>
        <p id="loading" class="dark:text-gray-400">Loading...</p>
    </section>
</template>

<style scoped>
#loading{
    font-family: 'Gameboy';
    font-size: 10px;
}
.loader {
  clear: both;
  margin: 1rem auto;
  width: 3.125rem;
  height: 1.125rem;
  border: 1px #7F8487 solid;
  border-radius: 4px;
  background: linear-gradient(-60deg, transparent 0%, transparent 50%, #7F8487 50%, #7F8487 75%, transparent 75%, transparent);
  background-size: 20px 30px;
  background-position: 0px 0px;
  animation: spLoadBar 0.8s infinite linear;
}

@keyframes spLoadBar {
  from {
    background-position: 0px 0px;
  }

  to {
    background-position: -20px 0px;
  }
}
</style>