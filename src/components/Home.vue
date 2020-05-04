<template>
    <div>
        <h1>Buy and Sell Valuable Items</h1>
        <h4>You have 50k at your desposal use it to get rich</h4>
        <h4>Click on next day to start a new day which will randomize item costs</h4>
        <hr>
        <p>Your Money: {{ money | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            money() {
                return this.$store.getters.money;
            }
        }
    }
</script>