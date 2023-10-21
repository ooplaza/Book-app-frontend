<script setup>
const object = {
    "title": "Sample",
    "public_id": "Sample",
    "ISBN": "Sample",
    "release_year": 1974,
    "publisher": "Sample",
    "thumbnail": "Sample",
    "ratings": 7,
    "price": 50,
    "author": "Sample",
    "created": "Sample",
    "updated": "Sample"
  }
</script>

<template>
        <section class="bg-gray-100 rounded-xl px-6 py-6">
            <div class="">
                <h1 id="api" class="text-l md:text-xl font-extrabold text-start">How to use it</h1>
                <p class="font-bold text-start">Base URL</p>
                <p class="my-2 text-black bg-red-400 hover:text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-red-700 mr-2 mb-2">
                    https://readcartapi-server.vercel.app
                </p>
                <div>
                    These following fields are that can be query from a certain routes.
                    <div class="">
                        <pre>{{ object }}</pre>
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>

</style>