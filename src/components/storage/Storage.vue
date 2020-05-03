<template>
    <div>
        <app-item v-for="item in items" :item="item"></app-item>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Item from './Item.vue';

    export default {
        computed: {
            ...mapGetters({
                items: 'itemStorage'
            })
        },
        components: {
            appItem: Item
        }
    }
</script>