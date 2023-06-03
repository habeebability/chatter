<template>
  <div class="flex flex-col md:flex-row h-screen w-screen">
    <!-- Picture side -->
    <div class="hidden relative md:block md:w-2/5">
      <img
        src="../../assets/images/login-bg-img.png"
        alt="Background Image"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="p-8">
          <h1 class="text-center text-white text-4xl font-bold">CHATTER</h1>
          <p
            class="text-justify text-white text-xl font-semibold my-5"
          >Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
        </div>
      </div>
    </div>

    <!-- Login form side -->
    <div class="flex justify-center py-10 md:w-3/5 h-full">
      <div class="w-full max-w-lg">
        <div class="flex">
          <!-- Login tab -->
          <button
            :class="{
            'border-b-blue font-bold': activeTab === 'login',
            'text-gray-500': activeTab !== 'login'
          }"
            class="flex-1 py-4 px-6 text-center border-b-2 focus:outline-none uppercase"
            @click="activeTab = 'login'"
          >Login</button>

          <button
            :class="{
            'border-b-blue font-bold': activeTab === 'register',
            'text-gray-500': activeTab !== 'register'
          }"
            class="flex-1 py-4 px-6 text-center border-b-2 focus:outline-none uppercase"
            @click="activeTab = 'register'"
          >Register</button>
        </div>

        <!-- Login form -->

        <div class="p-5" v-if="activeTab == 'login'">
          <h2 class="text-3xl text-center my-6">Welcome Back</h2>

          <div class="my-5">
            <label for="email" class="block mb-2">Email address</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="w-full border border-gray-300 rounded px-3 py-3"
              placeholder="Enter your email"
            />
          </div>

          <div class="my-5">
            <label for="password" class="block mb-2">Password</label>
            <input
              id="password"
              type="password"
              v-model="password"
              class="w-full border border-gray-300 rounded px-3 py-3"
              placeholder="Enter your password"
            />
          </div>

          <button class="w-full bg-[#543EE0] text-white rounded px-4 py-2" @click="signIn">Login</button>
        </div>

        <!-- Register -->
        <div class="my-[1rem] p-5" v-if="activeTab == 'register'">
          <h2 class="text-3xl text-center my-3">Register as a Writer/Reader</h2>

          <!-- Email input -->
          <div class="my-5">
            <label for="email" class="block mb-2">Email address</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="w-full border border-gray-300 rounded px-3 py-3"
              placeholder="Enter your email"
            />
          </div>

          <!-- Password input -->
          <div class="my-5">
            <label for="password" class="block mb-2">Password</label>
            <input
              id="password"
              type="password"
              v-model="password"
              class="w-full border border-gray-300 rounded px-3 py-3"
              placeholder="Enter your password"
            />
          </div>

          <!-- Sign in button -->
          <button class="w-full bg-[#543EE0] text-white rounded px-4 py-2" @click="signIn">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const handleLogin = async () => {};

const activeTab = ref('login');

// const indicatorOffset = computed(() => {
//   if (activeTab.value === 'login') {
//     return '0%';
//   } else if (activeTab.value === 'register') {
//     return '50%';
//   }
// });

const indicatorOffset = computed(() => (activeTab.value === 'login' ? '0%' : '50%'));
</script>

<style scoped>
/* .gradient-color {
  background: linear-gradient(
    127.55deg,
    rgba(18, 35, 53, 0.98) 8.34%,
    rgba(148, 0, 240, 0.79) 92.26%
  );
} */

/* .gradient-color {
  background: linear-gradient(to bottom, rgba(84, 13, 110, 0.2), rgba(84, 13, 110, 0.5));
} */
</style>