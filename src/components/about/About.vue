<template>
    <div>
        <h1>Purpose of the website:</h1>
        <h4>You can buy items and you can view your bought items. Purpose is it to make profit of bought items.
        <br>You can save current progress once done and can load it to return to your previous progress.
        </h4>
        <h4>Clicking on next day will randomize the price of each item.</h4>
        <hr>
        <h1>Third Party Content:</h1>
        <h4><a href="https://vuejs.org/">Vue.js</a> is used as the intended framework for development. It is under the MIT license.
        <br>
        <a href="https://aws.amazon.com/?nc2=h_lg">AWS S3</a> is used as the hosting environment, it is free of charge for the first 12 months and after they apply charges.
        <br>
        VS code is the IDE used.
        <br>
        <a href="https://getbootstrap.com/">Bootstrap</a> is an open source toolkit for quick website development, they provide grid system, prebuilt components and many more
        </h4>
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