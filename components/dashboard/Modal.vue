<script lang="ts" setup>
import type { ImageFolder } from "~/types/types";

const emit = defineEmits(["close", "reloadFolders"]);

const selectedImage = ref<string | null>(null);
const userStore = useUserStore();
const uploadFolder = ref<string>("");
const folders = ref<ImageFolder[]>([]);
const uploadOption = ref<string>("addToExisting");
const newFolderName = ref<string>("");

const handleCancel = (): void => {
  emit("close");
};

const createFolder = async (): Promise<string> => {
  if (!newFolderName.value) {
    console.log("Enter Folder name");
    throw new Error("Enter Folder Name");
  }
  const res: ImageFolder = await $fetch(
    "http://localhost:8800/api/images/folders",
    {
      method: "POST",
      credentials: "include",
      body: { userId: userStore.user._id, folderName: newFolderName.value },
    }
  );
  return res._id;
};

const handleConfirm = async (): Promise<void> => {
  if (uploadOption.value === "createNewFolder") {
    uploadFolder.value = await createFolder();
  }
  try {
    const res = await $fetch(
      `http://localhost:8800/api/images/folders/add-images/${uploadFolder.value}`,
      {
        method: "PUT",
        credentials: "include",
        body: { image: selectedImage.value },
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
    emit("reloadFolders");
    emit("close");
  }
};

const getFolders = async (): Promise<ImageFolder[]> => {
  const res: ImageFolder[] = await $fetch(
    `http://localhost:8800/api/images/folders/user/${userStore.user._id}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  return res;
};

const handleFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      selectedImage.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

onMounted(async (): Promise<void> => {
  folders.value = await getFolders();
});
</script>

<template>
  <div class="fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-40 z-10">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white w-100 p-6 rounded-md shadow-md relative">
        <div class="mb-4">
          <h2 class="text-2xl font-bold">Upload Image</h2>
        </div>
        <div class="space-y-4">
          <div>
            <label
              for="uploadOption"
              class="block text-sm font-medium text-gray-600"
              >Upload Option</label
            >
            <div class="mt-1 space-x-4">
              <input
                type="radio"
                id="addToExisting"
                name="uploadOption"
                value="addToExisting"
                v-model="uploadOption"
                class="mr-2"
              />
              <label for="addToExisting">Add to Existing Folder</label>

              <input
                type="radio"
                id="createNewFolder"
                name="uploadOption"
                value="createNewFolder"
                v-model="uploadOption"
                class="mr-2"
              />
              <label for="createNewFolder">Create New Folder</label>
            </div>
          </div>

          <div v-if="uploadOption === 'addToExisting'">
            <label for="folder" class="block text-sm font-medium text-gray-600"
              >Select Folder</label
            >
            <select
              name="folder"
              id="folder"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="uploadFolder"
            >
              <option
                v-for="folder in folders"
                :key="folder._id"
                :value="folder._id"
              >
                {{ folder.folderName }}
              </option>
            </select>
          </div>

          <div v-else-if="uploadOption === 'createNewFolder'">
            <label
              for="newFolder"
              class="block text-sm font-medium text-gray-600"
              >New Folder Name</label
            >
            <input
              type="text"
              name="newFolder"
              id="newFolder"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="newFolderName"
            />
          </div>

          <div>
            <label for="img" class="block text-sm font-medium text-gray-600"
              >Image</label
            >
            <input
              type="file"
              name="img"
              id="img"
              accept="image/*"
              @change="handleFileChange"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="mt-6 flex justify-end space-x-4">
          <button
            class="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            @click="handleConfirm"
          >
            Upload
          </button>
          <button
            @click="handleCancel"
            class="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
