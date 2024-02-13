<script lang="ts" setup>
import type { Image } from "~/types/types";

const route = useRoute();
const folderId = route.params.folder;
const images = ref<Image[]>([]);

const fetchAllImages = async (): Promise<Image[]> => {
  const res: Image[] = await $fetch(
    `http://localhost:8800/api/images/folders/${folderId}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  return res;
};

const deleteCard = async (imgId: string): Promise<void> => {
  try {
    const res = await $fetch(
      `http://localhost:8800/api/images/folders/delete-images/${folderId}`,
      {
        method: "PUT",
        credentials: "include",
        body: { imageId: imgId },
      }
    );
    images.value = images.value.filter((image) => image._id !== imgId);
  } catch (e) {
    console.log(e);
  }
};

onMounted(async (): Promise<void> => {
  images.value = await fetchAllImages();
});
</script>

<template>
  <div>
    <div class="w-full grid place-items-center" v-if="!images.length">
      <p>No Images in this Folder.</p>
    </div>
    <div class="grid grid-cols-4 px-10 py-16 gap-8">
      <DashboardCard
        v-for="image in images"
        :key="image._id"
        :imgDetails="image"
        @deleteCard="deleteCard"
      />
    </div>
    <div
      @click=""
      class="fixed bottom-8 right-8 bg-blue-500 text-white p-6 rounded-full cursor-pointer hover:bg-blue-600 h-20 w-20"
    >
      <img src="~/assets/img/add.svg" alt="" />
    </div>
  </div>
</template>
