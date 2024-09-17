<template>
  <div class="container">
    <UIVeHeader/>
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.main {
  width: 100%;
  margin-left: 350px;
}
@media(max-width: 1200px) {
  .main {
    margin-left: 250px;
  }
}
@media(max-width: 700px) {
  .main {
    margin-left: 0px;
  }
}
</style>
