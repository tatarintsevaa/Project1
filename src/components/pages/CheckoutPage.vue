<template>
    <div>
        <header class="heading heading_single-page">
            <div class="container heading__block">
                <h1 class="heading__h1">New Arrivals </h1>
                <ul class="heading__nav">
                    <li><router-link to="/" class="heading__bread-crumbs">Home </router-link>/</li>
                    <li><router-link to="/cart" class="heading__bread-crumbs">Shopping cart </router-link>/</li>
                    <li><p  class="heading__bread-crumbs heading__bread-crumbs_active">Checkout</p></li>
                </ul>
            </div>
        </header>
        <section class="container checkout">
            <details class="checkout__details">
                <summary class="checkout__summary">01. Shipping Adress</summary>
                <div class="checkout__details-box">
                    <form action="#" class="checkout__register">
                        <h4 class="checkout__h4">Check as a guest or register</h4>
                        <p class="checkout__p">Register with us for future convenience</p>
                        <label class="checkout__radio"><input type="radio" name="register"><h5 class="checkout__h5">checkout as guest</h5></label>
                        <label class="checkout__radio"><input type="radio" checked name="register"><h5 class="checkout__h5">register</h5></label>
                        <h4 class="checkout__h4">register and save time!</h4>
                        <p class="checkout__p">Register with us for future convenience</p>
                        <p class="checkout__p"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</p>
                        <p class="checkout__p"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status
                        </p>
                        <input type="submit" value="Continue" class="checkout__button" >
                    </form>
                    <form action="#" class="checkout__login">
                        <h4 class="checkout__h4">Already registed?</h4>
                        <p class="checkout__p">Please log in below</p>
                        <label for="email" class="checkout__h5">EMAIL ADDRESS<span>*</span></label>
                        <input type="email" id="email" class="checkout__input">
                        <label for="password" class="checkout__h5">PASSWORD<span>*</span></label>
                        <input type="password" id="password" class="checkout__input">
                        <p class="checkout__p checkout__p_red">* Please log in below</p>
                        <input type="submit" value="log in" class="checkout__button">
                        <a href="#" class="checkout__a">Forgot Password ?</a>
                    </form>
                </div>
            </details>
            <details class="checkout__details">
                <summary class="checkout__summary">02. BILLING INFORMATION</summary>
            </details>
            <details class="checkout__details">
                <summary class="checkout__summary">03. SHIPPING INFORMATION</summary>
            </details>
            <details class="checkout__details">
                <summary class="checkout__summary">04. SHIPPING METHOD</summary>
            </details>
            <details class="checkout__details">
                <summary class="checkout__summary">05. PAYMENT METHOD</summary>
            </details>
            <details class="checkout__details">
                <summary class="checkout__summary">06. ORDER REVIEW</summary>
            </details>
        </section>
    </div>
</template>

<script>
    export default {
        name: "CheckoutPage"
    }
</script>

<style scoped lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

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