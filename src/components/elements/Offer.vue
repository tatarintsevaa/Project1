<template>
    <div class="container offer">
        <div class="offer__image">
            <div class="offer__image__text">
                <h1 class="offer__h1">30% <span class="offer_red">OFFER</span></h1>
                <h3 class="offer__h3">FOR WOMEN</h3>
            </div>
        </div>
        <div class="offer__conditions">
            <article class="offer__conditions__block">
                <div class="offer__conditions__image"><img src="../../img/car.svg" alt="car"></div>
                <div class="offer__conditions__text">
                    <h3 class="offer__conditions__h3">Free Delivery</h3>
                    <p class="offer__conditions__p">Worldwide delivery on all. Authorit tively morph next-generation innov
                        tion with extensive models.</p>
                </div>
            </article>
            <article class="offer__conditions__block">
                <div class="offer__conditions__image"><img src="../../img/percent.svg" alt="percent"></div>
                <div class="offer__conditions__text">
                    <h3 class="offer__conditions__h3">Sales & discounts</h3>
                    <p class="offer__conditions__p">Worldwide delivery on all. Authorit tively morph next-generation innov
                        tion with extensive models.</p>
                </div>
            </article>
            <article class="offer__conditions__block">
                <div class="offer__conditions__image"><img src="../../img/crown.svg" alt="crown"></div>
                <div class="offer__conditions__text">
                    <h3 class="offer__conditions__h3">Quality assurance</h3>
                    <p class="offer__conditions__p">Worldwide delivery on all. Authorit tively morph next-generation innov
                        tion with extensive models.</p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Offer"
    }
</script>

<style scoped lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    .offer
        height: 529px
        display: flex
        margin-bottom: 97px

        &__image
            padding-left: 39px
            padding-top: 146px
            width: 767px
            height: 100%
            background-image: url(../../img/offer_image.jpg)
            box-sizing: border-box

        &__h1
            color: #ffffff
            font-size: 54px
            font-weight: 700
            text-transform: uppercase
            letter-spacing: 1.5px

        &__h3
            color: #ffffff
            font-weight: 700
            text-transform: uppercase
            font-size: 32px
            letter-spacing: 0.9px

        &_red
            color: $pink

        &__conditions__image
            margin-bottom: 17px

        &__conditions__text
            padding-left: 35px

        &__conditions__h3
            margin-bottom: 17px
            color: #fbfbfb
            font-size: 20px
            font-weight: 700
            letter-spacing: 0.5px

        &__conditions__p
            color: #fbfbfb
            font-size: 14px
            font-weight: 300
            letter-spacing: 0.35px
            text-align: justify-all

        &__conditions
            padding-left: 40px
            padding-right: 40px
            background-color: #222224
            width: 373px
            display: flex
            flex-direction: column
            justify-content: space-around

        &__conditions__block
            display: flex
            justify-content: space-around

</style>