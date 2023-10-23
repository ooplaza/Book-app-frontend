<script setup>
useHead({
    title: "Buy me a coffee"
})
</script>

<template>
    <section class="mt-20 text-center">
        <h1 id="intro" class="text-l md:text-2xl font-bold text-center">Make a difference</h1>
        <h1 id="sub-intro" class="text-l md:text-md font-bold text-center">Buy me a cup of coffee</h1>
        
        <section class="flex justify-center mr-20 pr-6">
            <NuxtImg src="/Mug.png" class="object-contain h-35 w-25 my-15 h-auto max-w-lg" placeholder loading="lazy" />
        </section>

        <div>
            <a href="https://www.paypal.com/paypalme/ooplaza?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000481&utm_unptid=b0edf762-7187-11ee-81a4-40a6b72902e4&ppid=RT000481&cnac=PH&rsta=en_US%28en-PH%29&cust=YGCRRLRDU8854&unptid=b0edf762-7187-11ee-81a4-40a6b72902e4&calc=f69d87b300a8c&unp_tpcid=ppme-social-business-profile-created&page=main%3Aemail%3ART000481&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.210.0&xt=104038%2C127632" target="_blank">
                <button type="button" class="mt-5 text-gray-900 hover:shadow-l bg-[#169BD7] hover:bg-[#253B80]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                    <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c-8.6 0-15.7-6.3-17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                    Donate with PayPal
                </button>
            </a>
        </div>
    </section>
</template>

<style scoped>
#intro{
    font-family: 'Gameboy';
}

#sub-intro{
    font-family: 'Ubuntu';
}
</style>