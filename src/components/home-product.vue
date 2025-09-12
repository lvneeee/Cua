<script setup lang="ts">
import Card from './ui/card/Card.vue'
import CardDescription from './ui/card/CardDescription.vue'
import CardHeader from './ui/card/CardHeader.vue'
import CardTitle from './ui/card/CardTitle.vue'
import ImageWithFallback from './image-with-fallback.vue'
const product = [
  {
    "title": "Facebook BM",
    "description": "BM0, BM5, BM30, BM50, BM2500",
    "imageAlt": "BM Example",
    "image": "https://tse4.mm.bing.net/th/id/OIP.iBfVugebg705FaP-fAr92QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "Account (Facebook ADS)",
    "description": "Account limit 50$, limit 100$, limit 250$, Nolimit",
    "imageAlt": "Facebook Logo",
    "image": "https://i0.wp.com/read.crowdfireapp.com/wp-content/uploads/2022/12/Blog_10_Tips_For_An_Effective_Facebook_Ad_Campaign_for_the_Holidays.png?fit=1350%2C900&ssl=1"

  },
  {
    "title": "Automatic payment",
    "description": "Added unlimited auto payment method",
    "imageAlt": "Payment Example",
    "image": "https://tse1.mm.bing.net/th/id/OIP.FhRbZXnLPwRfaF9S92GiWAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"

  }
]
</script>

<template>
  <section id="portfolio-section" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
        <div class="space-y-4 mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              Our
              <span class="text-blue-600"> Products & Solutions</span>
            </h2>
          </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card v-for="(product, index) in product" :key="index" class="overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="relative">
            <ImageWithFallback :src="product.image" :alt="product.title" class="w-full h-48 object-cover" />
          </div>
          <CardHeader>
            <CardTitle class="text-xl">{{ product.title }}</CardTitle>
            <CardDescription class="text-gray-600">
              {{ product.description }}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <a href="#contact-section" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"> Ready to start your success story? </a>
      </div>
    </div>
  </section>
</template>
