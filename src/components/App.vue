<template>
    <div>
        <Header />
        <Navigation />
        <router-view  />
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