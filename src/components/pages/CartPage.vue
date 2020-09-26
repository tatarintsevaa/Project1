<template>
    <div>
        <header class="heading heading_single-page">
            <div class="container heading__block">
                <h1 class="heading__h1">New Arrivals </h1>
                <ul class="heading__nav">
                    <li><router-link to="/" class="heading__bread-crumbs">Home </router-link>/</li>
                    <li><p class="heading__bread-crumbs heading__bread-crumbs_active">Shopping Cart</p></li>
                </ul>
            </div>
        </header>
        <table class="container cart">
            <tr class="cart__heading">
                <td class="cart__product-details">Product Details</td>
                <td class="cart__unite-price">unite Price</td>
                <td class="cart__quantity">Quantity</td>
                <td class="cart_shipping">shipping</td>
                <td class="subtotal">subtotal</td>
                <td class="action">action</td>
            </tr>
            <tr class="cart__item" v-for="item in cartItems" :key="item.id">
                <td class="cart__product-details cart-item">
                    <a href="#" class="cart-item__img"><img :src="item.image" width="100px" height="115px" alt="image"></a>
                    <div class="cart-item__text">
                        <a href="#" class="cart-item__name">{{ item.title }}</a>
                        <p class="cart-item__rating">
                            <i class="fas fa-star star-rating"></i>
                            <i class="fas fa-star star-rating"></i>
                            <i class="fas fa-star star-rating"></i>
                            <i class="fas fa-star star-rating"></i>
                            <i class="fas fa-star-half-alt star-rating"></i>
                        </p>
                        <p class="cart-item__details">Color: <span>Red</span></p>
                        <p class="cart-item__details">Siz: <span>XS</span></p>
                    </div>
                </td>
                <td class="cart__unite-price">${{ item.price }}</td>
                <td class="cart__quantity">
                    <form action="#"><input type="number" :value="item.quantity" @change="handleChangeClick(item, $event)">
                    </form>
                </td>
                <td class="cart_shipping">FREE</td>
                <td class="subtotal">${{ +item.price * +item.quantity }}</td>
                <td class="action"><a href="#" class="delete__button" @click="handleRemoveClick(item.id, $event)">
                    <i class="fas fa-times-circle delete"></i></a>
                </td>
            </tr>
        </table>
        <div class="container cart-buttons">
            <a href="#" @click="clearCart($event)" class="cart-buttons__button">CLEAR SHOPPING CART</a>
            <router-link to="/product" href="#" class="cart-buttons__button">cONTINUE sHOPPING</router-link>
        </div>
        <div class="container deal-terms">
            <div class="deal-terms__box">
                <h1 class="deal-terms__h1">Shipping Adress</h1>
                <form action="#">
                    <div class="form__box">
                        <select class="deal-terms__input deal-terms__input_country">
                            <option>Bangladesh</option>
                            <option>USA</option>
                            <option>Russian Federation</option>
                        </select>
                    </div>
                    <div class="form__box">
                        <input class="deal-terms__input" type="text" placeholder="State">
                    </div>
                    <div class="form__box">
                        <input class="deal-terms__input" type="text" placeholder="Postcode / Zip">
                    </div>
                    <div class="form__box">
                        <input class="deal-terms__button" type="submit" value="get a quote">
                    </div>
                </form>
            </div>
            <div class="deal-terms__box">
                <h1 class="deal-terms__h1">coupon discount</h1>
                <p class="deal-terms__p">Enter your coupon code if you have one</p>
                <div class="form__box">
                    <input class="deal-terms__input" type="text" placeholder="State">
                </div>
                <div class="form__box">
                    <input class="deal-terms__button" type="submit" value="Apply coupon">
                </div>
            </div>
            <div class="deal-terms__box_checkout">
                <div class="deal-terms__total">
                    <p class="deal-terms__p_total">Sub total <span>${{ total() }}</span></p>
                    <h1 class="deal-terms__h1">GRAND TOTAL <span>${{ total() }}</span></h1>
                </div>
                <a href="checkout.html" class="deal-terms__button_total">proceed to checkout</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartPage",
        data() {
            return {
                cartItems: [],
                cartDropAPI: this.$parent.$refs.header.$refs.cart,
            }
        },
        methods: {
            handleRemoveClick(id, event) {
                event.preventDefault();
                this.cartDropAPI.handleRemoveClick(id);
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
            },
            handleChangeClick(item, event) {
                console.log(item);
                const newQuantity = +event.target.value;
                if (newQuantity <= 0) {
                    event.preventDefault();
                    alert('Please, enter another value!');
                    return
                }
                let find = this.cartItems.find(product => product.id === item.id);
                if (find.quantity >= 1) {
                    fetch(`http://localhost:3000/cart/${find.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({quantity: newQuantity}),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
                        .then(() => {
                            find.quantity = newQuantity;
                            let findInDropCart = this.cartDropAPI.cartItems.find(product => product.id === item.id);
                            findInDropCart.quantity = newQuantity;
                        })
                        .catch((error) => console.log(error))
                } else  {
                    fetch(`http://localhost:3000/cart/${find.id}`, {
                        method: 'DELETE',
                    })
                        .then(() => {
                            const index = this.cartItems.findIndex(x => x.id === item.id);
                            this.cartItems.splice(index, 1);
                            this.cartDropAPI.cartItems.splice(index, 1);

                        })
                        .catch((error) => console.log(error))
                }
            },
            clearCart(event) {
                event.preventDefault();
                // if (this.cartItems.length > 0) {
                //     this.cartItems = [];
                //     fetch(`http://localhost:3000/cart}`, {
                //         method: 'PATCH',
                //         body: JSON.stringify(this.cartItems),
                //         headers: {
                //             'Content-type': 'application/json',
                //         },
                //     })
                //         .then(() => {
                //             this.cartItems = [];
                //         })
                //         .catch((error) => console.log(error))
                // }
                this.cartItems.forEach((x) => {
                    fetch(`http://localhost:3000/cart/${x.id}`, {
                        method: 'DELETE',
                    })
                        .then(() => {
                            this.cartItems = [];
                            this.cartDropAPI.cartItems = [];
                        })
                        .catch((error) => console.log(error))
                })
            },
            total() {
                    return this.cartItems.reduce((sum, current) => sum + current.price * current.quantity, 0);
            }
        },
        mounted() {
            fetch('http://localhost:3000/cart')
                .then((response) => response.json())
                .then((data) => {
                    this.cartItems = data;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
</script>

<style scoped lang="sass">
    @import "../../style/variables"
    @import "../../style/normal.css"

    .cart
        & td
            padding-top: 25px
            padding-bottom: 25px
            border-bottom: 1px solid #eaeaea

        &__heading
            & td
                color: #222222
                font-size: 13px
                font-weight: 700
                text-transform: uppercase
                letter-spacing: -0.2px

        &__product-details
            width: 500px

        .cart-item
            display: flex

            &__name
                color: #222222
                font-size: 13px
                font-weight: 700
                text-transform: uppercase
                text-decoration: none
                margin-bottom: 10px

            &__rating
                margin-bottom: 15px

            &__text
                padding-left: 15px

            &__details
                color: #6f6e6e
                font-size: 13px
                font-weight: 700
                line-height: 20px

                span
                    color: #575757
                    font-weight: 300

        & td:nth-child(n+2)
            text-align: center

        &__quantity input
            width: 54px
            height: 30px
            text-align: center

    .star-rating
        color: #e4af48
        font-size: 10px

    .delete
        color: #c0c0c0

        &:hover
            transform: rotate(90deg)
            transition: 0.3s ease

    .cart-buttons
        display: flex
        justify-content: space-between

        &__button
            height: 50px
            padding: 0 40px
            text-decoration: none
            color: #4a4a4a
            font-size: 14px
            font-weight: 700
            text-transform: uppercase
            border: 1px solid #eaeaea
            line-height: 50px
            margin-top: 44px
            transition: border-color 0.3s ease

            &:hover
                border: 1px solid $pink

    .deal-terms
        display: flex
        justify-content: space-between
        padding-top: 63px
        padding-bottom: 79px

        &__box_checkout
            background-color: #f5f3f3
            padding: 40px
            height: min-content

        &__h1
            color: #222222
            font-size: 16px
            font-weight: 700
            text-transform: uppercase
            margin-bottom: 20px

            & span
                color: $pink

        &__input
            width: 355px
            height: 45px
            border: 1px solid #eaeaea
            color: #b1b1b1
            font-size: 13px
            font-weight: 300
            margin-bottom: 20px
            padding: 0 18px
            box-sizing: border-box

            &::-webkit-input-placeholder
                color: #b1b1b1

            &::-moz-placeholder
                color: #b1b1b1

            &_country
                width: 357px


        &__button
            height: 35px
            padding: 0 15px
            color: #4a4a4a
            font-size: 11px
            font-weight: 700
            text-transform: uppercase
            border: 1px solid #eaeaea
            background-color: #ffffff
            transition: border-color 0.3s ease

            &:hover
                cursor: pointer
                border: 1px solid $pink

            &_total
                display: block
                height: 50px
                line-height: 50px
                padding: 0 42px
                color: #ffffff
                font-size: 16px
                font-weight: 700
                text-transform: uppercase
                background-color: #f16d7f
                margin-top: 17px
                transition: all 0.2s linear

                &:hover
                    background-color: #ffffff
                    color: #f16d7f
                    outline: 1px solid #f16d7f


        &__p
            color: #000000
            font-size: 14px
            font-weight: 300
            margin-bottom: 24px

            &_total
                color: #4a4a4a
                font-size: 11px
                font-weight: 400
                text-transform: uppercase
                margin-bottom: 14px

        &__total
            display: flex
            flex-direction: column
            align-items: flex-end
            border-bottom: 1px solid #e2e2e2

            & span
                padding-left: 20px

    .checkout
        padding: 90px 0

        &__details-box
            display: flex
            padding: 40px 0 80px 35px

        &__summary
            height: 72px
            color: #222222
            line-height: 72px
            font-size: 16px
            font-weight: 700
            text-transform: uppercase
            border-bottom: 1px solid #e8e8e8

            &::-webkit-details-marker
                display: none

            &:focus
                outline: none

            &:hover
                cursor: pointer


        &__h4
            color: #222222
            font-size: 13px
            font-weight: 700
            text-transform: uppercase
            margin-bottom: 15px

        &__p
            color: #b3b2b2
            font-size: 13px
            font-weight: 400

            &_red
                color: #ff0d0d
                margin-bottom: 30px

        &__register
            margin-right: 290px

            & p:first-of-type
                margin-bottom: 34px

            & p:nth-of-type(2)
                margin-bottom: 33px

            & p:nth-of-type(3)
                margin-bottom: 15px

            & p:nth-of-type(4)
                margin-bottom: 29px

        &__radio

            &:first-of-type
                margin-bottom: 20px

            &:last-of-type
                margin-bottom: 33px

            & input
                margin-right: 14px

        &__h5
            color: #222222
            font-size: 12px
            font-weight: 700
            text-transform: uppercase

            & span
                color: #ff0d0d
                font-size: 17px
                font-weight: 700

        &__button
            height: 50px
            width: 180px
            color: #4a4a4a
            font-size: 14px
            font-weight: 700
            text-transform: uppercase
            line-height: 50px
            padding: 0 53px
            background-color: #ffffff
            border: 1px solid #eaeaea
            margin-right: 32px
            transition: border-color 0.3s ease

            &:focus
                outline: none

            &:hover
                cursor: pointer
                border: 1px solid $pink


        &__a
            color: #222222
            font-size: 14px
            font-weight: 400
            text-decoration: none
            transition: color 0.3s ease

            &:hover
                color: $pink

        & label
            display: flex
            margin-bottom: 10px

        &__input
            height: 45px
            width: 390px
            padding-left: 15px
            padding-right: 15px
            border: 1px solid #eaeaea
            margin-bottom: 22px

        &__login
            & p:first-of-type
                margin-bottom: 27px


</style>