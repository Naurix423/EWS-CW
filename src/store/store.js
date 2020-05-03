import Vue from 'vue';
import Vuex from 'vuex';

import items from './modules/items';
import storage from './modules/storage';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        items,
        storage
    }
});