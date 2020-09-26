<template>
    <div>
        <header class="heading">
            <div class="container heading__block">
                <h1 class="heading__h1">New Arrivals </h1>
                <ul class="heading__nav">
                    <li><router-link to="/" class="heading__bread-crumbs">Home </router-link>/</li>
                    <li><p class="heading__bread-crumbs heading__bread-crumbs_active">Products </p></li>
                </ul>
            </div>
        </header>
        <div class="container product__content">
            <div class="sidebar">
                <details class="sidebar__category">
                    <summary class="sidebar__summary">Category</summary>
                    <ul class="sidebar__ul">
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Accessories</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Bags</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Denim</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Hoodies & Sweatshirts</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Jackets & Coats</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Pants</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Polos</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Shirts</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Shoes</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Shorts</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Sweaters & Knits</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">T-Shirts</a></li>
                        <li class="sidebar__list"><a href="#" class="sidebar__links">Tanks</a></li>
                    </ul>
                </details>
                <details class="sidebar__category">
                    <summary class="sidebar__summary">Brand</summary>
                </details>
                <details class="sidebar__category">
                    <summary class="sidebar__summary">designer</summary>
                </details>
            </div>
            <div class="product__block">
                <div class="product__settings-box">
                    <section class="product__settings product__settings_tranding">
                        <h3 class="product__settings__h3">Trending now</h3>
                        <div class="tranding__names">
                            <ul class="tranding__names__ul">
                                <li class="tranding__names__li"><a href="#">Bohemian</a></li>
                                <li class="tranding__names__li"><a href="#">Floral</a></li>
                                <li class="tranding__names__li"><a href="#">Lace</a></li>
                                <li class="tranding__names__li"><a href="#">Floral</a></li>
                                <li class="tranding__names__li"><a href="#">Lace</a></li>
                                <li class="tranding__names__li"><a href="#">Bohemian</a></li>
                            </ul>
                        </div>
                    </section>
                    <section class="product__settings product__settings_size">
                        <h3 class="product__settings__h3">Size </h3>
                        <form action="#" class="product__settings__form">
                            <div class="form__box">
                                <label class="product__settings__form__checkbox"><input type="checkbox">
                                    <p class="checkbox__text">xxs</p>
                                </label>
                                <label class="product__settings__form__checkbox"><input type="checkbox">
                                    <p class="checkbox__text">l</p>
                                </label>
                            </div>
                            <div class="form__box">
                                <label class="product__settings__form__checkbox"><input type="checkbox">
                                    <p class="checkbox__text">xs</p>
                                </label>
                                <label class="product__settings__form__checkbox"><input type="checkbox">
                                    <p class="checkbox__text">xl</p>
                                </label>
                            </div>
                            <div class="form__box">
                                <label class="product__settings__form__checkbox"><input type="checkbox">
                                    <p class="checkbox__text">s</p>
                                </label>
                                <label class="product__settings__form__checkbox"><input type="checkbox">
                                    <p class="checkbox__text">xxl</p>
                                </label>
                            </div>
                            <div class="form__box">
                                <label class="product__settings__form__checkbox"><input type="checkbox">
                                    <p class="checkbox__text">m</p>
                                </label>
                            </div>
                        </form>
                    </section>
                    <section class="product__settings product__settings_price">
                        <h3 class="product__settings__h3">pRICE</h3>
                        <label>
                            <input type="range" min="0" max="400" value="30" step="1">
                        </label>
                    </section>
                </div>
                <div class="product__sort">
                    <div class="sort__box">
                        <div class="sort__text">Sort By</div>
                        <a href="#" class="sort__text sort__text_drop">Name<i
                                class="fas fa-caret-down fas_sort"></i></a>
                    </div>
                    <div class="sort__box">
                        <div class="sort__text">Show</div>
                        <a href="#" class="sort__text sort__text_drop">09<i
                                class="fas fa-caret-down fas_sort"></i></a>
                    </div>
                </div>
                <CatalogItemList  :url="'http://localhost:3000/products'" @add="handleAddClick"/>
                <div class="pagination_block">
                    <nav class="pagination">
                        <ul class="pagination__ul">
                            <li class="page_item"><a href="#" class="page_link"><i class="fas fa-angle-left"></i></a></li>
                            <li class="page_item"><a href="#" class="page_link">1</a></li>
                            <li class="page_item"><a href="#" class="page_link">2</a></li>
                            <li class="page_item"><a href="#" class="page_link">3</a></li>
                            <li class="page_item"><a href="#" class="page_link">4</a></li>
                            <li class="page_item"><a href="#" class="page_link">5</a></li>
                            <li class="page_item"><a href="#" class="page_link">6</a></li>
                            <li class="page_item"><a href="#" class="page_link"><i class="fas fa-angle-right"></i></a></li>
                        </ul>
                    </nav>
                    <a href="#" class="pagination_button">View All</a>
                </div>
            </div>
        </div>
        <Conditions />
    </div>
</template>

