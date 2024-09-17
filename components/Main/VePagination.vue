<template>
  <section class="pagination">
    <p class="pagination__showing">Showing {{useCount}} out of {{useCountTotal}} </p>
    <div class="pagination__position">
        <img class="pagination__left pagination__arrow" @click="prevPage" src="~/assets/images/chevron_down.svg" alt="">
        <p class="pagination__number">{{usepageActive}}</p>
        <p class="pagination__of">of</p>
        <p class="pagination__number">{{usepage}}</p>
        <img class="pagination__right pagination__arrow" @click="nextPage" src="~/assets/images/chevron_down.svg" alt="">
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            useCount: useCount(),
            useCountTotal: useCountTotal(),
            usepage: usepage(),
            useCarActive: useCarActive(),
            usepageActive: usepageActive(),
            useVin: useVin(),
            useVechicles: useVechicles(),
        }
    },
    methods: {
        async nextPage() {
            if(this.usepageActive < this.usepage) {
                this.usepageActive += 1
                const currentQuery = { ...this.$route.query };
                currentQuery.page = this.usepageActive
                await this.$router.push({ query: currentQuery });

                this.useVechicles = await axios.get(`https://api.caiman-app.de/api/cars-test?search=${this.useVin}&per_page=${this.useCarActive}&page=${this.usepageActive}`)
                this.usepage = this.useVechicles.data.meta.last_page
                this.useCount = this.useVechicles.data.meta.to
                this.useCountTotal = this.useVechicles.data.meta.total
            }
        },
        async prevPage() {
            if(this.usepageActive > 1) {
                this.usepageActive -= 1
                const currentQuery = { ...this.$route.query };
                currentQuery.page = this.usepageActive
                await this.$router.push({ query: currentQuery });

                this.useVechicles = await axios.get(`https://api.caiman-app.de/api/cars-test?search=${this.useVin}&per_page=${this.useCarActive}&page=${this.usepageActive}`)
                this.usepage = this.useVechicles.data.meta.last_page
                this.useCount = this.useVechicles.data.meta.to
                this.useCountTotal = this.useVechicles.data.meta.total
            }
        }
    }
}
</script>

<style scoped lang="scss">
.pagination {
    padding: 0 35px 50px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__showing {
        color: rgba($color: #293148, $alpha: .8);
        font-size: 18px;
        font-weight: 600;
    }
    &__position {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__arrow {
        cursor: pointer;
        transition: all .3s ease;
    }
    &__left:hover {
        transform: rotate(90deg) scale(1.2);
    }
    &__right:hover {
        transform: rotate(-90deg) scale(1.2);
    }
    &__left {
        transform: rotate(90deg);
    }
    &__right {
        transform: rotate(-90deg);
    }
    &__number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        border: 2px solid #E4E4E4;
    }
    &__of {
        margin: 0 10px;
        font-size: 18px;
    }
}
</style>