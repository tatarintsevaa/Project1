<template>
    <div class="product__item" >
        <a href="#" class="product__link">
            <img :src="product.image" alt="product1">
            <div class="product__name">
                <h4>{{ product.title }}</h4>
                <h4>${{ product.price }}</h4>
            </div>
        </a>
        <a href="#" class="product__add" @click="handleAddClick"><img src="../../img/cart_white.svg" alt="cart"
                                                                      class="add__image">Add to Cart</a>
    </div>
</template>

<script>
    export default {
        name: "CatalogItem",
        props: ['product'],
        methods: {
            handleAddClick(event) {
                event.preventDefault();
                this.$emit('add');
            }
        }
    }
</script>

<style lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    .product
        &__name
            height: 83px
            display: flex
            flex-direction: column
            justify-content: space-around

        &__name h4:first-of-type
            color: #222222
            font-size: 13px
            font-weight: 400
            text-transform: uppercase
            padding-left: 15px

        &__name h4:nth-of-type(2)
            color: $pink
            font-size: 16px
            font-weight: 700
            text-transform: uppercase
            padding-left: 15px

        &__link img
            transition: all 0.3s linear

        &__item
            position: relative
            margin-bottom: 30px
            transition: box-shadow 0.3s linear


            &:hover
                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16)

            &:hover .product__link img
                filter: brightness(50%)

            &:hover .product__add
                visibility: visible



        &__add
            width: 123px
            height: 39px
            border: 1px solid #ffffff
            color: #ffffff
            font-size: 13px
            font-weight: 700
            position: absolute
            top: 98px
            left: 70px
            display: flex
            justify-content: center
            align-items: center
            visibility: hidden
            margin-bottom: 9px
            transition: border 0.3s linear

            &:hover
                border: 1px solid $pink

        .add__image
            margin: 8px
</style>