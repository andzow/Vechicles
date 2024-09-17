<template>
  <section class="siteBar">
    <div class="siteBar__container">
        <div class="siteBar__position">
            <h2 class="siteBar__title">{{useInfoActive}}</h2>
            <p class="siteBar__number" v-if="useInfoActive === 'Vechicles'">{{useCountTotal}}</p>
        </div>
        <div class="siteBar__position">
        <button class="siteBar__add">
            <div class="siteBar__line"></div>
            <div class="siteBar__line siteBar__line_last"></div>
        </button>
        <div class="siteBar__icon">
            <img src="~/assets/images/icon.png" alt="">
            <p class="siteBar__name">John Doe</p>
        </div>
        <div class="siteBar__icon siteBar__icon_last">
            <img src="~/assets/images/uk.svg" alt="">
            <p class="siteBar__name">En</p>
            <img src="~/assets/images/chevron_down.svg" alt="">
        </div>
    </div>
    </div>
    <button class="siteBar__add siteBar__add_menu" @click="useHeaderActive = !useHeaderActive">
        <div class="siteBar__line"></div>
        <div class="siteBar__line siteBar__line_last"></div>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
        useCountTotal: useCountTotal(),
        useInfoActive: useInfoActive(),
        useHeaderActive: useHeaderActive()
    }
  },
}
</script>

<style scoped lang="scss">
.siteBar {
    padding: 35px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #E4E4E4;
    width: 100%;

    &__position {
        display: flex;
        align-items: center;
    }
    &__container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__title {
        color: var(--gray);
        font-weight: 800;
        font-size: 32px;
    }
    &__number {
        background: #F3F6F8;
        padding: 5px 15px;
        border-radius: 10px;
        color: rgba($color: #293148, $alpha: .8);
        font-weight: 800;
        margin-left: 20px;
    }
    &__add {
        width: 42px;
        height: 42px;
        min-width: 42px;
        border-radius: 6px;
        border: 2px solid #E86E84;
        position: relative;
        z-index: 1;
        cursor: pointer;
        transition: all .3s ease;
        margin-right: 50px;
    }
    &__add_menu {
        display: none;
    }
    &__add:hover {
        background: #E86E84;
    }
    &__add:hover &__line {
        background: #fff
    }
    &__line {
        background: #E86E84;
        width: 16px;
        height: 2px;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        transition: all .3s ease;
    }
    &__line_last {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    &__icon {
        display: flex;
        align-items: center;
    }
    &__name {
        color: var(--gray);
        font-weight: 600;
        font-size: 20px;
        margin-left: 15px;
    }
    &__icon_last {
        margin-left: 25px;
    }

    @media(max-width: 900px) {
        &__add {
            display: none;
        }
        &__icon {
            margin-top: 10px;
        }
        &__container {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    @media(max-width: 700px) {
        &__add_menu {
            display: block;
            margin-right: 0;
        }
        &__line {
            transform: translate(-50%, 200%);
        }
        &__line_last {
            transform: translate(-50%, -200%) rotate(0deg);
        }
    }
}
@media(max-width: 900px) {
    .siteBar {
        align-items: flex-start;
    }
}
</style>