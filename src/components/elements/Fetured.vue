<template>
    <section>
        <div class="fetured-items">
            <h3 class="fetured-items__h3">Fetured Items</h3>
            <p class="fetured-items__p" >Shop for items based on what we featured in this week</p>
        </div>

        <CatalogItemList class="container"  :url="'http://localhost:3000/goods'" @add="handleAddClick"/>

        <div class="product-button-box">
            <a href="#" class="button button_product">Browse All Product</a>
        </div>
    </section>
</template>

<script>
    import CatalogItemList from "./CatalogItemList.vue";
    export default {
        name: "Fetured",
        components: {
            CatalogItemList
        },
        methods: {
            handleAddClick(item) {
                this.$emit('add', item);
            }
        }

    }
</script>

<style lang="sass" scoped>
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    .fetured-items
        height: 210px
        display: flex
        flex-direction: column
        justify-content: center

        &__h3
            color: #222222
            font-size: 30px
            font-weight: 700
            letter-spacing: 0.75px
            text-align: center

        &__p
            color: #9f9f9f
            font-size: 14px
            font-weight: 400
            letter-spacing: 0.35px
            text-align: center

    .button
        &_product
            padding-left: 24px
            padding-right: 43px
            height: 48px
            line-height: 48px
            font-size: 16px
            font-weight: 700
            letter-spacing: 0.4px

        &:hover
            background: $pink url(../../img/arrow_product.png) no-repeat 180px 22px

    .product-button-box
        height: 220px
        display: flex
        justify-content: center
        align-items: center
</style>