<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">ลงทะเบียน</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label
          for="landlord_name"
          class="block text-sm font-medium text-gray-700"
          >ชื่อผู้ให้เช่า</label
        >
        <input
          v-model="formData.landlord_name"
          type="text"
          id="landlord_name"
          name="landlord_name"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div class="mb-4">
        <label
          for="landlord_phone"
          class="block text-sm font-medium text-gray-700"
          >เบอร์โทรศัพท์ผู้ให้เช่า</label
        >
        <input
          v-model="formData.landlord_phone"
          type="tel"
          id="landlord_phone"
          name="landlord_phone"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div class="mb-4">
        <label
          for="landlord_iden"
          class="block text-sm font-medium text-gray-700"
          >เลขที่บัตรประจำตัวผู้ให้เช่า</label
        >
        <input
          v-model="formData.landlord_iden"
          type="text"
          id="landlord_iden"
          name="landlord_iden"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div class="mb-4">
        <label
          for="landlord_email"
          class="block text-sm font-medium text-gray-700"
          >อีเมลผู้ให้เช่า</label
        >
        <input
          v-model="formData.landlord_email"
          type="email"
          id="landlord_email"
          name="landlord_email"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div class="mb-4">
        <label
          for="landlord_password"
          class="block text-sm font-medium text-gray-700"
          >รหัสผ่านผู้ให้เช่า</label
        >
        <input
          v-model="formData.landlord_password"
          type="password"
          id="landlord_password"
          name="landlord_password"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div class="mb-4">
        <label
          for="landlord_address"
          class="block text-sm font-medium text-gray-700"
          >ที่อยู่ผู้ให้เช่า</label
        >
        <input
          v-model="formData.landlord_address"
          type="text"
          id="landlord_address"
          name="landlord_address"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="w-full flex flex-col py-2 items-center gap-y-4 justify-center">
        <div class="items-center">
          <label for="landlord_province" class="pr-2"> จังหวัด</label>
          <InputText type="text" v-model="formData.landlord_province" />
        </div>
        <div class="items-center">
          <label for="landlord_district" class="pr-2"> อำเภอ</label>
          <InputText type="text" v-model="formData.landlord_district" />
        </div>
        <div class="items-center">
          <label for="landlord_subdistrict" class="pr-2"> ตำบล</label>
          <InputText type="text" v-model="formData.landlord_subdistrict" />
        </div>
        <div class="flex items-center">
          <label for="landlord_postcode" class="w-6rem"
            >ไปรษณีย์</label
          >
          <InputText type="text" v-model="formData.landlord_postcode" />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          ลงทะเบียน
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const provincedropdown = ref([]);
const amphuredropdown = ref([]);
const tambondropdown = ref([]);

const formData = ref({
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

const getprovince = async () => {
  try {
    const province = await axios.get(
      `${import.meta.env.VITE_VUE_APP_THAILAND}thailand/province`
    );
    provincedropdown.value = province.data;
  } catch (error) {
    console.log("error : ", error);
  }
};

const getamphure = async (type) => {
  try {
    console.log("Type:", type);
    console.log("Selected Province:", formData.value.landlord_province);
    console.log("Selected District:", formData.value.landlord_district);
    if (type === "amphure") {
      const selectedProvinceObject = provincedropdown.value.find(
        (province) => province.name_th === formData.value.landlord_province
      );
      if (selectedProvinceObject) {
        const id = selectedProvinceObject.id;
        const amphure = await axios.get(
          `${
            import.meta.env.VITE_VUE_APP_THAILAND
          }thailand/amphure/by-province-id/${id}`
        );

        formData.value.selectedProvince = selectedProvinceObject;

        amphuredropdown.value = amphure.data;
      }
    }
    if (type === "tambon") {
      const selectedAmphureObject = amphuredropdown.value.find(
        (amphure) => amphure.name_th === formData.value.landlord_district
      );

      if (selectedAmphureObject) {
        try {
          const id = selectedAmphureObject.id;
          const tambon = await axios.get(
            `${
              import.meta.env.VITE_VUE_APP_THAILAND
            }thailand/tambon/by-amphure-id/${id}`
          );
          if (tambon.data && tambon.data.length > 0) {
            formData.value.selectedAmphure = selectedAmphureObject;
            formData.value.zip_code = null;
            tambondropdown.value = tambon.data;
            console.log("Tambon Dropdown:", tambondropdown.value); // เพิ่มบรรทัดนี้
          } else {
            console.error("ไม่พบข้อมูลตำบล");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const submitForm = () => {
  console.log("Form submitted:", formData.value);
  // เพิ่มโค้ดส่วนนี้เพื่อทำการส่งข้อมูลไปยังเซิร์ฟเวอร์ (API) หรือทำการจัดเก็บข้อมูลตามที่ต้องการ
};

getprovince();
</script>

<style scoped></style>
