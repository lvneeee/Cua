<template>
  <section id="home-section" class="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

    <div class="container max-w-6xl mx-auto relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles class="w-4 h-4" />
            <span>Innovative Marketing Agency</span>
          </div>

          <div class="space-y-6">
            <h1 class="text-4xl lg:text-6xl tracking-tight leading-tight">
              Grow your business with
              <span class="text-primary relative">
                TL Agency
                <div class="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full" />
              </span>
            </h1>
            <p class="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">We are your trusted marketing partner. With passion and creativity, we help your brand stand out in the competitive market.</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <Button size="lg" class="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-xl group" @click="scrollToSection('services')">
              Explore Services
              <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" class="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" @click="scrollToSection('contact')"> Free Consultation </Button>
          </div>

          <div class="flex items-center space-x-8 pt-4">
            <div class="flex items-center space-x-2 text-primary">
              <TrendingUp class="w-5 h-5" />
              <span class="text-sm font-medium">Sustainable Growth</span>
            </div>
            <div class="text-sm text-muted-foreground"><span class="font-semibold text-primary">100%</span> Quality Commitment</div>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-card shadow-2xl border border-primary/20">
            <ImageWithFallback src="https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMG1hcmtldGluZyUyMGRpZ2l0YWwlMjBhZHZlcnRpc2luZ3xlbnwxfHx8fDE3NTc2MjUxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="TL Agency Marketing Team" class="w-full h-full object-cover" />
          </div>

          <!-- Floating stats -->
          <div class="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
            <div class="text-2xl font-bold">50+</div>
            <div class="text-sm opacity-90">Successful Projects</div>
          </div>

          <div class="absolute -top-6 -right-6 bg-background border border-primary/20 p-4 rounded-xl shadow-lg">
            <div class="text-2xl font-bold text-primary">200%</div>
            <div class="text-sm text-muted-foreground">ROI Growth</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageWithFallback from './image-with-fallback.vue'
import { Button } from './ui/button'
// ...existing code...
function scrollToSection(section: string) {
  const el = document.getElementById(`${section}-section`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-vue-next'
</script>
