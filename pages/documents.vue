<script setup>
import { useApiFetch } from "../composables/useApiFetch"
const GET = ref({
    showObjects: false,
    showObject: false,
    customObjects: false
})
const projects = ref([])
const pending = ref(false)
async function BooksHandler(){
    pending.value = true
    useApiFetch().get(`api/books/`).then(response => {
        projects.value = response.data['results']
        console.log(response.data['results'])
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        console.log("200")
        pending.value = false
    })
}

const project = ref([])
async function BookHandler(){
    pending.value = true
    useApiFetch().get(`api/books/?limit=5&offset=5`).then(response => {
        project.value = response.data['results']
        console.log(response.data['results'])
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        console.log("200")
        pending.value = false
    })
}
</script>

<template>
    <section>
        <div class="my-10 text-black">
            <h1 id="api" class="text-l md:text-xl font-bold text-start">Quick details about the API.</h1>
            <p>The API hosts over 250,000+ books that can be access randomly from the server. The default size limit of the returned objects are paginated into 100 objects per page.</p>
            <hr class="mt-2">
        </div>
        <DocsIntroduction />
    </section>

    <!-- Composables -->
    <GetFetchDocument title="Assuming you have a composable using Axios" route="
    import axios from 'axios';
    export function useApiFetch(){
        return axios.create({
            baseURL: 'https://readcartapi-server.vercel.app/',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    " />
    
    <!-- Get all books -->
    <GetFetchDocument title="Get all books" route="
    import { useApiFetch } from '../composables/useApiFetch'
    useApiFetch().get(`api/books`).then(response => {
        projects.value = response.data['results']
        console.log(response.data['results'])
    }).catch(error => {
        console.log(error)
    }).finally((){
        console.log('Success')
    })
    " />
    <Button @click="GET.showObjects = !GET.showObjects && BooksHandler()" ButtonName="Show output" />
    <transition name="fade">
        <div class="mockup-window border border-base-300 bg-gray-200" v-if="GET.showObjects">
            <div class="flex justify-start px-4 border-t border-base-300">
                <pre v-if="pending" class="text-success" data-prefix="$"><code><b>Fetching...</b></code></pre>
                <pre v-if="!pending" class="text-black px-6 py-6">{{ projects }}</pre>
            </div>
        </div>
    </transition>

    <!-- Get a single book -->
    <GetFetchDocument title="Get a single book" route="
    useApiFetch().get(`api/books/${project.public_id}`).then(response => {
        project.value = response.data['results']
        console.log(response.data['results'])
    }).catch(error => {
        console.log(error)
    }).finally((){
        console.log('Success')
    })"/>
    <Button @click="GET.showObject = !GET.showObject" ButtonName="Show output" />
    <transition name="fade">
        <div class="mockup-window border border-base-300 bg-gray-200" v-if="GET.showObject">
            <div class="flex justify-start px-4 border-t border-base-300">
                <pre v-if="pending" class="text-success" data-prefix="$"><code><b>Fetching...</b></code></pre>
                <pre v-if="!pending" class="text-black px-6 py-6">{{ projects[0] }}</pre>
            </div>
        </div>
    </transition>

    <!-- Customizing a queryset -->
    <GetFetchDocument title="Customizing a queryset by setting the limit='5'&offset='5'" route="
    useApiFetch().get(`api/books/?limit=5`).then(response => {
        projects.value = response.data['results']
        console.log(response.data['results'])
    }).catch(error => {
        console.log(error)
    }).finally((){
        console.log('Success')
    })" />
    <Button @click="GET.customObjects = !GET.customObjects && BookHandler()" ButtonName="Show output" />
    <transition name="fade">
        <div class="mockup-window border border-base-300 bg-gray-200" v-if="GET.customObjects">
            <div class="flex justify-start px-4 border-t border-base-300">
                <pre v-if="pending" class="text-success" data-prefix="$"><code><b>Fetching...</b></code></pre>
                <pre v-if="!pending" class="text-black px-6 py-6">{{ project }}</pre>
            </div>
        </div>
    </transition>
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
</style>