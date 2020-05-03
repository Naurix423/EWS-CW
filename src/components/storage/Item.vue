<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ item.name }}
                    <small>(Price: {{ item.price }} | Amount: {{ item.amount }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Amount"
                            v-model="amount"
                            :class="{danger: insufficientAmount}"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-info"
                            @click="sellItem"
                            :disabled="insufficientAmount || amount <= 0 || Number.isInteger(amount)"
                    >{{ insufficientAmount ? 'Not enough' : 'Sell' }}
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
    import {mapActions} from 'vuex';

    export default {
        props: ['item'],
        data() {
            return {
                amount: 0
            }
        },
        computed: {
          insufficientAmount() {
              return this.amount > this.item.amount;
          }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellItem'
            }),
            sellItem() {
                const order = {
                    itemId: this.item.id,
                    itemPrice: this.item.price,
                    amount: this.amount
                };
                this.placeSellOrder(order);
                this.amount = 0;
            }
        }
    }
</script>