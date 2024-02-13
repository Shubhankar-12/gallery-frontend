<script lang="ts" setup>
const handleClick = (): void => {
  navigateTo("/");
};
</script>

<template>
  <div class="bg-blue-900 text-white px-1 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center cursor-pointer" @click="handleClick">
        <img src="~/assets/img/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
        <span class="text-lg font-semibold">Gallery</span>
      </div>

      <div>
        <p>Made with ❤️ by Shubh</p>
      </div>
    </div>
  </div>
</template>
