<template><br>
     <h1 class="text-center"> CATEGORY PRODUCT</h1><br><br>
<div class=" grid grid-cols-4 gap-4">

   
    <div v-for="category in getCategory" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a :href="category
    ">

        <img class="rounded-t-lg object-contain h-48 w-97" 
        :src="'src/assets/img/' + category +'.jpg'" 
        :alt="category" />

    </a>
    <div class="p-5">
        <a :href="category">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{category.toUpperCase()}}
            </h5>
        </a><br>
        <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> -->
        <a href="#" class="inline-flex text-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('category', ['getCategory']),
    },
    methods: {
        ...mapActions('category', ['fetchCategory']),
    },
    created() {
        this.fetchCategory();
    }
}
</script>