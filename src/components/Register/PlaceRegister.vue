<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-xl font-semibold">ลงทะเบียนมีที่ ไม่มีทุน</h1>
      <div class="mt-6">
        <div class="flex justify-between gap-3">
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >เบอร์โทรศัพท์ผู้แนะนำ</label
            >
            <input
              v-model="ref_tel"
              type="tel"
              placeholder="กรอกเบอร์โทรศัพท์ผู้แนะนำ"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >ชื่อ-นามสกุล</label
            >
            <input
              v-model="landlord_name"
              type="text"
              placeholder="กรอกชื่อ-นามสกุล"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >ตำบล</label
            >
            <input
              v-model="landlord_subdistrict"
              type="password"
              placeholder="กรอกตำบล"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >จังหวัด</label
            >
            <input
              v-model="landlord_province"
              type="password"
              placeholder="กรอกจังหวัด"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span class="w-1/2">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >รหัสไปรษณีย์</label
            >
            <input
              v-model="landlord_postcode"
              type="password"
              placeholder="กรอกรหัสไปรษณีย์"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>

        <button
          @click="registerLandlord"
          class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
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

const formData = ref({
  ref_tel: "",
  landlord_name: "",
  landlord_phone: "",
  landlord_iden: "",
  landlord_email: "",
  landlord_password: "",
  landlord_address: "",
  landlord_subdistrict: "",
  landlord_district: "",
  landlord_province: "",
  landlord_postcode: "",
});

const registerLandlord = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_VUE_APP_TOSSAGUN_SHOP}/register/landlord`,
      formData
    );
    const res = response.data;
    console.log("res : ", res);
  } catch (error) {
    console.log("error", error);
  }
};
</script>

<style scoped></style>