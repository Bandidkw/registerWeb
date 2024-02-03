<template>
  <div
    class="flex min-h-screen place-items-center bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600 justify-between px-[20em]"
  >
    <div class="flex w-[35em]">
      <img class="w-full" src="../Register/logo/logo-1.png" alt="" />
    </div>
    <div class="w-full p-12 sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-4xl text-center font-bold">ลงทะเบียนมีทุน ไม่มีที่</h1>
      <div class="mt-6">
        <div class="flex justify-between gap-3">
          <span class="w-full">
            <label class="block text-xs font-semibold text-gray-600 uppercase"
              >ชื่อ-นามสกุล</label
            >
            <input
              v-model="investor_name"
              type="text"
              placeholder="กรอกชื่อ-นามสกุล"
              class="rounded-lg border-0 block w-full p-3 mt-2 text-white bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              class="rounded-lg border-0 block w-full p-3 mt-2 text-gray-700 bg-gray-700 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>
        <Toast />
        <button
          @click="registerInvestor"
          class="rounded-lg border-0 w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        >
          สมัคร
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import axios from "axios";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

const router = useRouter();
const {
  ref_tel,
  investor_name,
  investor_phone,
  investor_iden,
  investor_email,
  investor_password,
  investor_address,
  investor_subdistrict,
  investor_district,
  investor_province,
  investor_postcode,
  registerError,
} = toRefs(
  ref({
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
    registerError: null,
  })
);

const toast = useToast();

const registerInvestor = async () => {
  if (
    !ref_tel.value ||
    !investor_name.value ||
    !investor_phone.value ||
    !investor_iden.value ||
    !investor_email.value ||
    !investor_password.value ||
    !investor_address.value ||
    !investor_subdistrict.value ||
    !investor_district.value ||
    !investor_province.value ||
    !investor_postcode.value
  ) {
    console.log("กรุณากรอกข้อมูลทุกรายการ");
    showErrorTel();
    return;
  }

  try {
    const requestData = {
      ref_tel: ref_tel.value,
      investor_name: investor_name.value,
      investor_phone: investor_phone.value,
      investor_iden: investor_iden.value,
      investor_email: investor_email.value,
      investor_password: investor_password.value,
      investor_address: investor_address.value,
      investor_subdistrict: investor_subdistrict.value,
      investor_district: investor_district.value,
      investor_province: investor_province.value,
      investor_postcode: investor_postcode.value,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_VUE_APP_TOSSAGUN_SHOP}/register/investor`,
      requestData
    );

    console.log("Registration successful:", response.data.data);
    showSuccess();
    setTimeout(() => {
      router.push("/");
    }, 2000);
    clearData();
  } catch (error) {
    showError();
    console.error("Error registering investor:", error);
    registerError.value = "เกิดข้อผิดพลาดในการสมัคร";
  }
};
const clearData = () => {
  ref_tel.value = "";
  investor_name.value = "";
  investor_phone.value = "";
  investor_iden.value = "";
  investor_email.value = "";
  investor_password.value = "";
  investor_address.value = "";
  investor_subdistrict.value = "";
  investor_district.value = "";
  investor_province.value = "";
  investor_postcode.value = "";
  registerError.value = null;
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
