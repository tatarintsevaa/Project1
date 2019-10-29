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
                this.$emit('add', item);
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