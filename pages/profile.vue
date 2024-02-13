<script lang="ts" setup>
import type { User } from "~/types/types";

const store = useUserStore();
const user: User | null = store.getUser;
</script>

<template>
  <div>
    <ProfileDetails :email="user!.email" :username="user!.name" />
  </div>
</template>

<style scoped>
div {
  height: 90vh;
  display: grid;
  place-items: center;
}
</style>
