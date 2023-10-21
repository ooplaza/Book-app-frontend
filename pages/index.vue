<script setup>
import { useApiFetch } from "../composables/useApiFetch"
const projects = ref([])
const pending = ref(false)
async function BooksHandler(){
    pending.value = true
    useApiFetch().get(`api/books/?limit=5&offset=5`).then(response => {
        projects.value = response.data['results']
        console.log(response.data['results'])
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        console.log("OK")
        pending.value = false
    })
}
const GET = ref({
    showObjects: false,
})
</script>

<template>
    <!-- Introduction -->
    <section class="flex flex-col md:flex-row mt-20 p-6 dark:text-gray-400">
        <div class="md:w-3/4 my-auto">
            <div class="">
                <!-- <p class="font-black pt-15 italic text-black dark:text-gray-400">Free RESTful service</p> -->
                <NuxtLink to="/" id="NAME" class="font-extrabold text-5xl md:text-8xl antialiased text-black bg-clip-text text-transparent bg-black dark:text-gray-400">
                    ReadCart<br>API
                </NuxtLink>
            </div>
            <p class="text-s text-black p-2 italic dark:text-gray-400">
                A RESTful API tailored for bookstores, making it a great choice for evaluating the feasibility of your e-commerce or online shopping website idea.
            </p>
            <div>
                <a href="https://github.com/ooplaza/Book-app-api.git" target="_blank">
                    <button type="button" class="text-black bg-red-400 hover:bg-red-300 hover:text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-red-700 mr-2 mb-2">
                        View on Github
                        <Icon name="mdi:github" size="1.5rem" class="dark:text-gray-300 mx-1"></Icon>
                    </button>
                </a>
                <NuxtLink to="/documents">
                    <button type="button" class="text-black bg-gray-400 hover:bg-gray-300 hover:text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                        Read Docs
                        <Icon name="system-uicons:document" size="1.5rem" class="dark:text-gray-300 mx-1"></Icon>
                    </button>
                </NuxtLink>
            </div>
        </div>
        <NuxtImg src="/Image.png" class="object-contain h-35 w-25 my-15 h-auto max-w-lg" placeholder loading="lazy" />
    </section>

    <!-- Initial Docs -->
    <section class="flex items-center justify-center dark:text-gray-400 mt-40">
        <div>
            <h1 id="api" class="text-black text-l md:text-2xl font-semibold text-center">Can't find any free e-commerce API?!</h1>
            <p class="text-s text-black p-2 italic dark:text-gray-400">
                Well I got you! An ideal RESTful API designed specifically for bookstores, making it an excellent option for assessing the viability of your concept for an e-commerce or online shopping website.
            </p>

            <div class="mt-10">
                <h1 id="ti" class="text-black text-s font-bold">Try it.</h1>
            </div>
            <div class="md:flex md:items-start md:justify-start mt-2">                
                <div>
                    <div class="inline-flex rounded-md shadow-sm my-auto md:my-auto" role="group">
                        <button @click="GET.showObjects = !GET.showObjects && BooksHandler()" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-red-400 border border-gray-900 rounded-l-lg hover:bg-red-300 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            GET
                        </button>
                        <p class="px-6 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md ">
                            http://localhost:8000/api/books/${public_id}
                        </p>
                    </div>
                    <transition name="fade">
                        <div class="mockup-window border border-base-300 bg-gray-200" v-if="GET.showObjects">
                            <div class="flex justify-start px-4 border-t border-base-300">
                                <pre v-if="pending" class="text-success" data-prefix="$"><code><b>Fetching...</b></code></pre>
                                <pre v-if="!pending" class="text-black px-6 py-6">{{ projects }}</pre>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
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
#api{
    font-family: 'Oswald';
}
#ti{
    font-family: "Gameboy";
}
</style>