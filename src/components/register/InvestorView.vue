<template>
    <div class="containerregisterinvestor">
        <div class="modelregister">
            <section>
                <div class="grid border-round-3xl bg-login" v-if="step === 1">
                    <div class="col-12 mt-3">
                        <label style="font-size: 30px; font-weight: 900; color: #000000;">หนังสือให้ความยินยอม</label>
                    </div>
                    <div class="col-12">
                        <ScrollPanel class="containercontract" style="height: 400px;">
                            <div class="text-black devcontract" v-html="contract" />
                        </ScrollPanel>
                    </div>
                    <div class="col-12 mt-3">
                        <Checkbox v-model="checked" :binary="true" /> ยอมรับเงื่อนไขสัญญาข้างต้น และเซ็นสัญญาอิเล็กทรอนิกส์
                        ถือว่าสัญญาฉบับนี้สมบูรณ์แบบและถูกต้องตามกฎหมาย
                    </div>
                    <div class="col-12 mt-3">
                        <Button @click="confirmContract()" elevation="0" :loading="isLoading">ยอมรับเงื่อนไข</Button>
                    </div>
                </div>
                <div class="grid border-round-3xl bg-login" v-if="step === 2">
                    <div class="col-12 mt-3">
                        <label style="font-size: 30px; font-weight: 900; color: #000000;">ระบบลงทะเบียน
                            (มีทุน - ไม่มีสถานที่)</label>
                    </div>
                    <div class="col-12 md:col-5 mt-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            เบอร์โทรศัพท์ผู้แนะนำ : </p>
                        <InputMask mask="999-9999999" v-model="tel_ref" type="text" placeholder="กรอกเบอร์โทรศัพท์ผู้แนะนำ"
                            class="w-full border-round-3xl" @change="choosePlatform" :disabled="isDisabled" />
                    </div>
                    <div class="col-12 md:col-5 mt-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            ชื่อผู้แนะนำ : </p>
                        <InputText v-model="name_ref" type="text" placeholder="กรอกชื่อผู้แนะนำ"
                            class="w-full border-round-3xl" disabled />
                    </div>
                    <div class="col-12 md:col-2 mt-4">
                        <Button v-if="platform === false" class="bg-yellow-500 border-round-3xl w-full"
                            style="border:1px #ffffff" @click="confirm_platform">ยืนยัน</Button>
                        <Button v-if="platform === true" class="bg-yellow-500 border-round-3xl w-full"
                            style="border:1px #ffffff" @click="reset_platform">เปลี่ยน</Button>
                    </div>
                    <div class="col-12">
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
                        <Dropdown v-model="province" class="w-full border-round-3xl" inputClass="font"
                            :options="item_province" option-label="name_th" placeholder="เลือกจังหวัด" :filter="true"
                            filter-placeholder="ค้นหาจังหวัด" @change="chooseProvince" />
                    </div>
                    <div class="col-12 md:col-4">
                        <Dropdown v-model="amphure" class="w-full border-round-3xl" inputClass="font"
                            :options="item_amphure" optionLabel="name_th" placeholder="เลือกเขต/อำเภอ" :filter="true"
                            filter-placeholder="ค้นหาเขต/อำเภอ" @change="chooseAmphure" />
                    </div>
                    <div class="col-12 md:col-4">
                        <Dropdown v-model="tambon" class="w-full border-round-3xl" inputClass="font" :options="item_tambon"
                            optionLabel="name_th" placeholder="เลือกแขวง/ตำบล" :filter="true"
                            filterPlaceholder="ค้นหาแขวง/ตำบล" @change="chooseTambon" />
                    </div>
                    <div class="col-12 md:col-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            รหัสไปรษณีย์ :</p>
                        <InputMask mask="99999" v-model="postcode" inputClass="font" class="w-full font border-round-3xl"
                            placeholder="รหัสไปรษณีย์" />
                    </div>
                    <div class="col-12 mt-5">
                        <Button class="bg-yellow-500 border-round-3xl" style="border:1px #ffffff"
                            @click="registor()">สมัครสมาชิก</Button>
                    </div>
                </div>
                <div class="grid border-round-3xl bg-login" v-if="step === 3">
                    <div class="col-12">
                        <img src="../../assets/image/finish1.jpg" alt="Image" style="width: 100%" />
                        <Button class="mt-4 bg-yellow-500 border-round-3xl" @click="loginShop()">เข้าสู่ระบบ</Button>
                    </div>
                </div>
            </section>
        </div>
        <div class="logoregistor">
            <img src="../../assets/image/logo_register3.png" alt="Image" style="width: 80%" @click="$router.push('/')" />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created() {
        document.title = "ลงทะเบียน มีทุนไม่มีที่ | Tossagun One Stop Shop"
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
        await axios.post(`${process.env.VUE_APP_SHOP}/contract/PDPA`, null, {}).then((res) => {
            this.contract = res.data.detail_html.body;
        });
    },
    data: () => ({
        isDisabled: false,
        isLoading: false,

        item_province: [],
        item_amphure: [],
        item_tambon: [],

        step: 1,
        contract: "",
        checked: false,

        platform: false,
        tel_ref: "",
        name_ref: "",
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
        confirmContract() {
            if (this.checked === false) {
                // this.toast.info('กรุณาอ่านและยอมรับเงื่อนไข')
                this.$toast.add({
                    severity: "warn",
                    summary: "แจ้งเตือน",
                    detail: "กรุณาอ่านและยอมรับเงื่อนไขสัญญา",
                    life: 3000,
                });
                return false;
            } else {
                this.$confirm.require({
                    header: "หนังสือให้ความยินยอม",
                    message: "ท่านยินยอมในการเปิดเผยข้อมูลส่วนบุคลคลใช่หรือไม่ ?",
                    rejectIcon: "pi pi-times",
                    rejectLabel: "ยกเลิก",
                    acceptIcon: "pi pi-check",
                    acceptLabel: "ยืนยัน",
                    accept: () => {
                        this.step = 2;
                    }
                })
            }
        },
        async choosePlatform() {
            this.isLoading = true;
            this.tel_ref = this.tel_ref.replace("-", "");
            await axios.post(`${process.env.VUE_APP_SHOP}/platform/checkMember/${this.tel_ref}`
            ).then((res) => {
                this.isLoading = false;
                this.name_ref = res.data.name;
                this.$toast.add({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: `ผู้แนะนำ ${res.data.name} เบอร์โทรศัพท์ ${res.data.tel}`,
                    life: 3000,
                });
            }).catch((err) => {
                this.$toast.add({
                    severity: "danger",
                    summary: "ไม่สำเร็จ",
                    detail: err.message,
                    life: 3000,
                });
            })
        },
        confirm_platform() {
            if (this.tel_ref === "" && this.name_ref === "") {
                this.$toast.add({
                    severity: "warn",
                    summary: "แจ้งเตือน",
                    detail: "กรุณากรอกเบอร์ผู้แนะนำ",
                    life: 3000,
                });
                return false;
            }
            this.$confirm.require({
                header: "ผู้แนะนำ",
                message: `ผู้แนะนำของท่านคือ ${this.name_ref} ใช่หรือไม่ ?`,
                rejectIcon: "pi pi-times",
                rejectLabel: "ยกเลิก",
                acceptIcon: "pi pi-check",
                acceptLabel: "ยืนยัน",
                accept: () => {
                    this.platform = true;
                    this.isDisabled = true;
                }
            })
        },
        reset_platform() {
            this.$confirm.require({
                header: "เปลี่ยนผู้แนะนำ",
                message: `ท่านต้องการเปลี่ยนผู้แนะนำ ${this.name_ref} ใช่หรือไม่ ?`,
                rejectIcon: "pi pi-times",
                rejectLabel: "ยกเลิก",
                acceptIcon: "pi pi-check",
                acceptLabel: "ยืนยัน",
                accept: () => {
                    this.tel_ref = "";
                    this.name_ref = "";
                    this.platform = false;
                    this.isDisabled = false;
                }
            })
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
                investor_name: this.name,
                investor_phone: this.tel,
                investor_iden: this.iden,
                investor_email: this.email,
                investor_username: this.username,
                investor_password: this.password,
                investor_address: this.address,
                investor_subdistrict: this.tambon.name_th,
                investor_district: this.amphure.name_th,
                investor_province: this.province.name_th,
                investor_postcode: this.postcode,
            };
            await axios.post(`${process.env.VUE_APP_SHOP}/register/investor`,
                data,
            ).then(() => {
                this.$toast.add({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "ลงทะเบียนสำเร็จ กรุณารอแอดมินตรวจสอบและติดต่อกลับ",
                    life: 3000,
                });
                this.clearData();
                this.step = 3;
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
        loginShop() {
            window.location.href = "https://shop.tossaguns.com"
        },
    }
}
</script>
<style>
.containerregisterinvestor {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 120vh;
    background-image: url("../../assets/image/registor_investor.jpg");
    background-repeat: no-repeat;
    background-size: cover;
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

.containercontract {
    overflow: auto;
    /* border-style: solid; */
    border-width: 1px;
    border-radius: 10px;
}

.devcontract {
    padding: 15px;
    text-align: left;
}
</style>