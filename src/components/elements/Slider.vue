<template>
    <div class="slider">
        <div class="container slider__content">
            <div class="slider__text">
                <h2 class="slider__h2">THE BRAND</h2>
                <h3 class="slider__h3">OF LUXERIOUS <span class="fasion">FASHION</span></h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slider"
    }
</script>

<style lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    .slider
        height: 613px
        background-color: #e8e8e8

        &__content
            height: 100%
            display: flex
            align-items: center
            background-image: url(../../img/slider_back.png)
            background-position: 0 -52px

        &__h2
            color: #222222
            font-size: 60px
            font-weight: 700
            text-transform: uppercase
            letter-spacing: 1.5px
            line-height: 56px
            margin-bottom: 20px

        &__h3
            color: #222222
            font-size: 40px
            font-weight: 700
            text-transform: uppercase
            letter-spacing: 1px
            line-height: 32px

        .slider__text
            padding-left: 12px
            border-left: 12px solid $pink
</style>