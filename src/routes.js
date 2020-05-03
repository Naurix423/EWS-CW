import Home from './components/Home.vue';
import Storage from './components/storage/Storage.vue';
import Items from './components/items/Items.vue';
import About from './components/about/About.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/storage', component: Storage },
    { path: '/items', component: Items },
    { path: '/about', component: About },
];