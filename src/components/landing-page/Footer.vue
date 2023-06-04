<template>
  <footer class="text-gray-600 body-font bg-[#FFEDCC] bg-opacity-50">
    <div
      class="container px-5 pt-12 pb-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div
        class="w-64 flex flex-shrink-0 md:mx-0 mx-auto justify-center md:justify-start text-center md:text-left"
      >
        <router-link to="/">
          <div class="w-24">
            <img src="../../assets/chatter-logo.png" alt="chatter logo" />
          </div>
        </router-link>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/3 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Explore</h2>
          <nav class="list-none mb-10">
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-800">Community</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-800">Trending blogs</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-800">Chatter for teams</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/3 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Support</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Support docs</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Join slack</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Contact</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/3 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Blogs</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Engineering blog</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Official blog</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>