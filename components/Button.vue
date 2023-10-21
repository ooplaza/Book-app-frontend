<script setup>
const props = defineProps(['ButtonName'])
</script>

<template>
    <button type="button" class="mt-2 text-xs text-black bg-transparent hover:bg-red-300 hover:text-black border border-black focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
        {{ ButtonName }}
    </button>
</template>

<style scoped>

</style>