<template>
  <section class="product">
    <div class="product__image"> 
      <img class="product__img" v-show="!loading" @load="handleImageLoaded" @error="handleImageError" :src="card.placeholder" alt="">
    </div>
    <h3 class="product__title">{{card.vehicle_name}}</h3>
    <p class="product__vin">WDB {{card.vin}}</p>
    <div class="product__position">
      <p class="product__numbers">
        {{card.angles_count}}/30 
      </p>
      <p class="product__day">{{card.uploads}} days left</p>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        card: Object
    },
    data() {
      return {
        loading: true
      }
    },
    methods: {
    handleImageLoaded() {
      this.loading = false; 
    },
    handleImageError() {
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  width: 100%;
  padding: 25px 20px;
  border-radius: 10px;
  background: rgba($color: #293148, $alpha: 0.2);

  &__image {
    height: 300px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
  }
  &__image:hover &__img{
    transform: scale(1.03);
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s ease;
  }
  &__title {
    font-weight: 800;
    color: #293148;
    font-size: 20px;
    padding-top: 15px;
  }
  &__vin {
    color: rgba($color: #293148, $alpha: 0.6);
    font-weight: 600;
    margin-top: 5px;
    padding-bottom: 20px;
    border-bottom: 2px solid #E4E4E4;
    font-size: 18px;
  }
  &__position {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  }
  &__numbers {
    padding: 8px 15px;
    background: #EDEDED;
    border-radius: 10px;
    font-weight: 800;
    color: #293148;
  }
  &__day {
    color: rgba($color: #293148, $alpha: 0.6);
    font-weight: 600;
    font-size: 18px;
  }
  @media(max-width: 1600px) {
    &__image {
      height: 250px;
    }
  }
  @media(max-width: 1500px) {
    &__image {
      height: 200px;
    }
  }
  @media(max-width: 1360px) {
    &__image {
      height: 250px;
    }
  }
}
</style>