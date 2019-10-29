<template>
    <div>
        <Slider/>
        <Categories/>
        <Fetured @add="handleAddClick"/>
        <Offer/>
    </div>
</template>

<script>
    import Slider from "../elements/Slider.vue";
    import Categories from "../elements/Categories.vue";
    import Fetured from "../elements/Fetured.vue";
    import Offer from "../elements/Offer.vue";

    export default {
        name: "HomePage",
        components: {
            Slider,
            Categories,
            Fetured,
            Offer
        },
        methods: {
            handleAddClick(item) {
                this.$emit('add', item);
            }
        }
    }
</script>

<style lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

</style>