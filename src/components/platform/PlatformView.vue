<template>
    <div class="ContainerPlatform">
        <div class="modelregisters">
            <section>
                <div class="grid border-round-3xl bg-login">
                    <div class="col-12 mt-3">
                        <label style="font-size: 30px; font-weight: 900; color: #000000;">ระบบลงทะเบียน
                            (Platform)</label>
                    </div>
                    <div class="col-12 md:col-7 mt-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            เบอร์โทรศัพท์ ผู้แนะนำ :</p>
                        <InputText v-model="ref_tel" type="text" placeholder="กรอกเบอร์โทรศัพท์ผู้แนะนำ"
                            class="w-full border-round-3xl" disabled />
                    </div>
                    <div class="col-12 md:col-5 mt-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ชื่อ - นามสกุล ผู้แนะนำ :</p>
                        <InputText v-model="ref_name" type="text" placeholder="กรอกชื่อ - นามสกุล"
                            class="w-full border-round-3xl" disabled />
                    </div>
                    <div class="col-12 md:col-6">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ชื่อ :</p>
                        <InputText v-model="name" type="text" placeholder="กรอกชื่อ" class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-6">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            นามสกุล :</p>
                        <InputText v-model="lastname" type="text" placeholder="กรอกนามสกุล"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-7">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            เบอร์โทรศัพท์ :</p>
                        <InputMask mask="999-9999999" v-model="tel" type="text" placeholder="กรอกเบอร์โทรศัพท์"
                            class="w-full border-round-3xl" disabled />
                    </div>
                    <div class="col-12 md:col-6">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            รหัสผ่าน :</p>
                        <InputText v-model="password" type="password" placeholder="กรอกรหัสผ่าน"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-6">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ยืนยันรหัสผ่าน :</p>
                        <InputText v-model="confirm_password" type="password" placeholder="ยืนยันรหัสผ่าน"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12"></div>
                    <div class="col-12 md:col-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ที่อยู่ :</p>
                        <InputText v-model="address" type="text" placeholder="กรอกที่อยู่"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-4">
                        <!-- <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            จังหวัด :</p> -->
                        <Dropdown v-model="province" class="w-full border-round-3xl" inputClass="font"
                            :options="item_province" option-label="name_th" placeholder="เลือกจังหวัด" :filter="true"
                            filter-placeholder="ค้นหาจังหวัด" @change="chooseProvince" />
                        <!-- <InputText v-model="province" type="text" placeholder="กรอกจังหวัด"
                            class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12 md:col-4">
                        <!-- <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            อำเภอ :</p> -->
                        <Dropdown v-model="amphure" class="w-full border-round-3xl" inputClass="font"
                            :options="item_amphure" optionLabel="name_th" placeholder="เลือกเขต/อำเภอ" :filter="true"
                            filter-placeholder="ค้นหาเขต/อำเภอ" @change="chooseAmphure" />
                        <!-- <InputText v-model="district" type="text" placeholder="กรอกอำเภอ" class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12 md:col-4">
                        <!-- <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ตำบล :</p> -->
                        <Dropdown v-model="tambon" class="w-full border-round-3xl" inputClass="font" :options="item_tambon"
                            optionLabel="name_th" placeholder="เลือกแขวง/ตำบล" :filter="true"
                            filterPlaceholder="ค้นหาแขวง/ตำบล" @change="chooseTambon" />
                        <!-- <InputText v-model="subdistrict" type="text" placeholder="กรอกตำบล"
                            class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12 md:col-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            รหัสไปรษณีย์ :</p>
                        <InputMask mask="99999" v-model="postcode" inputClass="font" class="w-full font border-round-3xl"
                            placeholder="รหัสไปรษณีย์" />
                        <!-- <InputText v-model="postcode" type="text" placeholder="กรอกรหัสไปรษณีย์"
                            class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12">
                        <span class="flex text-black font-semibold py-2 md:text-sm">ที่อยู่ปัจจุบัน</span>
                        <div class="flex flex-wrap gap-3">
                            <div class="flex align-items-center">
                                <RadioButton v-model="checked" inputId="ingredient1" value="ที่อยู่ตามบัตรประชาชน"
                                    @change="chooseAddress" />
                                <label for="ingredient1" class="ml-2 text-gray-800">ที่อยู่ตามบัตรประชาชน</label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="checked" inputId="ingredient2" value="ที่อยู่ใหม่" />
                                <label for="ingredient2" class="ml-2 text-gray-800">ที่อยู่ใหม่</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-4" v-if="checked === 'ที่อยู่ใหม่'">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ที่อยู่ :</p>
                        <InputText v-model="new_address.new_address" type="text" placeholder="กรอกที่อยู่"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-4" v-if="checked === 'ที่อยู่ใหม่'">
                        <!-- <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            จังหวัด :</p> -->
                        <Dropdown v-model="new_address.new_province" class="w-full border-round-3xl" inputClass="font"
                            :options="item_province" option-label="name_th" placeholder="เลือกจังหวัด" :filter="true"
                            filter-placeholder="ค้นหาจังหวัด" @change="chooseProvince" />
                        <!-- <InputText v-model="province" type="text" placeholder="กรอกจังหวัด"
                            class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12 md:col-4" v-if="checked === 'ที่อยู่ใหม่'">
                        <!-- <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            อำเภอ :</p> -->
                        <Dropdown v-model="new_address.new_district" class="w-full border-round-3xl" inputClass="font"
                            :options="item_amphure" optionLabel="name_th" placeholder="เลือกเขต/อำเภอ" :filter="true"
                            filter-placeholder="ค้นหาเขต/อำเภอ" @change="chooseAmphure" />
                        <!-- <InputText v-model="district" type="text" placeholder="กรอกอำเภอ" class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12 md:col-4" v-if="checked === 'ที่อยู่ใหม่'">
                        <!-- <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ตำบล :</p> -->
                        <Dropdown v-model="new_address.new_subdistrict" class="w-full border-round-3xl" inputClass="font"
                            :options="item_tambon" optionLabel="name_th" placeholder="เลือกแขวง/ตำบล" :filter="true"
                            filterPlaceholder="ค้นหาแขวง/ตำบล" @change="chooseTambon" />
                        <!-- <InputText v-model="subdistrict" type="text" placeholder="กรอกตำบล"
                            class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12 md:col-4" v-if="checked === 'ที่อยู่ใหม่'">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            รหัสไปรษณีย์ :</p>
                        <InputMask mask="99999" v-model="new_address.new_postcode" inputClass="font"
                            class="w-full font border-round-3xl" placeholder="รหัสไปรษณีย์" />
                        <!-- <InputText v-model="postcode" type="text" placeholder="กรอกรหัสไปรษณีย์"
                            class="w-full border-round-3xl" /> -->
                    </div>
                    <div class="col-12 mt-5">
                        <Button class="bg-yellow-500 border-round-3xl" style="border:1px #ffffff"
                            @click="registor()">สมัครสมาชิก</Button>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <Dialog class="border-0 shadow-none " :draggable="false" v-model:visible="dialogLoading" :closable="false"
        :modal="true">
        <div class="grid">
            <div class="col-12 text-center">
                <img src="../../assets/image/spinner.png" width="400" />
            </div>
        </div>
    </Dialog>
