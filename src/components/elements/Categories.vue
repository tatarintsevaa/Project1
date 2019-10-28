<template>
    <div class="container category">
        <div class="category__content">
            <a href="#" class="category__item_link">
                <div class="category__item category__item_big">
                    <div class="category__badge">
                        <h4 class="category__h4">hOT dEAL</h4>
                        <h2 class="category__h2">FOR MEN</h2>
                    </div>
                    <img src="../../img/category_men.jpg" alt="category_men">
                </div>
            </a>
            <a href="#" class="category__item_link">
                <div class="category__item categiry__item_mini categiry__item_wallet">
                    <div class="category__badge">
                        <h4 class="category__h4">LUXIROUS & trendy</h4>
                        <h2 class="category__h2">ACCESSORIES</h2>
                    </div>
                    <img src="../../img/category_acc.jpg" alt="category_acc">
                </div>
            </a>
        </div>
        <div class="category__content">
            <a href="#" class="category__item_link">
                <div class="category__item categiry__item_mini">
                    <div class="category__badge">
                        <h4 class="category__h4">30% offer</h4>
                        <h2 class="category__h2">women</h2>
                    </div>
                    <img src="../../img/categori_women.jpg" alt="category_acc">
                </div>
            </a>
            <a href="#" class="category__item_link">
                <div class="category__item category__item_big">
                    <div class="category__badge">
                        <h4 class="category__h4">new arrivals</h4>
                        <h2 class="category__h2">FOR kids</h2>
                    </div>
                    <img src="../../img/category_kids.jpg" alt="category_kids">
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Categories"
    }
</script>

<style lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    .category
        margin-top: 98px
        display: flex
        justify-content: space-between

        &__item_mini
            width: 560px
            height: 261px
            background-color: #dadad2

        &__item_big
            width: 560px
            height: 542px

        &__content div:first-of-type
            margin-bottom: 20px

        &__h2
            color: $pink
            font-size: 30px
            letter-spacing: 0.75px
            font-weight: 900
            text-transform: uppercase

        &__badge
            height: 82px
            background-color: #ffffff
            padding: 16px 20px
            position: absolute
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            box-sizing: border-box
            margin-top: 26px
            border-left: 1px solid #e8e9eb

        &__item
            position: relative
            transition: 0.2s linear
            &:hover
                box-shadow: 0 8px 10px rgba(0, 0, 0, 0.16)
                transform: scale(1.02)


        &__h4
            color: #222222
            font-size: 18px
            font-weight: 900
            text-transform: uppercase
            letter-spacing: 0.45px
</style>