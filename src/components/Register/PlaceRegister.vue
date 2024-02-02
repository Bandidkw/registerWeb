<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">ลงทะเบียนมีที่ ไม่มีทุน</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700"
          >Username</label
        >
        <input
          v-model="formData.username"
          type="text"
          id="username"
          name="username"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div>
        <div class="mb-4">
          <label for="province" class="block text-sm font-medium text-gray-700"
            >จังหวัด</label
          >
          <Dropdown
            v-model="formData.provinceValue"
            :options="provincedropdown"
            optionLabel="name_th"
            optionValue="name_th"
            placeholder="เลือกจังหวัด"
            @change="getamphure('amphure')"
            filter
          />
        </div>
        <!-- อำเภอ -->
        <div>
          <label for="amphure" class="pr-2"> อำเภอ :</label>
          <Dropdown
            v-model="formData.districtValue"
            :options="amphuredropdown"
            optionLabel="name_th"
            optionValue="name_th"
            placeholder="เลือกอำเภอ"
            @change="getamphure('tambon')"
            filter
          />
        </div>
        <!-- ตำบล -->
        <div>
          <label for="tambon" class="pr-2"> ตำบล :</label>
          <Dropdown
            v-model="formData.tumbolValue"
            :options="tambondropdown"
            optionLabel="name_th"
            optionValue="name_th"
            placeholder="เลือกตำบล"
            filter
            @change="getamphure('tambon')"
          />
        </div>

        <div class="mb-4">
          <label for="postcode" class="block text-sm font-medium text-gray-700"
            >รหัสไปรษณีย์</label
          >
          <InputNumber v-model="formData.zip_code" />
        </div>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          v-model="formData.password"
          type="password"
          id="password"
          name="password"
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Register
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
  username: "",
  email: "",
  password: "",
  provinceValue: "",
  districtValue: "",
  tumbolValue: "",
  zip_code: "",
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
    if (type === "amphure") {
      const selectedProvinceObject = provincedropdown.value.find(
        (province) => province.name_th === formData.value.provinceValue
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
        (amphure) => amphure.name_th === formData.value.districtValue
      );

      if (selectedAmphureObject) {
        try {
          const id = selectedAmphureObject.id;
          const tambon = await axios.get(
            `${
              import.meta.env.VITE_VUE_APP_THAILAND
            }thailand/tambon/by-amphure-id/${id}`
          );

          // ตรวจสอบว่า API ตอบกลับมีข้อมูลตำบล
          if (tambon.data && tambon.data.length > 0) {
            // เซ็ตตำบลที่เลือกใน FormData
            formData.value.selectedAmphure = selectedAmphureObject;

            // เซ็ต zip_code ใน FormData เป็น null
            formData.value.zip_code = null;

            // เซ็ต zip_code ใน Dropdown ตำบล
            tambondropdown.value = tambon.data;

            // console.log("formData.value: ", formData.value);
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
};
getprovince();
</script>

<style scoped></style>
