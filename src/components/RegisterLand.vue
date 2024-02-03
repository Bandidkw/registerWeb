<!-- CheckReferrerPage.vue -->
<template>
  <div
    class="w-full h-screen bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600"
  >
    <div class="flex flex-col items-center justify-center rounded-xl h-full">
      <img class="w-[30%]" src="../assets/logo-1.png" alt="" />
      <div class="mb-4">
        <label
          for="ref_tel"
          class="block pb-8 text-2xl text-center font-bold text-gray-800"
          >ตรวจสอบรหัสผู้แนะนำ</label
        >
        <input
          v-model="tel"
          type="number"
          id="tel_platform"
          name="tel_platform"
          class="p-2 w-full border rounded-md bg-gray-800 border-0 focus:bg-white text-white focus:text-black"
        />
      </div>
      <div>
        <Toast />
        <button
          @click="checkMember"
          class="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          ตรวจสอบ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const tel = ref("");
const router = useRouter();

const checkMember = async () => {
  console.log("tel : ", tel.value);
  if (tel.value === "") {
    console.log("กรอกเบอร์โทร");
    showErrorTel();
    return false;
  }
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_VUE_APP_TOSSAGUN_API}/Member/CheckInvite/${
        tel.value
      }`,
      {
        tel: tel.value,
      }
    );

    const resrecom = response.data;
    console.log("resrecom : ", resrecom);
    showSuccess();
    setTimeout(() => {
      router.push("/placeregister");
    }, 2000);
  } catch (error) {
    console.log("error", error);
    showError();
  }
};
const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "ข้อมูลรหัสผู้แนะนำถูกต้อง",
    life: 3000,
  });
};
const showErrorTel = () => {
  toast.add({
    severity: "error",
    summary: "กรุณากรอกเบอร์โทร",
    life: 3000,
  });
};
const showError = () => {
  toast.add({
    severity: "error",
    summary: "ไม่พบรหัสผู้แนะนำ",
    life: 3000,
  });
};
</script>
