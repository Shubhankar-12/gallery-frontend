<script lang="ts" setup>
const props = defineProps(["imgDetails", "folderId"]);
const emit = defineEmits(["deleteCard"]);
const handleDelete = (): void => {
  emit("deleteCard", props.imgDetails._id);
};
</script>

<template>
  <div class="max-w-sm bg-white rounded-md overflow-hidden shadow-md">
    <img
      :src="props.imgDetails.imageUrl"
      alt="Card Image"
      class="w-full h-48 object-cover"
    />

    <div class="p-4">
      <p class="text-gray-500 text-sm mb-2">{{ props.imgDetails.fileName }}</p>
      <button
        @click="handleDelete"
        class="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
</template>
