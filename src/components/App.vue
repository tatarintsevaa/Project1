<template>
    <div>
        <Header ref="header" />
        <Navigation />
        <router-view @add="handleAddClick" />
        <Subscribe />
        <div class="slr"></div>
        <Footer />
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
        methods: {
            handleAddClick(item) {
                this.$refs.header.$refs.cart.handleAddClick(item);
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