<script setup>
    import {defineProps, computed} from 'vue';
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    })

    const text = computed(() => {
        return props.title.toUpperCase() || '';
    })

    const type = computed(() => {
        return props.type;
    })
</script>


<template>
    <span class="badge" :class="type">
        {{ text }}
    </span>
</template>

<style scoped>
    .badge {
        background-color: #ccc;
        color: #252525;
        border-radius: 30px;
        padding: 0.5rem 1.5rem;
        display: inline-block;
        margin-right: 0.5rem;
    }

    .frontend {
        background-color: #3d008d;
        color: white;
    }

    .backend {
        background-color: #71008d;
        color: white;
    }

    .career {
        background-color: #8d006e;
        color: white;
    }
</style>