<template>
  <section class="products" :class="{products__active: useVechicles.length !== 0}">
    <div class="products__grid" v-if="useVechicles.length !== 0">
        <MainVeProduct  v-for="(item, idx) in useVechicles?.data?.data" :key="idx" :card="item"/>
    </div>
    <img class="products__spiner" v-if="useVechicles.length === 0" src="~/assets/images/spinner.gif" alt="">
  </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            useVechicles: useVechicles(),
            useVin: useVin(),
            useCarActive: useCarActive(),
            usepage: usepage(),
            usepageActive: usepageActive(),
            useCount: useCount(),
            useCountTotal: useCountTotal()
        }
    },
    methods: {
        async sendData() {
            this.useVin = this.$route.query.search
            if(!this.$route.query.page) {
                this.usepageActive = 1
            } else {
                this.usepageActive = Number(this.$route.query.page)
            }
            if(!this.$route.query.per_page) {
                this.useCarActive = 9
            } else {
                this.useCarActive = this.$route.query.per_page
            }
            this.useVechicles = await axios.get(`https://api.caiman-app.de/api/cars-test?search=${this.useVin}&per_page=${this.useCarActive}&page=${this.usepageActive}`)
            this.usepage = this.useVechicles.data.meta.last_page
            this.useCount = this.useVechicles.data.meta.to
            this.useCountTotal = this.useVechicles.data.meta.total
        }
    },
    mounted() {
        this.sendData()
    }
}
</script>

<style scoped lang="scss">
.products {
    height: calc(100vh - 300px);
    display: flex;
    align-items: center;
    justify-content: center;

    &__active {
        height: auto;
        display: block;
    }
    &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 30px;
        row-gap: 30px;
        padding: 0 30px;
        margin-bottom: 40px;
    }
    @media(max-width: 1360px) {
        &__grid {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 30px;
        row-gap: 30px;
        }
    }
    @media(max-width: 900px) {
        &__grid {
        grid-template-columns: repeat(1, 1fr);
        column-gap: 30px;
        row-gap: 20px;
        }
    }
}
</style>