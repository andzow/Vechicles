<template>
  <header class="header" :class="{header__active: useHeaderActive}">
    <h1 class="header__title">Demo Test</h1>

    <div class="header__card" :class="{header__card_active: useInfoActive === 'Profile'}"
        @click="options('Profile')">
        <img src="~/assets/images/user.svg" alt="">
        <p class="header__name">Profile</p>
        <div class="header__status"></div>
    </div>
    <div class="header__card" :class="{header__card_active: useInfoActive === 'Vechicles'}"
        @click="options('Vechicles')">
        <img src="~/assets/images/rim.svg" alt="">
        <p class="header__name">Vechicles</p>
        <div class="header__status"></div>
    </div>
    <div class="header__card" :class="{header__card_active: useInfoActive === 'Setting'}"
        @click="options('Setting')">
        <img src="~/assets/images/settings.svg" alt="">
        <p class="header__name">Setting</p>
        <div class="header__status"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      useInfoActive: useInfoActive(),
      useHeaderActive: useHeaderActive()
    }
  },
  methods: {
    options(item) {
      this.useHeaderActive = false
      if(item === "Vechicles") {
        item = '/'
      }
      this.$router.push(item)
      if(item === "/") {
        item = 'Vechicles'
      }
      setTimeout(() => {
        this.useInfoActive = item
      }, 500)
    }
  },
  mounted() {
    if(this.$route.name === 'index') {
      this.useInfoActive = "Vechicles"
    } else {
      this.useInfoActive = this.$route.name
    }
  }
}
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    width: 350px;
    height: 100vh;
    background: var(--black);
    z-index: 100;
    transition: all .5s ease;

    &__title {
        color: white;
        font-size: 28px;
        font-weight: 800;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 80px;
    }
    &__card {
        display: flex;
        align-items: center;
        padding: 15px 30px;
        cursor: pointer;
        position: relative;
        transition: all .3s ease;
    }
    &__card:hover {
        background: rgba($color: #fff, $alpha: 0.2);
    }
    &__name {
        font-size: 20px;
        margin-left: 20px;
        color: rgba($color: #fff, $alpha: 0.45);
        transition: all .3s ease;
        font-weight: 500;
    }
    &__card_active {
        background: rgba($color: #fff, $alpha: 0.3);
    }
    &__card_active &__name {
        color: rgba($color: #fff, $alpha: 1);
    }
    &__card_active &__status {
        transform: translateX(0px);
        opacity: 1;
    }
    &__card_active_special &__status {
        transform: translateX(0px);
        opacity: 1;
    }
    &__status {
        position: absolute;
        top: 0px;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: var(--red);
        transform: translateX(15px);
        opacity: 0;
        transition: all .3s ease;
    }
    &__active {
      width: calc(100vw - 100px) !important;
    }
}

@media(max-width: 1200px) {
  .header {
    width: 250px;
  }
}

@media(max-width: 700px) {
  .header {
    width: 0px;
    overflow: hidden;
  }
}
</style>