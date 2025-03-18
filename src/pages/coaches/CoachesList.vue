<script setup>
    import { computed, ref } from 'vue';
    import store from '@/store';
    import CoachItem from '@/components/coaches/CoachItem.vue';
    import BaseCard from '@/components/ui/BaseCard.vue';
    import CoachFilter from '@/components/coaches/CoachFilter.vue';
    const activeFilters = ref({
        frontend: true,
        backend: true,
        career: true,
    })

    const filteredCoaches = computed(() => {
        const coaches = store.getters['coaches/coaches']; // namespace/getterMethod
        return coaches.filter((coach) => {
            if(activeFilters.value.frontend && coach.areas.includes('')){
                return true
            }

            if(activeFilters.value.backend && coach.areas.includes('backend')){
                return true
            }

            if(activeFilters.value.career && coach.areas.includes('career')){
                return true
            }

            return false
        })
    });

    const isCoach = computed(() => {
        const coaches = store.getters['coaches/isCoach'];
        return coaches
    })

    const hasCoaches = computed(() => {
        return store.getters['coaches/hasCoaches']; // namespace/getterMethod
    });

    const changeFilter = (filtered) => {

        console.log("filtered: ", filtered)
        activeFilters.value = { ...filtered };
    }
</script>

<template>
    <CoachFilter @change-filter="changeFilter"/>

    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline" :link="false" to="">
                    Refresh
                </base-button>

                <base-button mode="" v-if="!isCoach" link to="register">
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