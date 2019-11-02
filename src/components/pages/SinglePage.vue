<template>
   <div>
       <header class="heading heading_single-page">
           <div class="container heading__block">
               <h1 class="heading__h1">New Arrivals </h1>
               <ul class="heading__nav">
                   <li><router-link to="/" class="heading__bread-crumbs">Home </router-link>/</li>
                   <li><router-link to="/product" class="heading__bread-crumbs">Men </router-link>/</li>
                   <li><p  class="heading__bread-crumbs heading__bread-crumbs_active">New Arrivals</p></li>
               </ul>
           </div>
       </header>
       <div class="product-box">
           <div class="image-slider">
               <div class="image-slider__item">
                   <img src="../../img/image-slider1.jpg" alt="image">
               </div>
               <div class="image-slider__box">
                   <a href="#" class="image-slider__control image-slider__control_left" title="Previous">
                       <span class="control-icon"><i class="fas fa-angle-left control-icon__item"></i></span>
                   </a>
                   <a href="#" class="image-slider__control image-slider__control_right" title="Next">
                       <span class="control-icon"><i class="fas fa-angle-right control-icon__item"></i></span>
                   </a>
               </div>
           </div>
           <section class=" container product-description">
               <h3 class="product-description__h3">WOMEN COLLECTION</h3>
               <div class="product-description__devider">
                   <div class="product-description__devider_thin"></div>
                   <div class="product-description__devider_bold"></div>
                   <div class="product-description__devider_thin"></div>
               </div>
               <h1 class="product-description__h1">Moschino Cheap And Chic</h1>

               <p class="product-description__p">Compellingly actualize fully researched processes before proactive
                   outsourcing. Progressively syndicate collaborative architectures before
                   <nobr>cutting-edge</nobr>
                   services. Completely visualize parallel core competencies rather than exceptional portals.
               </p>
               <div class="product-description__details">
                   <h2 class="product-description__details_h2">
                       MATERIAL:<span>COTTON</span>
                   </h2>
                   <h2 class="product-description__details_h2">
                       DESIGNER:<span>BINBURHAN</span>
                   </h2>
               </div>
               <div class="product-description__price">
                   $561
               </div>
               <div class="product-description__filter">
                   <div class="product-description__filter_box">
                       <h1 class="product-description__filter_h1">CHOOSE COLOR</h1>
                       <div class="product-description__filter_settings">
                           <div class="settings">
                               <div class="settings__color_red"></div>
                               <p class="settings__text">Red</p>
                           </div>
                           <i class="fas fa-angle-down product-description__angle"></i>
                       </div> </div>
                   <div class="product-description__filter_box">
                       <h1 class="product-description__filter_h1">CHOOSE SIZE</h1>
                       <div class="product-description__filter_settings">
                           <p class="settings__text">XXL</p>
                           <i class="fas fa-angle-down product-description__angle"></i>
                       </div>
                   </div>
                   <div class="product-description__filter_box">
                       <h1 class="product-description__filter_h1">QUANTITY</h1>
                       <input type="text" class="product-description__filter_settings" value="1">
                   </div>
               </div>
               <a href="#" class="product-description__button">
                   <img src="../../img/cart-red.svg" alt="cart">
                   Add to Cart
               </a>
           </section>
           <section class="addition-offer">
               <h1 class="addition-offer__h1">you may like also</h1>
               <CatalogItemList class="container" :url="'http://localhost:3000/offer'" @add="handleAddClick"/>
           </section>
       </div>
   </div>
</template>

<script>
    import CatalogItemList from "../elements/CatalogItemList.vue";
    export default {
        name: "SinglePage",
        methods: {
            handleAddClick(item) {
                this.$emit('add', item);
            }
        },
        components: {
            CatalogItemList
        }
    }
</script>

