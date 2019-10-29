<template>
    <div class="cart-drop__box">
        <a href="#" class="cart-drop__link">
            <img :src="product.image" width="72px" height="85px" alt="image">
        </a>
        <div class="cart-drop__text">
            <a href="#" class="cart-drop__a">{{ product.title }}</a>
            <div class="cart-drop__rating">
                <i class="fas fa-star star-rating"></i>
                <i class="fas fa-star star-rating"></i>
                <i class="fas fa-star star-rating"></i>
                <i class="fas fa-star star-rating"></i>
                <i class="fas fa-star-half-alt star-rating"></i>
            </div>
            <div class="cart-drop__price">
                {{ product.quantity }} x ${{ product.price }}
            </div>
        </div>
        <a href="#" class="delete__button" @click="handleRemoveClick"><i class="fas fa-times-circle delete"></i></a>
    </div>
</template>

<script>
    export default {
        name: "CartDropItem",
        props: ['product'],
        methods:{
            handleRemoveClick(event) {
                event.preventDefault();
                this.$emit('remove');
            }
        }
    }
</script>


<style scoped lang="sass">
    @import "../../style/variables"
    @import "../../style/normal.css"
    @import "../../style/cart-buttons.css"

    .cart-drop
        &__a
            display: block
            color: #222222
            font-size: 12px
            font-weight: 700
            text-transform: uppercase
            margin-bottom: 10px

        &__rating
            margin-bottom: 10px

        &__box
            width: 230px
            display: flex
            align-items: center
            padding: 17px 0
            border-bottom: 1px solid #ededed

        &__price
            color: $pink
            font-size: 12px
            font-weight: 400
            text-transform: uppercase

        &__text
            margin-left: 15px
            margin-right: 52px
            height: 100%


    .star-rating
        color: #e4af48
        font-size: 10px
    .delete
        color: #c0c0c0
        &:hover
            transform: rotate(90deg)
            transition: 0.3s ease



</style>