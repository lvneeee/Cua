<template>
  <Button
    @click="toggleTheme"
    variant="ghost"
    size="icon"
    class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-200"
    :aria-label="theme.valueOf() === 'dark' ? 'Light' : 'Dark'"
  >
    <span v-if="theme.valueOf() === 'dark'">
      <!-- Sun Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="currentColor" />
        <path stroke="currentColor" stroke-width="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
      </svg>
    </span>
    <span v-else>
      <!-- Moon Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke="currentColor" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </span>
  </Button>
</template>

<script setup lang="ts">
import { useTheme } from '../utils/theme-provider'
import Button from '@/components/ui/button/Button.vue'
const { theme, toggleTheme } = useTheme()
</script>
