<script setup lang="ts">
import Login from './views/auth/Login.vue';
</script>

<template>
  <div class>
    <!-- <Header /> -->

    <!-- <RouterView /> -->
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <!-- Player -->
    <AppPlayer />

    <!-- app auth -->
    <Login />
  </div>
</template>

<style >
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
