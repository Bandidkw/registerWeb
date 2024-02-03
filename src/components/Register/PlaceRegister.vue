<template>
  <div
    class="flex min-h-screen place-items-center bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600 justify-between px-[20em]"
  >
    <div class="flex w-[35em]">
      <img class="w-full" src="../Register/logo/logo-1.png" alt="" />
    </div>
    <div class="w-full p-12 sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-4xl text-center font-bold">ลงทะเบียนมีที่ ไม่มีทุน</h1>
      <div class="mt-6">
        <div class="flex justify-between gap-3">
          <span class="w-full">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >ชื่อ-นามสกุล</label
            >
            <input
              v-model="landlord_name"
              type="text"
              placeholder="กรอกชื่อ-นามสกุล"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>
        <div class="flex justify-between gap-3">
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >เบอร์โทร</label
            >
            <input
              v-model="landlord_phone"
              type="text"
              placeholder="กรอกเบอร์โทร"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >เลขบัตรประชาชน</label
            >
            <input
              v-model="landlord_iden"
              type="text"
              placeholder="กรอกเลขบัตรประชาชน"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>
        <div class="flex justify-between gap-3">
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >อีเมลล์</label
            >
            <input
              v-model="landlord_email"
              type="text"
              placeholder="กรอกอีเมลล์"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >รหัสผ่าน</label
            >
            <input
              v-model="landlord_password"
              type="password"
              placeholder="กรอกรหัสผ่าน"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>
        <div class="flex justify-between gap-3">
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >ที่อยู่</label
            >
            <input
              v-model="landlord_address"
              type="text"
              placeholder="กรอกที่อยู่"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >ตำบล</label
            >
            <input
              v-model="landlord_subdistrict"
              type="text"
              placeholder="กรอกตำบล"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>

        <div class="flex justify-between gap-3">
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >อำเภอ</label
            >
            <input
              v-model="landlord_district"
              type="text"
              placeholder="กรอกอำเภอ"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >จังหวัด</label
            >
            <input
              v-model="landlord_province"
              type="text"
              placeholder="กรอกจังหวัด"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >รหัสไปรษณีย์</label
            >
            <input
              v-model="landlord_postcode"
              type="text"
              placeholder="กรอกรหัสไปรษณีย์"
              class="focus:text-black rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>
        <Toast />
        <button
          @click="registerLandlord"
          class="rounded-lg border-0 w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none focus:text-black"
        >
          สมัคร
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

const router = useRouter();
const toast = useToast();
const landlord_name = ref("");
const landlord_phone = ref("");
const landlord_iden = ref("");
const landlord_email = ref("");
const landlord_password = ref("");
const landlord_address = ref("");
const landlord_subdistrict = ref("");
const landlord_district = ref("");
const landlord_province = ref("");
const landlord_postcode = ref("");

const registerLandlord = async () => {
  if (
    !landlord_name.value ||
    !landlord_phone.value ||
    !landlord_iden.value ||
    !landlord_email.value ||
    !landlord_address.value ||
    !landlord_password.value ||
    !landlord_subdistrict.value ||
    !landlord_district.value ||
    !landlord_province.value ||
    !landlord_postcode.value
  ) {
    showErrorTel();
    console.log("กรุณากรอกข้อมูลทุกรายการ");
    return;
  }
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_VUE_APP_TOSSAGUN_SHOP}/register/landlord`,
      {
        landlord_name: landlord_name.value,
        landlord_phone: landlord_phone.value,
        landlord_iden: landlord_iden.value,
        landlord_email: landlord_email.value,
        landlord_address: landlord_address.value,
        landlord_password: landlord_password.value,
        landlord_subdistrict: landlord_subdistrict.value,
        landlord_district: landlord_district.value,
        landlord_province: landlord_province.value,
        landlord_postcode: landlord_postcode.value,
      }
    );
    showSuccess();
    setTimeout(() => {
      router.push("/");
    }, 2000);
    clearData();
    const res = response.data;
    console.log("res : ", res);
  } catch (error) {
    showError();
    console.log("error", error);
  }
};
// สร้างฟังก์ชัน clearData เพื่อล้างข้อมูล
const clearData = () => {
  landlord_name.value = "";
  landlord_phone.value = "";
  landlord_iden.value = "";
  landlord_email.value = "";
  landlord_password.value = "";
  landlord_address.value = "";
  landlord_subdistrict.value = "";
  landlord_district.value = "";
  landlord_province.value = "";
  landlord_postcode.value = "";
};

const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "ลงทะเบียนสำเร็จ",
    life: 3000,
  });
};
const showErrorTel = () => {
  toast.add({
    severity: "error",
    summary: "กรุณากรอกข้อมูลให้ครบถ้วน",
    life: 3000,
  });
};
const showError = () => {
  toast.add({
    severity: "error",
    summary: "ลงทะเบียนไม่สำเร็จ",
    life: 3000,
  });
};
</script>

<style scoped></style>
