<script setup>
const props = defineProps([
    'title',
    'route',
])
</script>

<template>
    <h1 id="api" class="text-l md:text-xl font-extrabold text-start mt-5">{{ props.title }}</h1>
    <section class="bg-gray-100 rounded-lg px-6 py-6">
        <pre>{{ props.route }}</pre>
    </section>
</template>

<style scoped>

</style>