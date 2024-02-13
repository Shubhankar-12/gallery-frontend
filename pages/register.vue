<script lang="ts" setup>
import type { User } from "~/types/types";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const formData = ref<FormData>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const store = useUserStore();
const handleLogin = async (): Promise<void> => {
  if (formData.value.password !== formData.value.password) {
    console.log("Password doesn't match!");
    return;
  }
  const userData = { ...formData.value };
  delete userData.confirmPassword;

  const res: User = await $fetch("http://localhost:8800/api/", {
    method: "POST",
    credentials: "include",
    body: userData,
  });

  store.setUser(res);
  navigateTo("/dashboard");
};
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-20 w-auto"
        src="~/assets/img/user.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        New User
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              name="username"
              type="text"
              required="true"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              v-model="formData.name"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              name="email"
              type="email"
              required="true"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              v-model="formData.email"
            />
          </div>
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
          <div class="mt-2">
            <input
              name="password"
              type="password"
              required="true"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="formData.password"
            />
          </div>
        </div>

        <div>
          <label
            for="confirmPassword"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Confirm Password</label
          >
          <div class="mt-2">
            <input
              name="confirmPassword"
              type="password"
              required="true"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="formData.confirmPassword"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
