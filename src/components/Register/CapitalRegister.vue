<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-xl font-semibold">ลงทะเบียนมีทุน ไม่มีที่</h1>
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
              v-model="investor_name"
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
              v-model="investor_phone"
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
              v-model="investor_iden"
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
              v-model="investor_email"
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
              v-model="investor_password"
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
              v-model="investor_address"
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
              v-model="investor_subdistrict"
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
              v-model="investor_district"
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
              v-model="investor_province"
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
              v-model="investor_postcode"
              type="password"
              placeholder="กรอกรหัสไปรษณีย์"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>

        <button
          @click="registerInvestor"
          class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        >
          สมัคร
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // ข้อมูลนักลงทุน
      ref_tel: "",
      investor_name: "",
      investor_phone: "",
      investor_iden: "",
      investor_email: "",
      investor_password: "",
      investor_address: "",
      investor_subdistrict: "",
      investor_district: "",
      investor_province: "",
      investor_postcode: "",
    };
  },
  methods: {
    async registerInvestor() {
      try {
        const requestData = {
          ref_tel: this.ref_tel,
          investor_name: this.investor_name,
          investor_phone: this.investor_phone,
          investor_iden: this.investor_iden,
          investor_email: this.investor_email,
          investor_password: this.investor_password,
          investor_address: this.investor_address,
          investor_subdistrict: this.investor_subdistrict,
          investor_district: this.investor_district,
          investor_province: this.investor_province,
          investor_postcode: this.investor_postcode,
        };

        const response = await axios.post(
          `${import.meta.env.VITE_VUE_APP_TOSSAGUN_SHOP}/register/investor`,
          requestData
        );

        console.log("Registration successful:", response.data.data);
      } catch (error) {
        console.error("Error registering investor:", error);
        this.registerError = "เกิดข้อผิดพลาดในการสมัคร";
      }
    },
  },
};
</script>

<style scoped></style>
