<template>
    <div>
        <CatalogItem
                v-for="item in items"
                :key="item.id"
                :product="item"
                @add="handleAddClick(item)"
        />
    </div>
</template>

<script>
    import CatalogItem from "./CatalogItem.vue";

    export default {
        name: "CatalogItemList",
        props: ['url'],
        components: {
            CatalogItem
        },
        methods: {
            handleAddClick(item) {
                let find = this.cartItems.find(product => product.id === +item.id);
                if (find) {
                    fetch(`http://localhost:3000/cart/${find.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({quantity: ++find.quantity}),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
                        .catch((error) => console.log(error))
                } else {
                    fetch('http://localhost:3000/cart', {
                        method: 'POST',
                        body: JSON.stringify({
                            id: +item.id,
                            title: item.title,
                            price: +item.price,
                            quantity: 1,
                            image: item.image}),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
                        .then(() => {
                            this.cartItems.push({...item, quantity: 1});
                        })
                        .catch((error) => console.log(error))
                }
            }
        },
        data() {
            return {
                items: [],
                cartItems:[]
            }
        },
        mounted() {
            fetch(this.url)
                .then((result) => result.json())
                .then(items => {
                    this.items = items;
                })
                .catch((error) => {
                    console.log('Это ошибка' + error);
                });
        }
    }
</script>

<style lang="sass" scoped>

    @import "../../style/variables.sass"

    div
        display: flex
        justify-content: space-between
        flex-wrap: wrap

</style>