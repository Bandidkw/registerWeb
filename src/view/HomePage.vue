<template>
    <div class="container">
        <div class="col-12 md:col-5">
            <!-- <img src="../assets/image/menu.png" alt="Image" style="width: 90%" /> -->
            <img src="../assets/image/mascot1.png" alt="Image" style="width: 90%" />
        </div>
        <div class="col-12 md:col-7">
            <div class="grid">
                <div class="col-12 lg:col-5">
                    <!-- <Image src="/src/assets/image/invesment_landlord.png" alt="Image" width="300" preview /> -->
                    <img src="../assets/image/invesment_landlord.png" alt="Image" style="width: 70%"
                        @click="$router.push('/register/landlord')" />
                </div>
                <div class="col-12 lg:col-7">
                    <Card class="accept-card">
                        <template #title>รายละเอียดการลงทุน</template>
                        <template #subtitle>ลงทุนด้วยพื้นที่และสถานที่</template>
                        <template #content>
                            <p class="m-0">
                                สำหรับผู้ที่มีพื้นที่และสถานที่พร้อมเปิดช้อปมาตราฐานสินค้า
                                และบริการภายใต้เงื่อนไขการกำหนดพื้นที่แต่ละขนาดร้าน S / M / L / XL
                                ซึ่งทางบริษัทเป็นผู้บริหารจัดการเรื่องทุนอุปกรณ์และสินค้าภายในร้าน
                                พร้อมตกแต่งและเปิดให้บริการสมาชิกในพื้นที่ได้ทันที และสมารถรับส่วนแบ่งกำไรรายวัน
                                ตามแผนการตลาดในฐานะ
                                (ผู้ให้บริหารศูนย์)
                            </p>
                        </template>
                        <template #footer>
                            <!-- <Button icon="" label="ลงทะเบียน" class="p-button-sm text-sm" /> -->
                            <button type="button" class="accept-button"
                                @click="$router.push('/register/landlord')">ลงทะเบียน</button>
                        </template>
                    </Card>
                </div>
            </div>
            <div class="grid">
                <div class="col-12 lg:col-7">
                    <Card class="accept-card">
                        <template #title>รายละเอียดการลงทุน</template>
                        <template #subtitle>ลงทุนด้วยพื้นที่และสถานที่และเงินทุน</template>
                        <template #content>
                            <p class="m-0">
                                สำหรับผู้ที่มีทั้งสถานที่และเงินทุน เพื่อรับค่าตอบแทนเต็มๆ
                                ภายใต้เงื่อนไขการตลาดของทางบริษัทฯโดยลูกค้าจัดเตรียมสถานที่และเงินลงทุน ตามขนาดร้าน S / M /
                                L / XL
                                โดยทางบริษัทจะเป็นผู้บริหารจัดการอุปกรณ์และสินค้าตลอดถึงการตกแต่งร้านค้าพร้อมเปิดให้บริการแก้สมาชิกในพื้นที่ได้ทันที
                                และรับส่วนแบ่งกำไรรายวัน ตามแผนการตลาดในฐานะ (ผู้ให้บริหารศูนย์ และ ผู้ลงทุน)
                            </p>
                        </template>
                        <template #footer>
                            <!-- <Button icon="" label="ลงทะเบียน" class="p-button-sm text-sm" /> -->
                            <!-- <button type="button" class="accept-button"
                                @click="$router.push('/register/invesment')">ลงทะเบียน</button> -->
                            <button type="button" class="accept-button">ลงทะเบียน</button>
                        </template>
                    </Card>
                </div>
                <div class="col-12 lg:col-5">
                    <!-- <Image src="/src/assets/image/invesment.png" alt="Image" width="300" preview /> -->
                    <img src="../assets/image/invesment.png" alt="Image" style="width: 70%" />
                </div>
            </div>
            <div class="grid">
                <div class="col-12 lg:col-5">
                    <!-- <Image src="/src/assets/image/invesment_investor.png" alt="Image" width="300" preview /> -->
                    <img src="../assets/image/invesment_investor.png" alt="Image" style="width: 70%"
                        @click="$router.push('/register/investor')" />
                </div>
                <div class="col-12 lg:col-7">
                    <Card class="accept-card">
                        <template #title>รายละเอียดการลงทุน</template>
                        <template #subtitle>ลงทุนด้วยเงินทุน</template>
                        <template #content>
                            <p class="m-0">
                                สำหรับนักลงทุน ที่ต้องการผลตอบแทนมากกว่าการนำเงินฝากธนาคาร หรือลงทุนทางช่องทางอื่นๆ
                                โดยที่นักลงทุนจะมีร้านให้สามารถติดตามดู รายได้ ยอดขาย
                                ในฐานะผู้ลงทุนเจ้าของสินค้าและอุปกรณ์ตามสัญญา
                                และสามารถตรวจสอบการทำงานภายในร้านผ่านกล้องวงจรปิดได้ตลอดเวลา และสามารถรับส่วนแบ่งกำไรรายวัน
                                ตามแผนการตลาดในฐานะ (ผู้ลงทุน)
                            </p>
                        </template>
                        <template #footer>
                            <!-- <Button icon="" label="ลงทะเบียน" class="p-button-sm text-sm" /> -->
                            <button type="button" class="accept-button"
                                @click="$router.push('/register/investor')">ลงทะเบียน</button>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = "รายละเอียดในการลงทะเบียน | Tossagun One Stop Shop"
    },
}
</script>
<style>
.container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* height: 100vh; */
    /* background-image: url("../assets/image/HomePage.jpg"); */
    background-color: black;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.accept-card {
    background-color: #FFE4B5;
}

.accept-button {
    background-color: #FFCC33;
    color: fff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
}

@media (max-width: 768px) {
    .container {
        background-position: center center;
        /* Center the background image */
        height: 100%;
        /* Reduce the height for smaller screens */
    }
}
</style>
