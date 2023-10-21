<script setup>
const props = defineProps(['name', 'route'])
</script>

<template>
    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-red-400 border border-gray-900 rounded-l-lg hover:bg-red-300 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
        {{ props.name }}
    </button>
    <p class="px-6 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md ">
        {{ props.route }}
    </p>
</template>

<style scoped>

</style>