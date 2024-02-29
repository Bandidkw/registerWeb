<template>
    <div class="ContainerPlatform1">
        <div class="modelregisters1">
            <section>
                <div class="grid border-round-3xl bg-login">
                    <div class="col-12 mt-3">
                        <label style="font-size: 30px; font-weight: 900; color: #000000;">ผู้แนะนำ
                        </label>
                    </div>
                    <div class="col-12 md:col-8 mt-4">
                        <p class="absolute pt-0 pr-2 pb-0 pl-2 -mt-2 ml-2 bg-yellow-500 text-white border-round-3xl">
                            เบอร์โทรศัพท์ ผู้แนะนำ :</p>
                        <InputText v-model="ref_tel" type="text" placeholder="กรอกเบอร์โทรศัพท์"
                            class="w-full border-round-3xl" :disabled="isDisabled" />
                    </div>
                    <div class="col-12 md:col-4 mt-4">
                        <Button class="bg-yellow-500 border-round-3xl" style="border:1px #ffffff"
                            @click="check()">ตรวจสอบ</Button>
                    </div>
                    <div class="col-12">
                        <InlineMessage severity="success" v-if="checks === true">ผู้แนะนำ : {{ name }} {{ lastname }}
                        </InlineMessage>
                    </div>
                    <div class="col-12 mt-5">
                        <Button class="bg-red-500 border-round-3xl" style="border:1px #ffffff" @click="cancel()"
                            v-if="checks === true">เปลี่ยนผู้แนะนำ</Button>
                        <Button class="bg-green-500 border-round-3xl ml-3" style="border:1px #ffffff"
                            @click="confirm()">ยืนยัน</Button>
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
    data: () => ({
        isLoading: false,
        isDisabled: false,
        dialogLoading: false,
        ref_tel: "",
        name: "",
        lastname: "",
        checks: false,
    }),
    methods: {
        async check() {
            this.dialogLoading = true;
            await axios.post(`${process.env.VUE_APP_SHOP}/platform/checkMember/${this.ref_tel}`)
                .then((res) => {
                    if (res.status === 201) {
                        this.$toast.add({
                            severity: "warn",
                            summary: "แจ้งเตือน",
                            detail: "ไม่พบผู้แนะนำ กรอกรหัสใหม่อีกครั้ง",
                            life: 3000,
                        });
                        this.dialogLoading = false;
                        return false;
                    }
                    this.name = res.data.name;
                    this.lastname = res.data.lastname;
                    this.checks = true;
                    this.isDisabled = true;
                    this.dialogLoading = false;
                }).catch(() => {
                    this.$toast.add({
                        severity: "warn",
                        summary: "แจ้งเตือน",
                        detail: "มีบางอย่างผิดพลาด",
                        life: 3000,
                    });
                })
        },
        cancel() {
            this.checks = false;
            this.ref_tel = "";
            this.name = "";
            this.lastname = "";
            this.isDisabled = false;
        },
        async confirm() {
            const ref = {
                tel: this.ref_tel,
                name: this.name,
                lastname: this.lastname,
            };
            this.$store.commit("setRef", ref);
            this.$router.push("/platform");
        },
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