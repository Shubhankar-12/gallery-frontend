<script lang="ts" setup>
const userStore = useUserStore();
const isAuth = storeToRefs(userStore);

const handleHome = (): void => {
  navigateTo("/");
};

const handleLogout = async (): Promise<void> => {
  try {
    const res = await $fetch("http://localhost:8800/api/logout", {
      method: "POST",
      credentials: "include",
    });
    userStore.removeUser();
    navigateTo("/login");
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div>
    <nav class="bg-white px-2 py-4 shadow-md mb-2">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center cursor-pointer" @click="handleHome">
          <img src="~/assets/img/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
          <span class="text-lg font-semibold">Gallery</span>
        </div>

        <div class="flex items-center space-x-4">
          <NuxtLink
            v-if="!isAuth.user.value"
            to="/login"
            class="text-gray-700 hover:text-gray-900"
            >Sign In</NuxtLink
          >
          <NuxtLink
            v-if="isAuth.user.value"
            to="/profile"
            class="text-gray-700 hover:text-gray-900"
            >Profile</NuxtLink
          >
          <NuxtLink
            v-if="!isAuth.user.value"
            to="/register"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >Register</NuxtLink
          >
          <div
            v-if="isAuth.user.value"
            @click="handleLogout"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Logout
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
