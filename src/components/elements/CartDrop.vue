<template>
    <div class="cart-drop">
        <CartDropItem v-for="item in cartItems" :key="item.id" :product="item"/>
        <div class="sum">
            <h2 class="sum__text">TOTAL</h2>
            <h2 class="sum__text">$500.00</h2>
        </div>
        <a href="#" class="cart-drop__button">Checkout</a>
        <a href="#" class="cart-drop__button">Go to cart</a>
    </div>
</template>

<script>
    import CartDropItem from "./CartDropItem.vue";

    export default {
        name: "CartDrop",
        data() {
            return {
                cartItems:[],
            }
        },
        methods: {

        },
        mounted() {
            fetch('http://localhost:3000/cart')
                .then((response) => response.json())
                .then((data) => {
                    this.cartItems = data;
                })
                .catch((error) => {
                    console.log(error);
                } )
        },
        components: {
            CartDropItem
        }
    }
</script>

<style scoped lang="sass">
    @import "../../style/variables"
    @import "../../style/normal.css"

    .cart-drop
        border-radius: 5px
        padding: 0 17px 10px 17px
        position: absolute
        top: 67px
        right: -54px
        background-color: #ffffff
        border: 1px solid #eaeaea
        /*opacity: 0*/
        /*visibility: hidden*/

        &__button
            display: block
            width: 225px
            height: 50px
            border: 1px solid #eaeaea
            color: #4a4a4a
            font-size: 14px
            font-weight: 700
            text-transform: uppercase
            text-align: center
            line-height: 50px
            margin-bottom: 10px

            &:hover
                border: 1px solid $pink
                color: $pink
                transition: 0.3s ease

        &::before
            content: ''
            width: 10px
            height: 10px
            background-color: #fff
            display: block
            position: absolute
            top: -6px
            left: 30px
            transform: rotate(45deg)
            border-top: 1px solid #ececec
            border-left: 1px solid #ececec

        .sum
            padding: 19px 0 32px 0
            display: flex
            justify-content: space-between

            &__text
                color: #222222
                font-size: 16px
                font-weight: 700
                text-transform: uppercase

</style>