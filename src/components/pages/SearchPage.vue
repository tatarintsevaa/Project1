<template>
    <div ref="search">
        <div v-if="!filteredItems.length" class="container search-empty"> No results were found for your request. </div>
        <table v-else class="container cart">
            <tr class="cart__heading">
                <td class="cart__product-details">Product Details</td>
                <td class="cart__unite-price">unite Price</td>
            </tr>
            <tr class="cart__item" v-for="item in filteredItems" :key="item.id">
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
            </tr>
        </table>
    </div>
</template>

<script>

    export default {
        name: "SearchPage",
        props: ['query'],
        data() {
            return {
                items: [],
            }
        },
        methods: {
            handle(query) {
                console.log(query);
            }
        },
        mounted() {
            fetch('http://localhost:3000/products')
                .then((result) => result.json())
                .then(items => {
                    this.items = items;
                })
                .catch((error) => {
                    console.log('Это ошибка' + error);
                });
        },
        computed: {
            filteredItems() {
                console.log(this.query);
                const regExp = new RegExp(this.query, 'i');
                return this.items.filter(product => regExp.test(product.title));
            }
        }
    }
</script>

<style scoped lang="sass">
    .search-empty
        text-align: center
        padding: 30px 0

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

        .star-rating
            color: #e4af48
            font-size: 10px
</style>