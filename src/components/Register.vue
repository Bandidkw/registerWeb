<!-- CheckReferrerPage.vue -->
<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">เช็คเบอร์ผู้แนะนำ</h2>
    <div class="mb-4">
      <label for="ref_tel" class="block text-sm font-medium text-gray-700"
        >เบอร์โทรศัพท์ผู้แนะนำ</label
      >
      <input
        v-model="refTel"
        type="tel"
        id="ref_tel"
        name="ref_tel"
        class="mt-1 p-2 w-full border rounded-md"
      />
    </div>
    <div>
      <button
        @click="checkReferrer"
        class="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        เช็คเบอร์ผู้แนะนำ
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const refTel = ref("");
const router = useRouter();

const checkReferrer = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_VUE_APP_TOSSAGUN_SHOP}/platform/member/${
        refTel.value
      }`
    );

    const referrerData = response.data.data[0];

    if (referrerData) {
      // ถ้ามีข้อมูลผู้แนะนำให้ log ข้อมูล
      console.log("Referrer Data:", referrerData);
      // และทำการ redirect ไปยังหน้าลงทะเบียน
      router.push("/register");
    } else {
      // ถ้าไม่มีข้อมูลผู้แนะนำ
      console.log("ไม่พบข้อมูลผู้แนะนำ");
    }
  } catch (error) {
    console.error("Error fetching referrer data:", error);
  }
};
</script>
