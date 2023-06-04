<template>
  <div class="w-screen h-screen">
    <img
      src="../../assets/images/hero-bg.png"
      alt="Background Image"
      class="object-cover w-full h-full"
    />
    <div class="absolute inset-0 bg-black opacity-[0.65] w-full h-full"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="p-3 lg:w-3/5 mx-auto flex items-center justify-center">
        <h1 class="text-2xl md:text-4xl lg:text-[2.8rem] text-white font-bold mb-6">
          <span class="block">Welcome to Chatter: A Haven for Text-</span>
          <span class="ml-2 md:ml-0 md:block my-8">Based Content</span>
        </h1>
        <h2 class="text-lg md:text-md lg:text-xl text-white mb-8">
          Unleash the Power of Words, Connect with Like-minded Readers
          <span
            class="block my-3"
          >and Writers</span>
        </h2>
        <button
          type="button"
          class="text-white bg-[#543EE0] hover:bg-opacity-80 hover:text-white font-medium rounded-lg text-sm px-4 lg:px-10 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 hover:scale-105 transition duration-200 ease-in-out mx-1"
        >Get started</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>


<style scoped>
.header-section {
  background-image: url('../../assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>