</template>
<script>
import axios from 'axios';
export default {
    created() {
        document.title = "ลงทะเบียน มีที่ไม่มีทุน | Tossagun One Stop Shop"
    },
    async mounted() {
        this.isLoading = true;
        this.dialogLoading = true;
        this.ref_tel = this.$store.getters.ref.tel;
        this.ref_name = this.$store.getters.ref.name;
        this.tel = this.$store.getters.phone;
        await axios.get(`${process.env.VUE_APP_THAILAND}thailand/province`, {
            headers: {
                'auth-token': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            this.item_province = res.data;
            this.isLoading = false;
            this.dialogLoading = false;
        }).catch((err) => {
            console.log(err);
            this.isLoading = false;
            this.$toast.add({
                severity: "error",
                summary: "ไม่สำเร็จ",
                detail: err.response.data.message,
                life: 3000,
            });
        });
    },
    data: () => ({
        isLoading: false,
        dialogLoading: false,
        item_province: [],
        item_amphure: [],
        item_tambon: [],

        ref_tel: "",
        ref_name: "",

        checked: "",

        name: "",
        lastname: "",
        tel: "",
        password: "",
        confirm_password: "",
        address: "",
        tambon: "",
        amphure: "",
        province: "",
        postcode: "",
        new_address: {
            new_sub_address: "",
            new_subdistrict: "",
            new_district: "",
            new_province: "",
            new_postcode: ""
        },
    }),
    methods: {
        async chooseProvince(evt) {
            await axios.get(`${process.env.VUE_APP_THAILAND}thailand/amphure/by-province-id/${evt.value.id}`, {
                headers: {
                    'auth-token': `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                this.item_amphure = res.data;
                this.item_tambon = [];
                this.amphure = "";
                this.tambon = "";
            });
        },
        async chooseAmphure(evt) {
            await axios.get(`${process.env.VUE_APP_THAILAND}thailand/tambon/by-amphure-id/${evt.value.id}`, {
                headers: {
                    'auth-token': `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                this.item_tambon = res.data;
                this.tambon = "";
            })
        },
        chooseTambon() {
            this.postcode = String(this.tambon.zip_code);
        },
        chooseAddress() {
            if (
                this.address === "" ||
                this.tambon === "" ||
                this.amphure === "" ||
                this.province === "" ||
                this.postcode === ""
            ) {
                this.$toast.add({
                    severity: "warn",
                    summary: "แจ้งเตือน",
                    detail: "กรุณากรอกที่อยู่ให้ครบถ้วน",
                    life: 3000,
                });
                return false;
            }
            this.new_address.new_sub_address = this.address;
            this.new_address.new_subdistrict = this.tambon.name_th;
            this.new_address.new_district = this.amphure.name_th;
            this.new_address.new_province = this.province.name_th;
            this.new_address.new_postcode = this.postcode;
        },
        async registor() {
            if (this.password !== this.confirm_password) {
                this.$toast.add({
                    severity: "warn",
                    summary: "แจ้งเตือน",
                    detail: "รหัสผ่านไม่ตรงกัน",
                    life: 3000,
                });
                return false;
            }
            if (
                this.name === "" ||
                this.lastname === "" ||
                this.address === "" ||
                this.tambon === "" ||
                this.amphure === "" ||
                this.province === "" ||
                this.postcode === ""
            ) {
                this.$toast.add({
                    severity: "warn",
                    summary: "แจ้งเตือน",
                    detail: "กรุณากรอกข้อมูลให้ครบถ้วน",
                    life: 3000,
                });
                return false;
            }
            this.tel = this.tel.replace("-", "");
            const data = {
                name: this.name,
                lastname: this.lastname,
                tel: this.tel,
                ref_tel: this.ref_tel,
                password: this.password,
                address: this.address,
                subdistrict: this.tambon.name_th,
                district: this.amphure.name_th,
                province: this.province.name_th,
                postcode: this.postcode,
                new_address: this.new_address,
            };
            this.dialogLoading = true;
            await axios.post(`${process.env.VUE_APP_PLATFORM}/Member/create`, data,
            ).then(() => {
                this.dialogLoading = false;
                this.$toast.add({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "สมัครสมาชิกสำเร็จ",
                    life: 3000,
                });
                this.$router.push("/otp/phone")
            })
        },
    }
}
</script>
<style>
.ContainerPlatform {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 120vh;
    background-image: url("../../assets/image/register_platform.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.modelregisters {
    max-width: 40%;
    margin-left: 45%;
}

.bg-login {
    box-shadow: rgba(151, 4, 170, 0.878);
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.856);
    backdrop-filter: blur(10px);
    background-repeat: no-repeat;
    background-position: center center;
    padding: 1.5rem;
}
</style>