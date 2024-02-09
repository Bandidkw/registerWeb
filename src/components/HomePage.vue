<template>
    <div class="container">
        <div class="col-12 md:col-6 bg-green-500">
            <img src="../assets/image/HomePage.jpg" alt="Image" style="width: 100%" />
        </div>
        <div class="col-12 md:col-6 bg-red-500">

        </div>
        <div class="grid grid-nogutter surface-cestion text-800">
            <div class="col-12 md:col-6 overflow-hidden">

            </div>
            <!-- <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
                <section>
                    <div class="text-6xl text-primary font-bold mb-3">
                        NBA ONE STOP SHOP
                    </div>
                    <h2 class="text-primary">"ร้านเดียวครบ จบทุกบริการ"</h2>
                    <div class="grid">
                        <div class="col-12">
                            <div class="field">
                                <label>ชื่อผู้ใช้งาน (USERNAME) :</label>
                                <InputText v-model="username" type="text" placeholder="ชื่อผู้ใช้งาน" class="w-full font"
                                    @keyup.enter="checklogin()" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="field">
                                <label>รหัสผ่าน (PASSWORD) :</label>
                                <InputText v-model="password" type="password" placeholder="รหัสผ่าน" class="w-full font"
                                    @keyup.enter="checklogin()" />
                            </div>
                        </div>
                    </div>
                    <Button label="เข้าสู่ระบบ" class="w-full" @click="checklogin()" :loading="isLoading"></Button>
                </section>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.container {
    display: flex;
    justify-content: right;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    /* background-image: url("../assets/image/HomePage.jpg"); */
    background-color: black;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;

}

@media (max-width: 768px) {
    .container {
        background-position: center center;
        /* Center the background image */
        height: 100vh;
        /* Reduce the height for smaller screens */
    }

    .modal {
        max-width: 100%;
        margin: 10% auto;
        padding: 0;
    }
}
</style>
  
<style>
/* Media query for screens up to 768px wide */
@media (max-width: 768px) {
    .container {
        background-position: center center;
        height: 100vh;
    }

    .modal {
        max-width: 100%;
        margin: 10% auto;
        padding: 0;
    }
}

/* Media query for screens up to 1024px wide (e.g., iPads) */
@media (max-width: 1024px) {
    .modal {
        max-width: 100%;
    }
}

/* Media query for screens up to 1669px wide */
@media (max-width: 1669px) {
    .modal {
        margin-right: 2%;
        margin-top: 10%;
    }
}


/* เพิ่ม media query เพื่อปรับแต่งคลาส modal ในหน้าจอ 1080x870 */
@media (max-width: 1080px) and (max-height: 870px) {
    .modal {
        margin-top: 15%;
        /* ปรับค่านี้ให้ modal ขยับมากกว่าตรงบน */
        max-width: 40%;
    }
}

/* เพิ่ม media query เพื่อปรับแต่งคลาส modal ในหน้าขนาด 820x1180 */
@media (max-width: 820px) and (max-height: 1180px) {
    .modal {
        margin-top: 0%;
        /* ปรับค่า margin-top เพื่อปรับการแสดงผลของ modal ในหน้าขนาด 820x1180 */
        max-width: 70%;
        margin-right: 13%;
    }
}

/* เพิ่ม media query เพื่อปรับแต่งคลาส modal ในหน้าจอ 912x1368 */
@media (max-width: 912px) and (max-height: 1368px) {
    .modal {
        margin-top: 0%;
        /* ปรับค่า margin-top เพื่อปรับการแสดงผลของ modal ให้ตรงกลาง */
        max-width: 80%;
        /* ปรับความกว้างของ modal */
        margin-right: 10%;
        /* ปรับระยะของขอบขวา */
    }
}

/* เพิ่ม media query เพื่อปรับแต่งคลาส modal ในหน้าจอ 282x653 */
@media (max-width: 282px) and (max-height: 653px) {
    .modal {
        max-width: 100%;
        /* ปรับความกว้างของ modal ในหน้าจอขนาด 282x653 */
        margin-top: 5%;
        /* ปรับ margin-top เพื่อจัดการการแสดงผลในหน้าจอขนาดนี้ */
        margin-right: 0%;
        /* ปรับระยะขอบขวา */
    }
}
</style>
  