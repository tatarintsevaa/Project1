<template>
    <div class="subscribe">
        <div class="container subscribe__box">
            <div class="subscribe__block subscribe__block_left">
                <div class="subscribe-photo"><img src="../../img/subscribe-photo.png" alt="subscribe-photo"></div>
                <div class="subscribe__block_left_text">
                    <p class="subscribe__p_1">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                    <h5 class="subscribe__h3">Bin Burhan</h5>
                    <p class="subscribe__p_2">Dhaka, Bd</p>
                </div>
            </div>
            <div class="subscribe__block subscribe__block_riht">
                <h3 class="subscribe__block_riht__h3">Subscribe</h3>
                <h5 class="subscribe__block_riht__h5">FOR OUR NEWLETTER AND PROMOTION</h5>
                <form action="#" class="subscribe__form">
                    <input type="email" placeholder="Enter Your Email" class="subscribe__input">
                    <input type="submit" class="button button_input" value="Subscribe">
                    <!-- <a href="#" class="button button_input">Subscribe</a> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Subscribe"
    }
</script>

<style lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    @import "../../style/button-red.css"

    .subscribe
        height: 438px
        background-image: url(../../img/footer_image.jpg)
        background-position: center
        background-repeat: no-repeat

        &__box
            height: 100%
            display: flex

        &__block
            width: $width / 2


        &__p_1
            color: #222224
            font-size: 16px
            font-style: italic
            letter-spacing: 0.4px
            line-height: 26px
            margin-bottom: 19px


        &__h3
            color: $pink
            font-size: 16px
            font-weight: 700
            letter-spacing: 0.4px

        &__p_2
            color: #222224
            font-size: 12px
            font-weight: 300
            letter-spacing: 0.3px
            line-height: 14px

        &__block_left
            display: flex
            padding-top: 123px


        &__block_left_text
            margin-left: 28px


        &__block_riht__h3
            color: #222224
            font-size: 24px
            font-weight: 400
            letter-spacing: 0.6px
            text-transform: uppercase
            line-height: 42px

        &__block_riht__h5
            color: #222224
            font-size: 14px
            font-weight: 400
            letter-spacing: 0.35px
            margin-bottom: 35px

        &__input
            opacity: 0.67
            color: #222224
            font-size: 14px
            font-weight: 400
            background-color: #e1e1e1
            border: none
            padding-left: 28px
            padding-right: 28px
            border-radius: 23px 0 0 23px

        &__form
            display: flex


        &__block_riht
            display: flex
            flex-direction: column
            justify-content: center
            align-content: center
            align-items: center

    .button_input
        display: block
        height: 46px
        color: #ffffff
        font-size: 14px
        font-weight: 400
        letter-spacing: 0.35px
        line-height: 46px
        border-radius: 0 23px 23px 0
        padding-left: 20px
        padding-right: 20px
        border: none

</style>