<template>
  

  <div class="grid min-h-screen place-items-center">
  <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 class="text-xl font-semibold">ลงทะเบียนมีทุน ไม่มีที่</h1>
    <div class="mt-6">
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">เบอร์โทรศัพท์ผู้แนะนำ</label>
          <input v-model="ref_tel"  type="tel"  placeholder="กรอกเบอร์โทรศัพท์ผู้แนะนำ" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
        </span>
        <span class="w-1/2">
          <label class="block text-xs font-semibold text-gray-600 uppercase">ชื่อ-นามสกุล</label>
        <input v-model="investor_name" type="text"  placeholder="กรอกชื่อ-นามสกุล"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
        
      </span>
      </div>
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">เบอร์โทร</label>
          <input v-model="investor_phone" type="text"  placeholder="กรอกเบอร์โทร"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
        </span>
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">เลขบัตรประชาชน</label>
        <input v-model="investor_iden" type="text" placeholder="กรอกเลขบัตรประชาชน"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
        
      </span>
      </div>
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">อีเมลล์</label>
          <input v-model="investor_email" type="text"  placeholder="กรอกอีเมลล์"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
        </span>
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">รหัสผ่าน</label>
        <input v-model="investor_password" type="password" placeholder="กรอกรหัสผ่าน"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
      </span>
      </div>
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">ที่อยู่</label>
          <input v-model="investor_address" type="text"  placeholder="กรอกที่อยู่"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
        </span>
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">ตำบล</label>
        <input v-model="investor_subdistrict" type="password" placeholder="กรอกตำบล"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
      </span>
      </div>

      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">อำเภอ</label>
          <input v-model="investor_district"  type="text"  placeholder="กรอกอำเภอ"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
        </span>
        <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">จังหวัด</label>
        <input  v-model="investor_province" type="password" placeholder="กรอกจังหวัด"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
      </span>
      <span class="w-1/2">
          <label  class="block text-xs font-semibold text-gray-600 uppercase">รหัสไปรษณีย์</label>
        <input v-model="investor_postcode" type="password" placeholder="กรอกรหัสไปรษณีย์"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
      </span>
      </div>

      <button  class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
       สมัคร
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      // ข้อมูลนักลงทุน
      investor_email: '',
      investor_password: '',
      investor_address: '',
      investor_subdistrict: '',
      investor_district: '',
      investor_province: '',
      investor_postcode: '',

      // ข้อมูลสมัครสมาชิก
      registerError: null,  // ใช้เก็บข้อความ error จากการสมัคร
    };
  },
  methods: {
    async checkExistingPhoneNumber() {
      try {
        const response = await this.$axios.get(`${process.env.VUE_APP_API}/platform/member`, {
          params: {
            tel: this.investor_tel,
          },
        });

        if (response.data.data.length > 0) {
          // มีเบอร์อยู่แล้ว
          const confirmResult = confirm('มีเบอร์นี้อยู่แล้ว คุณต้องการที่จะสมัครใช่หรือไม่?');

          if (confirmResult) {
            // ทำการสมัคร
            this.registerInvestor();
          } else {
            // ไม่ทำการสมัคร
            this.registerError = 'ยกเลิกการสมัคร';
          }
        } else {
          // ไม่มีเบอร์อยู่แล้ว ทำการสมัคร
          this.registerInvestor();
        }
      } catch (error) {
        console.error('Error checking existing phone number:', error);
        this.registerError = 'เกิดข้อผิดพลาดในการตรวจสอบเบอร์โทรศัพท์';
      }
    },
    async registerInvestor() {
      try {
        // เตรียมข้อมูลสำหรับส่งไปยัง API
        const requestData = {
          investor_email: this.investor_email,
          investor_password: this.investor_password,
          investor_address: this.investor_address,
          investor_subdistrict: this.investor_subdistrict,
          investor_district: this.investor_district,
          investor_province: this.investor_province,
          investor_postcode: this.investor_postcode,
        };

        // เรียก API สมัครนักลงทุน
        const response = await this.$axios.post(`${process.env.VUE_APP_API}/register/investor`, requestData);

        // ทำสิ่งที่คุณต้องการหลังจากสมัครสำเร็จ
        console.log('Registration successful:', response.data);
        // เช่น ไปยังหน้าถัดไป แสดงข้อความ ฯลฯ
      } catch (error) {
        console.error('Error registering investor:', error);
        this.registerError = 'เกิดข้อผิดพลาดในการสมัคร';
      }
    },
    onSubmit() {
      this.registerError = null;  // รีเซ็ตข้อความ error ทุกครั้งที่กดปุ่มสมัคร
      this.checkExistingPhoneNumber();
    },
  },
};
</script>


<style scoped>

</style>
