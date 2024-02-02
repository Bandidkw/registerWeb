<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">ลงทะเบียนมีทั้งที่ มีทั้งทุน</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input v-model="formData.username" type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md">
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="formData.email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input v-model="formData.password" type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md">
      </div>

      <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  username: '',
  email: '',
  password: '',
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
};
</script>

<style scoped>

</style>
