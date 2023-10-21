<template>
    <div>
        <footer class="bg-white rounded-lg dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between sm:text-center">
                    <NuxtLink to="/" class="flex items-center mb-4 sm:mb-0">
                        <Icon name="noto:books" size="1.5rem" class="dark:text-gray-300 mx-1"></Icon>
                        <span class="self-center text-s text-black font-bold whitespace-nowrap dark:text-gray-400 ml-2">ReadCart API</span>
                    </NuxtLink>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li v-for="item in links" :key="item.name">
                            <a :href="item.href" target="_blank" class="mr-4 hover:underline md:mr-6 ">
                                <Icon :name="item.icon" size="1.5rem" class="dark:text-gray-300"></Icon>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span id="FOOTER" class="block tracking-wide text-md text-gray-500 sm:text-center dark:text-gray-400">Made with ❤️ by Orly Plaza</span>
                <NuxtLink to="/about"><span id="FOOTER" class="block pt-2 text-sm sm:text-center dark:text-gray-400"><Icon name="bx:coffee-togo" size="1.5rem" class="text-green-400 mx-1"></Icon>Buy me a coffee</span></NuxtLink>
            </div>
        </footer>
    </div>
</template>

<script setup>
const links = [
  { name: 'GitHub', href: "https://github.com/ooplaza", icon: 'mdi:github' },
  { name: 'Twitter', href: "https://twitter.com/plaza_orly?t=BblMtL8CY74HtRjvrTLK9g&s=09&fbclid=IwAR1QzWknVMh7UAtDSpCYcHeelQ-RU2TjidjsC4_kNZfuXnwdrIGyUNfavmE", icon: 'mdi:twitter' },
  { name: 'Facebook', href: "https://www.facebook.com/ooooorl", icon: 'mdi:facebook' },
  { name: 'LinkedIn', href: "https://www.linkedin.com/in/plaza-orly-71a54024a/", icon: 'mdi:linkedin' },
  { name: 'Instagram', href: "https://www.instagram.com/bsvwbsvxbh/", icon: 'mdi:instagram' }
]
</script>

<style scope>
#FOOTER{
    font-family: 'Roobert';
}
</style>