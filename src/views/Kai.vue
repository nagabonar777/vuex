<template><center>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">Booking KAI</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Code</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">City</th>
                    <th class="px-4 py-2">City Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="kai in getKai" :key="kai.code">
                    <td class="border px-4 py-2">{{ kai.code }}</td>
                    <td class="border px-4 py-2">{{ kai.name }}</td>
                    <td class="border px-4 py-2">{{ kai.city }}</td>
                    <td class="border px-4 py-2">{{ kai.cityname }}</td>
                </tr>
            </tbody>
        </table>
    </div></center>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('kai', ['getKai']),
    },
    methods: {
        ...mapActions('kai', ['fetchKai']),
    },
    created() {
        this.fetchKai();
    }
}
</script>