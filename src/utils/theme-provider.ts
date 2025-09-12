import { ref, watch, onMounted, provide, inject } from 'vue'
import type { Ref } from 'vue'

const THEME_KEY = Symbol('theme')

export type Theme = 'light' | 'dark'

export function useThemeProvider(defaultTheme: Theme = 'light') {
  const theme = ref<Theme>(defaultTheme)

  // Load theme from localStorage
  onMounted(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved === 'light' || saved === 'dark') {
      theme.value = saved
    }
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  })

  // Watch theme changes and update localStorage + html class
  watch(theme, (val) => {
    localStorage.setItem('theme', val)
    document.documentElement.classList.toggle('dark', val === 'dark')
  })

  // Toggle theme
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  provide(THEME_KEY, { theme, toggleTheme })

  return { theme, toggleTheme }
}

export function useTheme() {
  const themeContext = inject<{ theme: Ref<Theme>; toggleTheme: () => void }>(THEME_KEY)
  if (!themeContext) throw new Error('useTheme must be used within a ThemeProvider')
  return themeContext
}
