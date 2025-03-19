<script setup>
import CoachForm from '@/components/coaches/CoachForm.vue';
import store from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter();
const saveData = (FormData) => {
    console.log('formData: ', FormData);
    store.dispatch('coaches/registerCoach', FormData);
    router.replace('/coaches');
}
</script>

<template>
    <section>
        <base-card>
        <h2>Register as a coach now!</h2>
        <CoachForm @save-data="saveData"/>
        </base-card>
    </section>
</template>