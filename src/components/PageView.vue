<template>
  <div
    class="bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600 flex flex-col w-full"
  >
    <div>
      <section class="sticky flex w-full">
        <div
          class="max-w-lg px-4 sm:pt-24 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <img
            @click="placeregister()"
            src="../assets/มีที่ ไม่มีทุน.jpg"
            alt=""
          />
        </div>
        <div
          class="max-w-lg px-4 sm:pt-24 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <img @click="capitalregister()" src="../assets/มีทุน ไม่มีที่.jpg" alt="" />
        </div>
        <div
          class="max-w-lg px-4 sm:pt-24 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <img @click="allregister()" src="../assets/มีทั้งที่ มีทั้งทุน.jpg" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const allregister = () => {
  router.push("/allregister");
};
const capitalregister = () => {
  router.push("/capitalregister");
};
const placeregister = () => {
  router.push("/register");
};
</script>

<style scoped></style>
