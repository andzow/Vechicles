<template>
    <div class="profile">
        <UIVeSiteBar/>
        <section class="profile__container">
            <p class="profile__title">This page is not available as part of the test project</p>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.profile {
    height: calc(100vh - 120px);

    &__container {
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__title {
        font-size: 32px;
        max-width: 460px;
        text-align: center;
        font-weight: 800;
        color: var(--gray);
    }   
}
</style>