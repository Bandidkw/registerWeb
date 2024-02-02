<!-- CheckReferrerPage.vue -->
<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">เช็คสถานะ</h2>
    <div class="mb-4">
      <label for="ref_tel" class="block text-sm font-medium text-gray-700"
        >เช็คสถานะการใช้งาน</label
      >
      <input
        v-model="tel"
        type="tel"
        id="ref_tel"
        name="ref_tel"
        class="mt-1 p-2 w-full border rounded-md"
      />
    </div>
    <div>
      <button
        @click="checkall"
        class="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        เช็คสถานะ
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const tel = ref("");
const router = useRouter();

const checkall = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_VUE_APP_TOSSAGUN_SHOP}/platform/member/`
    );
    const resall = response.data;
    console.log("resall : ", resall);
  } catch (error) {
    console.log("error : ", error);
  }
};
</script>
