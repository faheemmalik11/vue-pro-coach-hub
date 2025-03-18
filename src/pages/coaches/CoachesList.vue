<script setup>
    import { computed } from 'vue';
    import store from '@/store';
    import CoachItem from '@/components/coaches/CoachItem.vue';
    import BaseCard from '@/components/ui/BaseCard.vue';

    const filteredCoaches = computed(() => {
        return store.getters['coaches/coaches']; // namespace/getterMethod
    });

    const hasCoaches = computed(() => {
        return store.getters['coaches/hasCoaches']; // namespace/getterMethod
    });
</script>

<template>
    <section>
        Filter
    </section>

    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline" link="false" to="">
                    Refresh
                </base-button>

                <base-button mode="" link to="register">
                    Register as Coach
                </base-button>
            </div>

            <ul v-if="hasCoaches">
                <CoachItem 
                    v-for="coach in filteredCoaches" 
                    :key="coach.id" 
                    :firstName="coach.firstName"
                    :lastName="coach.lastName" 
                    :id="coach.id" 
                    :rate="coach.hourlyRate" 
                    :areas="coach.areas">
                </CoachItem>
            </ul>
            <h3 v-else>No Coaches found</h3>
        </base-card>
    </section>
</template>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .controls {
        display: flex;
        justify-content: space-between;
    }
</style>