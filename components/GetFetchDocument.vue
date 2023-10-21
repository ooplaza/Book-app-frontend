<script setup>
const props = defineProps([
    'title',
    'route',
])
</script>

<template>
    <h1 id="api" class="text-black text-l md:text-xl font-extrabold text-start mt-10 mb-2">{{ props.title }}</h1>
    <section>
        <div class="mockup-browser border border-base-300">
            <div class="mockup-browser-toolbar">
                <div class="input border border-base-300">https://readcraftapi.vercel.app</div>
            </div>
            <div class="flex justify-start border-t border-base-300">
                <pre>{{ props.route }}</pre>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>