<template>
  <section class="navigation">
    <div class="navigation__position">
        <div class="navigation__container navigation__container_input">
            <input class="navigation__input" type="text" placeholder="Search VIN" @keydown.enter="searchVin" v-model="useVin">
            <img class="navigation__zoom" @click="searchVin" src="~/assets/images/zoom.svg" alt="">
        </div>
        <div class="navigation__container">
            <p class="navigation__text">Select vehicles per page:</p>
            <div class="navigation__number">
                <div class="navigation__main" @click="isActive = !isActive">
                    <p class="navigation__info">{{useCarActive}}</p>
                    <img src="~/assets/images/chevron_down.svg" alt="">
                </div>
                <div class="navigation__log" :class="{navigation__log_active: isActive}">
                    <div class="navigation__scroll" :class="{navigation__scroll_active: isActive}">
                        <div class="navigation__box" @click="choosePage(item)" v-for="(item, index) in usePage" :key="index">{{item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="navigation__position">
        <button class="navigation__btn">
            <img class="navigation__plus" src="~/assets/images/plus.svg" alt="">
            Add Vechicle
        </button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            usePage: 9,
            useCarActive: useCarActive(),
            isActive: false,
            useVin: useVin(),
            useVechicles: useVechicles(),
            usepage: usepage(),
            usepageActive: usepageActive(),
            useCount: useCount()
        }
    },
    methods: {
        async choosePage(page) {
            this.usepageActive = 1
            this.useCarActive = page
            this.isActive = false

            const currentQuery = { ...this.$route.query };
            currentQuery.per_page = this.useCarActive
            await this.$router.push({ query: currentQuery });
            
            this.useVechicles = await axios.get(`https://api.caiman-app.de/api/cars-test?search=${this.useVin}&per_page=${this.useCarActive}&page=1`)
            this.usepage = this.useVechicles.data.meta.last_page
            this.useCount = this.useVechicles.data.meta.to
            this.useCountTotal = this.useVechicles.data.meta.total
            console.log(this.useVechicles)
        },
        async searchVin() {
            this.usepageActive = 1
            const currentQuery = { ...this.$route.query };

            if(this.useVin.length === 0) {
                currentQuery.search = undefined
            } else {
                currentQuery.search = this.useVin
            }

            await this.$router.push({ query: currentQuery });
            this.useVechicles = await axios.get(`https://api.caiman-app.de/api/cars-test?search=${this.useVin}&per_page=${this.useCarActive}&page=1`)
            this.usepage = this.useVechicles.data.meta.last_page
            this.useCount = this.useVechicles.data.meta.to
            this.useCountTotal = this.useVechicles.data.meta.total
        }
    }
}
</script>

<style scoped lang="scss">
.navigation {
    padding: 35px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__container {
        position: relative;
    }
    &__position {
        display: flex;
        align-items: center;
    }
    &__container_input {
        margin-right: 30px;
    }
    &__input {
        padding: 10px 40px 10px 15px;
        border: 1px solid #E4E4E4;
        border-radius: 8px;
        width: 350px;
        font-weight: 600;
        color: rgba($color: #293148, $alpha: .8);
    }
    &__zoom {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all .3s ease;
    }
    &__zoom:hover {
        transform: translateY(-50%) scale(1.1);
    }
    &__text {
        font-size: 18px;
        color: #293148;
        font-weight: 600;
    }
    &__number {
        position: relative;
        margin-left: 15px;
    }
    &__main:hover {
        transform: scale(1.05);
    }
    &__container {
        display: flex;
        align-items: center;
    }
    &__info {
        margin-right: 10px;
    }
    &__log {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 50px;
        left: 0;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        border: 0px solid #E4E4E4;
        z-index: 10;
    }
    &__box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        border-bottom: 1px solid #E4E4E4;
        font-weight: 600;
        color: rgba($color: #293148, $alpha: .8);
        transition: all .3s ease;
        cursor: pointer;
    }
    &__box:hover {
        background: rgba($color: #282828, $alpha: .8);
        color: #fff;
    }
    &__main {
        cursor: pointer;
        transition: all .3s ease;
        padding: 5px 15px;
        border: 1px solid #E4E4E4;
        border-radius: 8px;
        font-weight: 600;
        color: rgba($color: #293148, $alpha: .8);
        display: flex;
        align-items: center;
        width: 80px;
    }
    &__scroll {
        height: 0;
        opacity: 0;
        overflow: hidden;
        overflow-y: auto;
        transition: all .3s ease;
        background: #fff;
    }
    &__scroll_active {
        overflow-x: hidden;
        height: 210px;
        opacity: 1;
    }
    &__log_active {
        border: 1px solid #E4E4E4;
    }
    &__btn {
        padding: 10px 20px;
        background: var(--red);
        border-radius: 10px;
        font-weight: 600;
        color: #fff;
        font-size: 18px;
        display: flex;
        align-items: center;
        transition: all .3s ease;
    }
    &__btn:hover {
        transform: scale(1.03);
    }
    &__plus {
        margin-right: 15px;
    }

    @media(max-width: 1320px) {
        &__input {
            width: 100%;
        }
    }
    @media(max-width: 1100px) {
        &__container_input {
            margin-bottom: 10px;
        }
        &__position {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }
    @media(max-width: 900px) {
        &__btn {
            margin-top: 10px;
        }
    }
}
@media(max-width: 900px) {
    .navigation {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>