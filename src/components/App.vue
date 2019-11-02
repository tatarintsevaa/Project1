<template>
    <div>
        <Header ref="header" @search="handleSearchClick"/>
        <Navigation/>
        <router-view @add="handleAddClick" :query="query"/>
        <Subscribe/>
        <div class="slr"></div>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./elements/Header.vue";
    import Navigation from "./elements/Navigation.vue";
    import Subscribe from "./elements/Subscribe.vue";
    import Footer from "./elements/Footer.vue";

    export default {
        name: 'App',
        components: {
            Header,
            Navigation,
            Subscribe,
            Footer
        },
        data() {
          return {
              pageName: null,
              query: '',
          }
        },
        methods: {
            handleAddClick(item) {
                this.$refs.header.$refs.cart.handleAddClick(item);
            },
            pageIs(name) {
               this.pageName = name;
            },
            handleSearchClick(query) {
                this.query = query;
            }
        },
        mounted() {
            console.log(this);
        }
    }
</script>

<style lang="sass">
    @import "../style/normal.css"

    @import "../style/variables.sass"
    .slr
        height: 537px
</style>