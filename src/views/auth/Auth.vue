<template>
  <div class="h-screen w-screen overflow-y-auto md:overflow-hidden text-[#212529]">
    <div class="h-full flex flex-col md:flex-row">
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
                v-model="loginFormData.email"
                class="w-full border border-gray-300 rounded px-3 py-3"
                placeholder="Enter your email"
                autocomplete="off"
              />
            </div>

            <div class="my-5">
              <label for="password" class="block mb-2">Password</label>
              <input
                id="password"
                type="password"
                v-model="loginFormData.password"
                class="w-full border border-gray-300 rounded px-3 py-3"
                placeholder="Enter your password"
                autocomplete="off"
              />
            </div>

            <button class="w-full bg-[#543EE0] text-white rounded px-4 py-2" @click="signIn">Login</button>
          </div>

          <!-- Register -->
          <div class="my-[.1rem] p-5" v-if="activeTab == 'register'">
            <h2 class="text-3xl text-center my-1">Register as a Writer/Reader</h2>

            <form class="overflow-y-auto">
              <div class="grid grid-cols-1 w-full">
                <!-- Email input -->
                <div class="my-2 flex flex-col lg:flex-row lg:space-x-5">
                  <div class="w-full">
                    <label for="fname" class="block mb-2">First name</label>
                    <input
                      id="fname"
                      type="text"
                      v-model="signupFormData.fname"
                      class="w-full border border-gray-300 rounded px-3 py-3"
                      placeholder="John"
                    />
                  </div>
                  <div class="w-full">
                    <label for="lname" class="block mb-2">Last name</label>
                    <input
                      id="lname"
                      type="text"
                      v-model="signupFormData.lname"
                      class="w-full border border-gray-300 rounded px-3 py-3"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div class="w-full my-2">
                  <label for="joinAs" class="block mb-2 text-[#3B3B3B]">Joining as</label>

                  <select
                    v-model="signupFormData.joinAs"
                    name="joinAs"
                    id="joinAs"
                    class="w-full border border-gray-300 rounded px-3 py-3 cursor-pointer"
                  >
                    <option value selected disabled>Select Option</option>
                    <option value="writer">Writer</option>
                    <option value="reader">Reader</option>
                    <!-- <option v-for="group in groups" :key="group" :value="group">{{ group.label }}</option> -->
                  </select>

                  <div
                    class="pointer-events-none absolute inset-y-0 top-5 right-0 flex items-center px-2"
                  >
                    <i class="fas fa-chevron-down text-blue-400"></i>
                  </div>
                </div>

                <div class="w-full my-2">
                  <label for="email" class="block mb-2">Email address</label>
                  <input
                    id="email"
                    type="email"
                    v-model="signupFormData.email"
                    class="w-full border border-gray-300 rounded px-3 py-3"
                    placeholder="Enter your email"
                  />
                </div>

                <!-- Password input -->
                <div class="w-full my-2">
                  <label for="password" class="block mb-2 text-[#3B3B3B]">Password</label>
                  <input
                    id="password"
                    type="password"
                    v-model="signupFormData.password"
                    class="w-full border border-gray-300 rounded px-3 py-3"
                    placeholder="Enter your password"
                  />
                </div>
                <!-- Confirm Password input -->
                <div class="w-full my-2">
                  <label for="passwordConfirm" class="block mb-2">Confirm Password</label>
                  <input
                    id="passwordConfirm"
                    type="password"
                    v-model="signupFormData.passwordConfirm"
                    class="w-full border border-gray-300 rounded px-3 py-3"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <!-- Sign up button -->
              <button
                class="w-full bg-[#543EE0] text-white rounded px-4 py-1 my-1"
                @click="signIn"
              >Create account</button>
              <button class="w-full border border-gray-200 rounded px-4 py-1 my-1" @click="signIn">
                <span class="flex justify-center items-center">
                  <img class="mx-1" src="../../assets/icons/google-logo.png" alt />
                  Sign up with google
                </span>
              </button>
              <button class="w-full border border-gray-200 rounded px-4 py-1 my-1" @click="signIn">
                <span class="flex justify-center items-center">
                  <img class="mx-1" src="../../assets/icons/linkedin-logo.png" alt />
                  Sign up with Linkedin
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const loginFormData = ref({
  email: '',
  password: ''
});

const signupFormData = ref({
  email: '',
  password: '',
  fname: '',
  lname: '',
  joinAs: '',
  passwordConfirm: ''
});

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