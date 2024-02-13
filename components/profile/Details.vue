<script lang="ts" setup>
const isEditing = ref(false);
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const updateDetails = ref({
  userEmail: props.email,
  userName: props.username,
});

const handleUpdate = (): void => {
  isEditing.value = true;
};

const handleCancel = (): void => {
  updateDetails.value.userName = props.username;
  updateDetails.value.userEmail = props.email;
  isEditing.value = false;
};

const handleConfirm = (): void => {};
</script>

<template>
  <div class="profile-container">
    <div class="profile-items heading">
      <h1>User Details</h1>
    </div>
    <div class="profile-items user-details">
      <p>User Name:</p>
      <p v-if="!isEditing">{{ username }}</p>
      <input
        type="text"
        name="username"
        v-if="isEditing"
        v-model="updateDetails.userName"
      />
    </div>
    <div class="profile-items user-details">
      <p>Email:</p>
      <p v-if="!isEditing">{{ email }}</p>
      <input
        type="email"
        name="usermail"
        v-if="isEditing"
        v-model="updateDetails.userEmail"
      />
    </div>
    <div class="profile-items">
      <button v-if="!isEditing" class="updateBtn" @click="handleUpdate">
        Update
      </button>
      <button v-if="isEditing" class="updateBtn" @click="handleConfirm">
        Confirm
      </button>
      <button v-if="isEditing" @click="handleCancel" class="cancelBtn">
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  min-width: 400px;
  height: 480px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.profile-items {
  display: flex;
  padding: 10px;
  width: 70%;
  justify-content: space-evenly;
}

h1 {
  font-weight: 700;
  border-bottom: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 1.5rem;
}

.updateBtn {
  background-color: #3490dc;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
}

.updateBtn:hover {
  background-color: #2779bd;
}
.user-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-items: left;
  font-size: 1.2rem;
}
.user-details p:first-child {
  text-decoration: underline;
  padding: 0 5px;
}
input {
  border: 1px solid black;
  padding: 5px 2px;
}
.cancelBtn {
  background-color: #ff4c4c;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
}
.cancelBtn:hover {
  background-color: #fa2a2a;
}
</style>
