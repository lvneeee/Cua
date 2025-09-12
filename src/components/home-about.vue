<script setup lang="ts">
import ImageWithFallback from './image-with-fallback.vue'
</script>

<template>
  <section id="about-section" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback src="https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NjIzNjc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Digital marketing workspace" class="w-full h-[400px] object-cover" />
          </div>
          <!-- Stats overlay -->
          <div class="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600">3+</div>
              <div class="text-xs text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              We're Passionate About
              <span class="text-blue-600"> Your Success</span>
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Quality Facebook advertising account rental service with only 4% to start – always reserve a stable number of >500 accounts with spending history (Accept BH, WH, GH: Crypto, App, Finance...) We have 3+ years of experience working with Facebook and a team of experienced technicians who enthusiastically support customers 24/7.
            </p>
          </div>

          <!-- Key points -->
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Data-Driven Approach</h4>
                <p class="text-gray-600 text-sm">Every decision is backed by comprehensive analytics and market research.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Transparent Communication</h4>
                <p class="text-gray-600 text-sm">Regular reporting and open communication throughout every project.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Proven Results</h4>
                <p class="text-gray-600 text-sm">Track record of delivering measurable growth for businesses of all sizes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
