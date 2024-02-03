<template>
  <div
    class="min-h-screen bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600 flex flex-col w-full"
  >
    <div>
      <section class="sticky flex w-full">
        <div
          class="max-w-lg py-8 px-4 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <img
            @click="placeregister()"
            src="../assets/มีที่ ไม่มีทุน.jpg"
            alt=""
            class="rounded-xl hover:scale-105 transition duration-300 ease-in-out drop-shadow-2xl"
          />
        </div>
        <div
          class="max-w-lg px-4 py-8 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <img
            @click="capitalregister()"
            src="../assets/มีทุน ไม่มีที่.jpg"
            alt=""
            class="rounded-xl hover:scale-105 transition duration-300 ease-in-out drop-shadow-2xl"
          />
        </div>
        <div
          class="max-w-lg px-4 py-8 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <img
            @click="allregister()"
            src="../assets/มีทั้งที่ มีทั้งทุน.jpg"
            alt=""
            class="rounded-xl hover:scale-105 transition duration-300 ease-in-out drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const placeregister = () => {
  router.push("/registerland");
};
const capitalregister = () => {
  router.push("/registerinves");
};
const allregister = () => {
  router.push("/register");
};
</script>

<style scoped></style>
