<script setup>
import { computed, defineProps } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    areas: {
        type: Array,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

const fullName = computed(() => {
    return props.firstName + ' ' + props.lastName;
});

const coachContactLink = computed(() => {
    return route.path + '/' + props.id + '/contact';
});

const coachDetailsLink = computed(() => {
    return route.path + '/' + props.id;
});
</script>

<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <base-badge  
                v-for="area in  areas" 
                :key="area" 
                :title="area" 
                :type="area">
            </base-badge>
        </div>
        <div class="actions">
            <base-button :to="coachContactLink" link mode="outline">Contact</base-button>
            <base-button :to="coachDetailsLink" link>View Details</base-button>
        </div>
    </li>
</template>

<style scoped>
    li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
    }

    h3 {
    font-size: 1.5rem;
    }

    h3,
    h4 {
    margin: 0.5rem 0;
    }

    div {
    margin: 0.5rem 0;
    }

    .actions {
    display: flex;
    justify-content: flex-end;
    }
</style>