<script setup>

import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router'
import store from '@/store';

const route = useRoute();
const props = defineProps({
    id: {
        type: String,
        required: true,
        default: ''
    }
})

const id = computed(() => {
    return props.id;
})
const selectedCoach = store.getters['coaches/coaches'].find((coach) => coach.id === id.value);

const fullName = computed(() => {
    return selectedCoach.firstName + ' ' + selectedCoach.lastName;
})


const areas = computed(() => {
    return selectedCoach.areas;
})

const rate = computed(() => {
    return selectedCoach.hourlyRate;
})

const description = computed(() => {
    return selectedCoach.description;
})

const contactLink = computed(() => {
    return route.path + '/contact';
})


</script>


<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <header>
                <h2>Interested? Reach out now!</h2>
                <base-button link :to="contactLink">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>