<template>
    <div class="containerregisterlandlord">
        <div class="modelregister">
            <section>
                <div class="grid border-round-3xl bg-login">
                    <div class="col-12 mt-3">
                        <label style="font-size: 30px; font-weight: 900; color: #000000;">ระบบลงทะเบียน
                            (มีสถานที่ - ไม่มีทุน)</label>
                    </div>
                    <div class="col-12 mt-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ชื่อ - นามสกุล :</p>
                        <InputText v-model="name" type="text" placeholder="กรอกชื่อ - นามสกุล"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-6">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            เบอร์โทรศัพท์ :</p>
                        <InputMask mask="999-9999999" v-model="tel" type="text" placeholder="กรอกเบอร์โทรศัพท์"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-6">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            เลขประจำตัวประชาชน :</p>
                        <InputMask mask="9-9999-99999-99-9" v-model="iden" type="text" placeholder="กรอกเลขประจำตัวประชาชน"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-8">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            E-mail : </p>
                        <InputText v-model="email" type="text" placeholder="กรอกอีเมล (ถ้ามี)"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 md:col-7">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            Username : </p>
                        <InputText v-model="username" type="text" placeholder="กรอกชื่อผู้ใช้งาน"
                            class="w-full border-round-3xl" />
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
                    <div class="col-12 mt-5">
                        <Button class="bg-yellow-500 border-round-3xl" style="border:1px #ffffff"
                            @click="registor()">สมัครสมาชิก</Button>
                    </div>
                </div>
            </section>
        </div>
        <div class="logoregistor">
            <img src="../../assets/image/logo_register1.png" alt="Image" style="width: 80%" @click="$router.push('/')" />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created() {
        document.title = "ลงทะเบียน มีที่ไม่มีทุน | Tossagun One Stop Shop"
    },
    async mounted() {
        this.isLoading = true;
        await axios.get(`${process.env.VUE_APP_THAILAND}thailand/province`, {
            headers: {
                'auth-token': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            this.item_province = res.data;
            this.isLoading = false;
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

        item_province: [],
        item_amphure: [],
        item_tambon: [],

        tel_ref: "",
        name: "",
        username: "",
        password: "",
        confirm_password: "",
        tel: "",
        iden: "",
        email: "",
        address: "",
        tambon: "",
        amphure: "",
        province: "",
        postcode: "",
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
        async registor() {
            if (
                this.name === "" ||
                this.tel === "" ||
                this.iden === "" ||
                this.username === "" ||
                this.password === "" ||
                this.confirm_password === "" ||
                this.tambon === "" ||
                this.amphure === "" ||
                this.province === "" ||
                this.postcode === ""
            ) {
                this.$toast.add({
                    severity: "error",
                    summary: "ไม่สำเร็จ",
                    detail: "กรอกข้อมูลให้ครบถ้วน",
                    life: 3000,
                });
            }
            if (this.password !== this.confirm_password) {
                this.$toast.add({
                    severity: "error",
                    summary: "ไม่สำเร็จ",
                    detail: "รหัสผ่านไม่ตรงกัน",
                    life: 3000,
                });
            }
            if (this.email === "") {
                this.email = "ไม่มี";
            }
            this.tel = this.tel.replace("-", "");
            this.iden = this.iden.replace("-", "");
            this.iden = this.iden.replace("-", "");
            this.iden = this.iden.replace("-", "");
            this.iden = this.iden.replace("-", "");
            const data = {
                landlord_name: this.name,
                landlord_phone: this.tel,
                landlord_iden: this.iden,
                landlord_email: this.email,
                landlord_username: this.username,
                landlord_password: this.password,
                landlord_address: this.address,
                landlord_subdistrict: this.tambon.name_th,
                landlord_district: this.amphure.name_th,
                landlord_province: this.province.name_th,
                landlord_postcode: this.postcode,
            };
            await axios.post(`${process.env.VUE_APP_SHOP}/register/landlord`,
                data,
            ).then(() => {
                this.$toast.add({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "ลงทะเบียนสำเร็จ กรุณารอแอดมินตรวจสอบและติดต่อกลับ",
                    life: 3000,
                });
                this.clearData();
            }).catch((err) => {
                this.$toast.add({
                    severity: "danger",
                    summary: "ไม่สำเร็จ",
                    detail: err.message,
                    life: 3000,
                });
            })
        },
        clearData() {
            this.tel_ref = "";
            this.name = "";
            this.username = "";
            this.password = "";
            this.confirm_password = "";
            this.tel = "";
            this.iden = "";
            this.email = "";
            this.address = "";
            this.tambon = "";
            this.amphure = "";
            this.province = "";
            this.postcode = "";
        },
    }
}
</script>
<style>
.containerregisterlandlord {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 120vh;
    background-image: url("../../assets/image/registor_landlord.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.modelregister {
    max-width: 40%;
    margin-bottom: 10%;
    margin-left: 10%;
}

.logoregistor {
    margin-left: 3%;
    margin-bottom: 45%;
}

.bg-login {
    box-shadow: rgba(151, 4, 170, 0.878);
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    background-repeat: no-repeat;
    background-position: center center;
    padding: 1.5rem;
}
</style>