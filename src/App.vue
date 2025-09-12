<script setup lang="ts">
import appFooter from './components/app-footer.vue'
import appHeader from './components/app-header.vue'

import HomePage from './pages/home-page.vue'
import { useThemeProvider } from './utils/theme-provider'
useThemeProvider()
</script>

<template>
  <div>
    <appHeader />
    <HomePage />
    <appFooter />
  </div>
</template>

<style scoped></style>
