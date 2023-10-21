<script setup>
const { object } = defineProps(['object'])
</script>

<template>
    <transition name="fade">
        <div class="bg-gray-300 rounded-lg my-2">
            <pre class="px-6 py-6">{{ object }}</pre>
        </div>
    </transition>
</template>

<style scoped>
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: all .5s ease;
  }
  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: all .5s ease;
  }
</style>