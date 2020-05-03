const state = {
    money: 50000,
    items: []
};

const mutations = {
    'BUY_ITEM'(state, {itemId, amount, itemPrice}) {
        const record = state.items.find(element => element.id == itemId);
        if (record) {
            record.amount += amount;
        } else {
            state.items.push({
                id: itemId,
                amount: amount
            });
        }
        state.money -= itemPrice * amount;
    },
    'SELL_ITEM' (state, {itemId, amount, itemPrice}) {
        const record = state.items.find(element => element.id == itemId);
        if (record.amount > amount) {
            record.amount -= amount;
        } else {
            state.items.splice(state.items.indexOf(record), 1);
        }
        state.money += itemPrice * amount;
    },
    'SET_STORAGE' (state, storage) {
        state.money = storage.money;
        state.items = storage.itemStorage ? storage.itemStorage : [];
    }
};

const actions = {
    sellItem({commit}, order) {
        commit('SELL_ITEM', order);
    }
};

const getters = {
    itemStorage (state, getters) {
        return state.items.map(item => {
            const record = getters.items.find(element => element.id == item.id);
            return {
                id: item.id,
                amount: item.amount,
                name: record.name,
                price: record.price
            }
        });
    },
    money (state) {
      return state.money;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}