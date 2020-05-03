<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand " >Auction House</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/storage" id="storage" activeClass="active" tag="li"><a>Owned Items</a></router-link>
                    <router-link to="/items" activeClass="active" tag="li"><a>Items</a></router-link>
                    <router-link to="/about" activeClass="active" tag="li"><a>About</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Money: {{ money | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">Next Day</a></li>
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save</a></li>
                            <li><a href="#" @click="loadData">Load</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>
<style scoped>
.container-fluid {
    background-color: #5bc0de;
}
.navbar-brand{
    color: white;
}
.dropdown-menu>li>a:hover{
    color: white;
    background-color: #337ab7;
}
.navbar-nav>.active>a:focus{
    color: white;
    background-color: #5bc0de;
}

</style>
<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
          return {
              isDropdownOpen: false
          }
        },
        computed: {
            money() {
                return this.$store.getters.money;
            }
        },
        methods: {
            ...mapActions({
                randomizeItems: 'randomizeItems',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeItems();
            },
            saveData() {
                const data = {
                    money: this.$store.getters.money,
                    itemStorage: this.$store.getters.itemStorage,
                    Items: this.$store.getters.Items
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>