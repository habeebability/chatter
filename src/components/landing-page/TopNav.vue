<template>
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="max-w-screen-xl flex flex-col md:flex-row items-center md:justify-between lg:mx-auto p-4"
    >
      <router-link to="/">
        <div class="w-36">
          <img src="../../assets/chatter-logo.png" alt="chatter logo" />
        </div>
      </router-link>

      <div
        class="flex items-center md:order-2 my-2 lg:my-0 w-full md:w-auto justify-between md:justify-normal"
      >
        <div class="buttons">
          <button
            @click.prevent="goToAuthPage('login')"
            type="button"
            class="text-[#111111] border border-[#543EE0] hover:text-[#543EE0] hover:bg-purple-100/10 font-medium rounded-lg text-sm px-4 lg:px-10 py-3 dark:bg-[#543EE0] dark:hover:bg-[#543EE0]-100/10 dark:text-white focus:outline-none dark:focus:ring-purple-800 hover:scale-105 transition duration-200 ease-in-out mx-1"
          >Login</button>
          <button
            @click.prevent="goToAuthPage('register')"
            type="button"
            class="text-white bg-[#543EE0] hover:bg-opacity-80 hover:text-white font-medium rounded-lg text-sm px-4 lg:px-10 py-3 border dark:border-[#543EE0] dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 hover:scale-105 transition duration-200 ease-in-out mx-1 dark:text-white"
          >Signup</button>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >Home</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >About</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Contact</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Blogs</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAuthPage = (authType) => {
  router.push(`/auth/${authType}`);
};
</script>

<style lang="scss" scoped>
</style>