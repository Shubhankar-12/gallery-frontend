<template>
  <div>
    <Navbar />
    <div class="pages-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.pages-container {
  min-height: 90vh;
}
</style>
