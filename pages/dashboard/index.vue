<script lang="ts" setup>
import type { ImageFolder, Image } from "~/types/types";

const isModalOpen = ref<boolean>(false);
const folders = ref<ImageFolder[]>([]);

const openModal = (): void => {
  isModalOpen.value = true;
};

const closeModal = (): void => {
  isModalOpen.value = false;
};
const userStore = useUserStore();

const getFolders = async (): Promise<ImageFolder[]> => {
  const res: ImageFolder[] = await $fetch(
    `http://localhost:8800/api/images/folders/user/${userStore.user!._id}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  return res;
};

const reloadFolders = async (): Promise<void> => {
  folders.value = await getFolders();
};

onMounted(async (): Promise<void> => {
  folders.value = await getFolders();
});
</script>

<template>
  <div>
    <DashboardModal
      v-if="isModalOpen"
      @close="closeModal"
      @reloadFolders="reloadFolders"
    />
    <div class="grid grid-cols-6 px-10 py-16 gap-8">
      <DashboardFolder
        v-for="folder in folders"
        :key="folder._id"
        :title="folder.folderName"
        :id="folder._id"
      />
    </div>
    <div
      @click="openModal"
      class="fixed bottom-8 right-8 bg-blue-500 text-white p-6 rounded-full cursor-pointer hover:bg-blue-600 h-20 w-20"
    >
      <img src="~/assets/img/add.svg" alt="add Images" />
    </div>
  </div>
</template>
