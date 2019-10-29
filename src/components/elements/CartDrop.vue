<template>
    <div class="cart-drop" v-if="cartItems.length">
        <CartDropItem v-for="item in cartItems" :key="item.id" :product="item" @remove="handleRemoveClick(item.id)"/>
        <div class="sum">
            <h2 class="sum__text">TOTAL</h2>
            <h2 class="sum__text">${{ totalPrice }}</h2>
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
            handleAddClick(item) {
                let find = this.cartItems.find(product => product.id === +item.id);
                if (find) {
                    fetch(`http://localhost:3000/cart/${find.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({quantity: ++find.quantity}),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
                        .catch((error) => console.log(error))
                } else {
                    fetch('http://localhost:3000/cart', {
                        method: 'POST',
                        body: JSON.stringify({
                            id: +item.id,
                            title: item.title,
                            price: +item.price,
                            quantity: 1,
                            image: item.image}),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
                        .then(() => {
                            this.cartItems.push({...item, quantity: 1});
                        })
                        .catch((error) => console.log(error))
                }
            },
            handleRemoveClick(id) {
                let find = this.cartItems.find(product => product.id === id);
                if (find.quantity > 1) {
                    fetch(`http://localhost:3000/cart/${find.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({quantity: --find.quantity}),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
                        .catch((error) => console.log(error))
                } else {
                    fetch(`http://localhost:3000/cart/${id}`, {
                        method: 'DELETE',
                    })
                        .then(() => {
                            const index = this.cartItems.findIndex(x => x.id === id);
                            this.cartItems.splice(index, 1);
                        })
                        .catch((error) => console.log(error))
                }
            }


        },
        computed: {
            totalPrice() {
                return this.cartItems.reduce((sum, current) => sum + current.price * current.quantity, 0);
            },
            filteredItems() {
                const regExp = new RegExp(this.query, 'i');
                return this.items.filter(product => regExp.test(product.title));
            },
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