<script>
    import CatalogItemList from "../elements/CatalogItemList.vue";
    import Conditions from "../elements/Conditions.vue";
    export default {
        name: "ProductPage",
        components: {
            CatalogItemList,
            Conditions,
        },
        methods: {
            handleAddClick(item) {
                this.$emit('add', item);
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "../../style/variables"
    @import "../../style/normal.css"

    .sidebar
        &__summary
            width: 243px
            height: 37px
            line-height: 37px
            color: #6f6e6e
            font-size: 14px
            font-weight: 700
            text-transform: uppercase
            border-left: 3px solid #ef5b70
            border-bottom: 1px solid #ebebeb
            margin-bottom: 18px
            display: flex
            justify-content: space-between
            padding-left: 10px
            box-sizing: border-box
            outline: none



        &__summary::-webkit-details-marker
            display: none

        &__summary::after
            font-family: Font Awesome\ 5 Free, sans-serif
            content: '\f0d7'


        &__category[open] > summary
            color: #ef5b70


        &__category[open] > summary::after
            font-family: Font Awesome\ 5 Free, sans-serif
            content: '\f0d8'

        &__ul
            list-style-type: none
            margin-bottom: 40px


        &__links
            color: #6f6e6e
            font-size: 14px
            font-weight: 400


        &__list
            padding-left: 12px
            margin-bottom: 15px


        &__links:hover
            color: #ef5b70





    .product__content
        display: flex
        justify-content: space-between
        margin-bottom: 110px


    .product__settings
        width: 263px
        margin-right: 30px

    .product__settings:last-of-type
        margin-right: 0


    .product__settings-box
        display: flex
        justify-content: space-between
        margin-bottom: 30px


    .product__settings__h3
        color: #6f6e6e
        font-size: 14px
        font-weight: 700
        text-transform: uppercase
        margin-bottom: 24px


    .tranding__names__ul
        list-style-type: none
        display: flex
        flex-wrap: wrap
        width: 176px
        color: #6f6e6e
        font-size: 14px
        font-weight: 400


    .tranding__names__li
        line-height: 12px
        padding-right: 8px
        padding-left: 8px
        border-right: 1px solid #dfdfdf
        margin-bottom: 18px

    .tranding__names__li a
        display: block
        text-decoration: none
        color: #6f6e6e
        font-size: 14px
        font-weight: 400

    .tranding__names__li a:hover
        color: #ef5b70

    .tranding__names__ul .tranding__names__li:nth-child(3n)
        border-right: none

    .tranding__names__ul .tranding__names__li:nth-child(3n+1)
        padding-left: 0


    .checkbox_text
        color: #6f6e6e
        font-size: 14px
        font-weight: 400
        text-transform: uppercase


    .product__settings__form
        display: flex
        justify-content: space-between


    .product__settings__form .product__settings__form__checkbox:nth-child(n+5)
        margin-right: 18px


    .product__settings__form__checkbox input
        position: absolute
        z-index: -1
        opacity: 0
        margin: 10px 0 0 20px

    .checkbox__text
        position: relative
        padding: 0 0 0 20px
        cursor: pointer
        color: #6f6e6e
        font-size: 14px
        font-weight: 400
        text-transform: uppercase
        margin-bottom: 10px


    .checkbox__text:before
        content: ''
        position: absolute
        left: 0
        width: 13px
        height: 13px
        border: 1px solid #ebebeb
        background-color: #ffffff


    .checkbox__text:after
        content: ''
        position: absolute
        width: 5px
        height: 8px
        border-right: 2px solid #000
        border-bottom: 2px solid #000
        border-radius: 1px
        transform: rotate(45deg)
        left: 4px
        top: 1px


    .product__settings__form__checkbox input:not(:checked) + .checkbox__text:after
        opacity: 0


    .product__settings__form__checkbox input:checked + .checkbox__text:after
        opacity: 1


    .product__settings__form__checkbox
        margin-bottom: 13px


    .product__sort
        height: 50px
        background-color: #f3f3f3
        padding: 10px
        box-sizing: border-box
        display: flex
        margin-bottom: 50px


    .sort__box
        height: 30px
        border: 1px solid #ebebeb
        background-color: #ffffff
        display: flex
        align-items: center
        margin-right: 10px

    .sort__text
        padding: 7px 10px
        box-sizing: border-box
        border-right: 1px solid #ebebeb
        color: #6f6e6e
        font-size: 14px
        font-weight: 400

    .fas_sort
        margin-left: 20px

    .sort__text_drop
        border-right: none

    .sort__text_drop:hover
        color: $pink


    .sidebar
        margin-right: 55px

    .product__add_2
        position: static
        width: 57px
        height: 38px
        border-radius: 3px


    .product__add_1
        position: static
        border-radius: 3px


    .product__linkbox
        position: absolute
        top: 98px
        left: 70px
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        width: 123px


    .pagination
        border-radius: 3px
        border: 1px solid #ebebeb
        background-color: #ffffff
        padding: 0 8px


    .pagination__ul
        list-style-type: none
        height: 100%
        display: flex
        align-items: center


    .pagination__ul .page_item:first-of-type .page_link,
    .pagination__ul .page_item:last-of-type .page_link
        color: #aaaaaa


    .pagination_button
        height: 44px
        border-radius: 3px
        border: 1px solid #ef5b70
        padding: 0 45px
        color: #ef5b70
        font-size: 16px
        font-weight: bold
        text-align: center
        line-height: 44px
        transition: all 0.2s ease-in


    .pagination_button:hover
        border: 1px solid #fff
        color: #fff
        background-color: #ef5b70


    .pagination_block
        display: flex
        justify-content: space-between

    .page_link
        color: #c4c4c4
        font-size: 16px
        font-weight: bold
        padding: 12px 8px
        transition: all 0.2s ease-in


    .page_link:hover
        color: #ef5b70 !important

</style>