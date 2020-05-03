import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const items = data.items;
                const money = data.money;
                const itemStorage = data.itemStorage;

                const storage = {
                    itemStorage,
                    money
                };

                commit('SET_ITEMS', items);
                commit('SET_STORAGE', storage); //sad
            }
        });
};