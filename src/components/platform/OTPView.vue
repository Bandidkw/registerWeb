<template>
    <div class="ContainerPlatform1">
        <div class="modelregisters1">
            <section>
                <div class="grid border-round-3xl bg-login">
                    <div class="col-12 mt-3">
                        <label style="font-size: 30px; font-weight: 900; color: #000000;">ระบบลงทะเบียน
                            (Platform)</label>
                    </div>
                    <div class="col-12 md:col-8 mt-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            เบอร์โทรศัพท์ :</p>
                        <InputText v-model="tel" type="text" placeholder="กรอกเบอร์โทรศัพท์" class="w-full border-round-3xl"
                            :disabled="isDisabled" />
                    </div>
                    <div class="col-12 md:col-4 mt-4">
                        <Button class="bg-yellow-500 border-round-3xl" style="border:1px #ffffff" @click="otp()">ส่ง
                            OTP</Button>
                    </div>
                    <div class="col-12">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            OTP :</p>
                        <InputText v-model="ref_code" type="text" placeholder="กรอกรหัส OTP"
                            class="w-full border-round-3xl" />
                    </div>
                    <div class="col-12 mt-5">
                        <Button class="bg-yellow-500 border-round-3xl" style="border:1px #ffffff"
                            @click="confirm()">ตรวจสอบ</Button>
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
    async mounted() {

    },
    data: () => ({
        isDisabled: false,
        isLoading: false,
        dialogLoading: false,
        tel: "",
        ref_code: "",
        token: "",
    }),
    methods: {
        async otp() {
            this.dialogLoading = true;
            this.isDisabled = true;
            const response = await axios.get(`${process.env.VUE_APP_SHOP}/platform/checkMember/${this.tel}`);
            if (response.status === 200) {
                this.dialogLoading = false;
                this.$toast.add({
                    severity: "warn",
                    summary: "แจ้งเตือน",
                    detail: "เบอร์โทรศัพท์ดังกล่าวเป็นสมาชิก Platform แล้ว",
                    life: 3000,
                });
                this.isDisabled = false;
            } else if (response.status === 201) {
                await axios.post(`${process.env.VUE_APP_PLATFORM}/Member/verify`, {
                    phone: this.tel
                }).then((res) => {
                    this.dialogLoading = false;
                    this.token = res.data.result.token;
                })
            }
        },
        async confirm() {
            this.dialogLoading = true;
            await axios.post(`${process.env.VUE_APP_PLATFORM}/Member/check`, {
                token: this.token,
                otp_code: this.ref_code,
            }).then((res) => {
                if (res.data.status === true) {
                    this.dialogLoading = false;
                    this.$toast.add({
                        severity: "success",
                        summary: "สำเร็จ",
                        detail: res.data.message,
                        life: 3000,
                    });
                    this.$store.commit("setPhone", this.tel);
                    this.$router.push("/counselor");
                } else {
                    this.dialogLoading = false;
                    this.$toast.add({
                        severity: "warn",
                        summary: "ไม่สำเร็จ",
                        detail: res.data.message,
                        life: 3000,
                    });
                }
            })
        }
    }
}
</script>
<style>
.ContainerPlatform1 {
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

.modelregisters1 {
    max-width: 30%;
    margin-left: 45%;
    margin-bottom: 10%;
}
</style>