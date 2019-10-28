<template>
    <footer class="footer">
        <div class="container footer__box">
            <div class="footer__description">
                <a href="#" class="header__logo"><img class="logo_img" src="../../img/logo.png" alt="logo">bran<span
                        class="d">d</span></a>
                <p class="footer__description__p">Objectively transition extensive data rather than cross functional
                    solutions. Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits.
                    Intrinsicly syndicate an&nbsp;expanded array of&nbsp;processes and cross-unit partnerships.
                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>

                <p class="footer__description__p">Objectively strategize seamless relationships via resource sucking testing
                    procedures. Proactively cultivate next-generation results for value-added methodologies. Dynamically
                    plagiarize unique methodologies after performance based methodologies. Monotonectally empower
                    stand-alone mindshare rather than ubiquitous opportunities. Dynamically orchestrate resource sucking
                    scenarios after alternative synergy.
                    Compellingly envisioneer corporate methods of&nbsp;empowerment before standards compliant technologies.
                    Objectively facilitate progressive.
                </p>
            </div>
            <nav class="footer__nav">
                <h4 class="footer__nav__h4">COMPANY</h4>
                <a href="#" class="footer__nav__links">Home</a>
                <a href="#" class="footer__nav__links">Shop</a>
                <a href="#" class="footer__nav__links">About</a>
                <a href="#" class="footer__nav__links">How It Works</a>
                <a href="#" class="footer__nav__links">Contact</a>
            </nav>
            <nav class="footer__nav">
                <h4 class="footer__nav__h4">INFORMATION</h4>
                <a href="#" class="footer__nav__links">Tearms & Condition</a>
                <a href="#" class="footer__nav__links">Privacy Policy</a>
                <a href="#" class="footer__nav__links">How to Buy</a>
                <a href="#" class="footer__nav__links">How to Sell</a>
                <a href="#" class="footer__nav__links">Promotion</a>
            </nav>
            <nav class="footer__nav">
                <h4 class="footer__nav__h4">SHOP CATEGORY</h4>
                <a href="#" class="footer__nav__links">Men</a>
                <a href="#" class="footer__nav__links">Women</a>
                <a href="#" class="footer__nav__links">Child</a>
                <a href="#" class="footer__nav__links">Apparel</a>
                <a href="#" class="footer__nav__links">Brows All</a>
            </nav>
        </div>
        <div class="footer__social">
            <div class="container footer__social__box">
                <div class="footer__social__text">&copy; 2017 Brand All Rights Reserved.</div>
                <div>
                    <a href="#"><i class="fab fa-facebook-f footer__social__links"></i></a>
                    <a href="#"><i class="fab fa-twitter footer__social__links"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in footer__social__links"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p footer__social__links"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g footer__social__links"></i></a>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="sass">
    @import "../../style/normal.css"

    @import "../../style/variables.sass"

    .footer
        height: 537px
        margin-top: -537px

        &__box
            padding-top: 100px
            padding-bottom: 100px
            display: flex
            justify-content: space-between

        &__description__p
            color: #898989
            font-size: 14px
            font-weight: 300
            letter-spacing: 0.35px
            margin-top: 29px

        &__nav__h4
            color: $pink
            font-size: 18px
            font-weight: 700
            text-transform: uppercase
            letter-spacing: 0.45px
            margin-bottom: 12px

        &__nav
            display: flex
            flex-direction: column
            justify-content: space-between


        &__nav__links
            color: #898989
            font-size: 16px
            font-weight: 400
            letter-spacing: 0.4px
            transition: color 0.2s linear
            &:hover
                color: $pink

        &__description
            width: 427px

        &__social
            height: 79px
            background-color: #e6e6e6

        &__social__box
            display: flex
            justify-content: space-between
            align-items: center
            height: 100%

        &__social__text
            color: #7a7a7a
            font-size: 16px
            font-weight: 400
            letter-spacing: 0.4px


        &__social__links
            height: 32px
            width: 32px
            background-color: #fff
            text-align: center
            line-height: 32px
            color: #b2b2b2
            margin-left: 8px
            transition: all 0.2s linear

        &__social__links:hover
            color: #f7f7f8
            background-color: $pink
</style>