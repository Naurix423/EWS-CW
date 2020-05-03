<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ item.name }}
                    <small>(Price: ${{ item.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Amount"
                            v-model="amount"
                            :class="{danger: insufficientMoney}"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-info"
                            @click="buyItem"
                            :disabled="insufficientMoney || +amount <= 0 || !Number.isInteger(+amount)"
                    >{{ insufficientMoney ? 'Not Enough' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props: ['item'],
        data() {
            return {
                amount: 0
            }
        },
        computed: {
            money() {
                return this.$store.getters.money;
            },
            insufficientMoney() {
                return this.amount * this.item.price > this.money;
            }
        },
        methods: {
            buyItem() {
                const order = {
                    itemId: this.item.id,
                    itemPrice: this.item.price,
                    amount: +this.amount
                };
                this.$store.dispatch('buyItem', order);
                this.amount = 0;
            }
        }
    }
</script>