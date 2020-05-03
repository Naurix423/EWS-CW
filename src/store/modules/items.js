import items from '../../data/items';

const state = {
    items: []
};

const mutations = {
    'SET_ITEMS' (state, items) {
        state.items = items;
    },
    'RND_ITEMS' (state) {
        state.items.forEach(item => {
            item.price = Math.round(item.price * (1 + Math.random() - 0.45));
        });
    }
};

const actions = {
    buyItem: ({commit}, order) => {
        commit('BUY_ITEM', order);
    },
    initItems: ({commit}) => {
        commit('SET_ITEMS', items);
    },
    randomizeItems: ({commit}) => {
        commit('RND_ITEMS');
    }
};

const getters = {
    items: state => {
        return state.items;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};