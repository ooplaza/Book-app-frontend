<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

// Dark Mode Set-up
type Theme = 'light' | 'dark'
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}

//  Navigation Text
const route = useRoute()
const navigation = [
    {name: 'Home', to: '/', current: route.name == 'index'},
    {name: 'Docs', to: '/documents', current: route.name == 'documents'},
    {name: 'Buy me a coffee', to: '/donate', current: route.name == 'donate'},
]
</script>

<template>
    <div>
        <nav class="bg-gray-50 py-4 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NuxtLink to="/" class="flex items-center">
                    <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
                    <Icon name="noto:books" size="4rem" class="dark:text-gray-300 mx-1"></Icon>
                    <!-- <span id="nav-logo" class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> -->
                </NuxtLink>
                <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li v-for="item in navigation" :key="item.name">
                        <NuxtLink id="nav-item" :to="item.to" class="block py-2 pl-3 pr-4 text-black bg-gray-100 my-1 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
#nav-item{
    font-family: 'Roobert';
}
#nav-logo{
    font-family: 'Oswald';
}
</style>