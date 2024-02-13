<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
const handleFolderClick = (): void => {
  navigateTo(`/dashboard/${props.id}`);
};
</script>

<template>
  <div
    @click="handleFolderClick"
    class="w-44 mx-auto bg-white shadow-md rounded-md overflow-hidden transition duration-300 transform hover:bg-slate-300 cursor-pointer"
  >
    <img
      src="~/assets/img/folder.png"
      alt="Folder Icon"
      class="w-full h-32 object-cover"
    />
    <div class="px-4 py-2 text-center">
      <p class="text-lg font-semibold">{{ title }}</p>
    </div>
  </div>
</template>