<style scoped lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    .product-box
        display: flex
        flex-direction: column
        align-items: center

    .image-slider
        max-width: 100vw
        height: 777px
        background-color: #f7f7f7
        &__box
            height: 100%
            width: 100%
            display: flex
            justify-content: space-between
            margin-top: -777px

        &__control
            width: 15%
            height: 100%
            display: flex
            align-items: center

            &_right
                display: flex
                justify-content: flex-end
            &:hover .control-icon
                opacity: 0.5

        .control-icon
            width: 47px
            height: 47px
            background-color: #2a2a2a
            opacity: 0.3
            display: flex
            justify-content: center
            align-items: center
            transition: opacity 0.3s ease

            &:hover
                opacity: 0.5

            &__item
                color: #ffffff
                font-size: 24px


    .product-description
        text-align: center
        border: 1px solid #eaeaea
        display: flex
        flex-direction: column
        align-items: center
        background-color: #ffffff
        margin-top: -86px
        z-index: 1

        &__h3
            color: $pink
            font-size: 14px
            font-weight: 700
            text-transform: uppercase
            padding-top: 73px

        &__h1
            color: #4d4d4d
            font-size: 18px
            font-weight: 400
            text-transform: uppercase
            margin-bottom: 67px

        &__p
            color: #5e5e5e
            font-size: 14px
            font-weight: 300
            max-width: 619px
            margin: 0 auto
            line-height: 24px
            margin-bottom: 28px

        &__details
            max-width: 334px
            margin: 0 auto
            display: flex
            justify-content: space-between

            &_h2
                color: #2f2f2f
                font-size: 14px
                font-weight: 700
                text-transform: uppercase
                margin-right: 44px

                span
                    color: #b9b9b9

        &__price
            color: #ef5b70
            font-size: 24px
            font-weight: 700
            margin-top: 37px
            padding-bottom: 43px
            width: 642px
            border-bottom: 1px solid #eaeaea

        &__devider
            display: flex
            justify-content: center
            align-items: center
            margin-top: 14px
            margin-bottom: 17px

            &_thin
                height: 1px
                width: 42px
                background-color: #eaeaea

            &_bold
                height: 3px
                width: 63px
                background-color: #ef5b70

            &__line
                width: 642px
                height: 1px
                background-color: #ef5b70
                margin: 0 auto

        &__filter
            width: 537px
            display: flex
            justify-content: space-between
            margin-top: 63px

            &_h1
                color: #2f2f2f
                font-size: 14px
                font-weight: 700
                text-transform: uppercase
                text-align: left
                margin-bottom: 16px

            &_settings
                width: 142px
                height: 33px
                border: 1px solid #eaeaea
                display: flex
                justify-content: space-between
                align-items: center
                padding-right: 14px
                padding-left: 9px
                color: #bcbcbc
                font-size: 14px
                font-weight: 400

            .settings
                display: flex
                align-items: center

                &__color_red
                    width: 12px
                    height: 12px
                    background-color: #ef5b70
                    margin-right: 11px

                &__color_green
                    width: 12px
                    height: 12px
                    background-color: green
                    margin-right: 11px

                &__color_black
                    width: 12px
                    height: 12px
                    background-color: black
                    margin-right: 11px

                &__color_blue
                    width: 12px
                    height: 12px
                    background-color: blue
                    margin-right: 11px

                &__text
                    color: #bcbcbc
                    font-size: 14px
                    font-weight: 400

        &__angle
            color: #bcbcbc

        &__button
            height: 55px
            border: 1px solid #ef5b70
            color: #ef5b70
            font-size: 16px
            font-weight: 700
            display: flex
            justify-content: center
            align-items: center
            padding: 0 206px
            margin-top: 28px
            margin-bottom: 122px

            & img
                margin-right: 15px

            &:hover
                background-color: #ef5b70
                color: #fff



    .addition-offer
        margin-top: 120px

        &__h1
            color: #4d4d4d
            font-size: 24px
            font-weight: 400
            text-transform: uppercase
            text-align: center
            margin-bottom: 72px



</style>