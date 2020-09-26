<template>
    <header class="header">
        <div class="container header__content">
            <div class="header__block">
                <router-link to="/" class="header__logo"><img class="logo_img" src="../../img/logo.png"
                                                              alt="logo">bran<span
                        class="d">d</span></router-link>
                <form action="#" class="header__form">
                    <div class="header__form_browse">Browse<img src="../../img/arrow.png" alt="arrow" class="arrow">
                    </div>
                    <input type="text" placeholder="Search for Item..." class="header__form_input" v-model="query">
                    <div @click="handleSearchClick(query)" class="header__form_search">
                        <img src="../../img/search.png" alt="search" class="search">
                    </div>
                </form>
            </div>
            <div class="header__block header__block_right">
                <div class="header__cart">
                    <a href="#" class="header__cart_link" @click="handleShowClick"><img src="../../img/cart.svg"
                                                                                        alt="cart"></a>
                    <!--                    <div class="count">{{ cartItemsCount }} </div>-->
                    <CartDrop ref="cart" v-show="show"/>

                </div>
                <router-link to="/cart" class="button header__button ">
                    My Account
                    <i class="fas fa-caret-down"></i>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
    import CartDrop from "./CartDrop.vue";

    export default {
        name: "Header",
        data() {
            return {
                show: false,
                query: '',
            }
        },
        methods: {
            handleShowClick(event) {
                event.preventDefault();
                this.show = !this.show;
            },
            handleSearchClick(query) {
                this.$emit('search', query);
                this.$router.push('search-page');
            },
        },
        // computed: {
        //     cartItemsCount() {
        //         return this.$refs.cart.cartItems.reduce((sum, current) => sum + current.quantity, 0);
        //     }
        // },
        components: {
            CartDrop
        }
    }
</script>

<style lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    @import "../../style/button-red.css"

    @import "../../style/animations.css"


    .header
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.17)
        border: 1px solid #ececec
        background-color: #ffffff
        height: 100px

        &__logo
            color: #222222
            font-size: 27px
            font-weight: 300
            text-transform: uppercase
            display: flex
            align-items: center

        &__form
            margin-left: 37px
            display: flex

        &__form_browse
            height: 38px
            border-radius: 3px 0 0 3px
            border: 1px solid #e6e6e6
            border-right: none
            background-color: #cdcdcc
            background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%)
            line-height: 38px
            padding-left: 12px
            padding-right: 12px

        .d
            color: $pink
            font-weight: 400

        &__form_input
            width: 280px
            height: 38px
            border: 1px solid #e6e6e6
            background-color: #ffffff
            color: #a4a4a4
            font-size: 14px
            font-weight: 100
            letter-spacing: 0.35px
            padding-left: 16px
            padding-right: 16px

        &__form_search
            width: 38px
            height: 38px
            border-radius: 0 3px 3px 0
            border: 1px solid #e6e6e6
            border-left: none
            background-color: #ffffff
            display: flex
            align-items: center
            justify-content: center

            &:hover
                cursor: pointer

        .arrow
            padding-left: 8px

        &__block
            display: flex
            align-items: center

            &_right
                position: relative


        &__content
            height: 100%
            display: flex
            justify-content: space-between
            align-items: center

        &__cart_link
            margin-right: 26px
            position: relative


        .logo_img
            margin-right: 13px

        &__button
            transition: all 0.2s ease-in

            &:hover
                outline: 1px solid $pink
                color: $pink
                background-color: #ffffff

    .header__cart
        height: 70px
        display: flex
        align-items: center


    .count
        height: 15px
        width: 15px
        background-color: $pink
        position: absolute
        border-radius: 50%
        text-align: center
        line-height: 15px
        font-size: 12px
        color: #fff
        transition: 0.2s
        top: 40px
        right: 150px

</style>