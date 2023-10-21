<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 scroll-smooth">
    <!-- Navigation Bar -->
    <Navigation />
      <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
        <!-- Nuxtpage used to display all the page inside the directory of pages -->
        <NuxtPage />
      </main>
    <!-- Footer Bar -->
    <Footer />
  </div>
</template>