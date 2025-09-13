<template>
  <header class="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div class="relative">
            <div class="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary/60 rounded-2xl flex items-center justify-center shadow-xl rotate-12 transform group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
              <div class="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span class="text-primary font-bold text-lg">TL</span>
              </div>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse group-hover:animate-bounce"></div>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary transition-all duration-300"> Agency </span>
          </div>
        </div>

        <!-- Navigation -->
        <nav ref="navRef" class="hidden md:flex relative" @mouseleave="hoveredIndex = activeIndex">
          <div class="flex space-x-8 nav-underline-track">
            <button v-for="(item, idx) in navItems" :key="item.page" ref="btnRefs" @click="goTo(item.page)" @mouseenter="hoveredIndex = idx" :class="['relative transition-colors duration-300 px-1 text-base', currentPage === item.page ? 'text-primary' : 'text-foreground hover:text-primary opacity-80']">
              {{ item.label }}
            </button>
          </div>
          <div class="flex items-center space-x-3 group cursor-pointer">
            <!-- Underline -->
            <div v-if="hoveredIndex !== null && underlinePos.width" class="absolute bottom-0 h-[2px] bg-primary rounded transition-all duration-300" :style="{ left: underlinePos.left + 'px', width: underlinePos.width + 'px' }"></div>
          </div>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center">
          <!-- <ThemeToggle /> -->

          <Button class="hidden sm:inline-flex" @click="openTelegram"> Get Started </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import Button from '@/components/ui/button/Button.vue'

/* Navigation items */
const navItems = [
  { page: 'home', label: 'Home' },
  { page: 'products', label: 'Products' },
  { page: 'services', label: 'Services' },
  { page: 'about', label: 'About' },
  { page: 'contact', label: 'Contact' },
]

const currentPage = ref('home')
const activeIndex = computed(() => {
  const idx = navItems.findIndex((i) => i.page === currentPage.value)
  return idx === -1 ? 0 : idx
})
const hoveredIndex = ref<number | null>(activeIndex.value)

const navRef = ref<HTMLElement | null>(null)
const btnRefs = ref<(HTMLButtonElement | null)[]>([])

/* Go to page */
function goTo(page: string) {
  currentPage.value = page
  // Scroll tới section tương ứng
  const sectionId = `${page}-section`
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

/* Underline position */
const underlinePos = ref({ left: 0, width: 0 })

function updateUnderline(idx: number | null) {
  if (idx === null) return
  const btn = btnRefs.value[idx]
  if (!btn) return
  underlinePos.value = {
    left: btn.offsetLeft,
    width: btn.offsetWidth,
  }
}

/* Update underline when hoveredIndex or activeIndex changes */
watch([hoveredIndex, activeIndex], () => {
  nextTick(() => {
    updateUnderline(hoveredIndex.value ?? activeIndex.value)
    updateUnderline(activeIndex.value)
  })
})

function openTelegram() {
  // Scroll to contact section first
  const el = document.getElementById('contact-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  // Then open Telegram chat
  window.open('https://t.me/Lindaa027', '_blank')
}
</script>

<style scoped>
.nav-underline-track {
  position: relative;
}

button {
  transition:
    color 0.3s,
    opacity 0.3s;
  display: inline-block;
  min-width: 0px;
}
</style>
