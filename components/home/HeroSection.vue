<script setup>
const userStore = useUserStore();
</script>

<template>
  <div
    class="hero-section bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white"
  >
    <div class="container mx-auto py-16 text-center">
      <h1 class="text-4xl font-extrabold leading-tight mb-4">
        Welcome to our Gallery App
      </h1>
      <p class="text-lg mb-8">
        Store and showcase your favorite photos in a beautiful gallery.
      </p>
      <NuxtLink
        v-if="userStore.user"
        to="/dashboard"
        class="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100"
      >
        Go to Dashboard
      </NuxtLink>
      <NuxtLink
        v-if="!userStore.user"
        to="/register"
        class="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100"
      >
        Get Started
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
}
</style>
