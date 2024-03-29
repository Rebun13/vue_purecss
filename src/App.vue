<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/SideBar.vue'
</script>

<template>
  <div id="menu">
    <Sidebar />
  </div>
  <div id="main">
    <RouterView />
  </div>
</template>

<style scoped></style>
