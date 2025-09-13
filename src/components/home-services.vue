<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import ImageWithFallback from '@/components/image-with-fallback.vue'
const rentalFees = [
    {
        title: 'Spending < $1000 / day',
        fee: '6%',
        description: 'Ideal for small-scale campaigns with flexible budget.',
        image: 'b3d7df85-e875-4ab8-aa5c-408e16b67025.jpg'
    },
    {
        title: 'Spending $1000 - $5000 / day',
        fee: '5%',
        description: 'Best for growing businesses looking to scale ads effectively.',
        image: 'e31b0ed0-50cd-49f2-a633-0fe998d6bde3.jpg',
    },
    {
        title: 'Spending $5000 - $10000 / day',
        fee: '4%',
        description: 'Optimized pricing for medium to large advertisers.',
        image: 'f414d57f-99ff-4328-9776-4afef036c114.jpg',
    },
    {
        title: 'Spending > $10000 / day',
        fee: '3%',
        description: 'Lowest fee tier for high-volume advertising spend.',
        image: 'b3d7df85-e875-4ab8-aa5c-408e16b67025.jpg',
    },
]

const servicesData = [
    {
        icon: '⚡',
        title: 'Fast Approval',
        description: 'Get your account approved quickly and start running ads.',
        features: ['Approval in 10-30 minutes', 'Priority support', 'Easy setup'],
    },
    {
        icon: '🔒',
        title: 'Secure Accounts',
        description: 'Minimize ban risk and maximize ad performance.',
        features: ['Better compliance', 'Reduced suspension', 'Improved trust score'],
    },
    {
        icon: '📊',
        title: 'Analytics & Insights',
        description: 'Track campaigns effectively with advanced analytics.',
        features: ['Full pixel access', 'Real-time reporting', 'Conversion tracking'],
    },
]
</script>

<template>
    <section id="services-section" class="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    <span class="text-blue-600"> Adventages </span>
                    of Choosing Us
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    We offer comprehensive marketing solutions to help your business grow, from strategy development to
                    execution and optimization.
                </p>
            </div>
            <!-- Advantages -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Card v-for="(service, index) in servicesData" :key="index"
                    class="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <span class="text-2xl">{{ service.icon }}</span>
                        </div>
                        <CardTitle class="text-xl">{{ service.title }}</CardTitle>
                        <CardDescription class="text-gray-600">
                            {{ service.description }}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul class="space-y-2">
                            <li v-for="(feature, featureIndex) in service.features" :key="featureIndex"
                                class="flex items-center text-sm text-gray-600">
                                <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                                {{ feature }}
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <!-- Pricing -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Advertising Account
                    <span class="text-blue-600"> Rental Fee </span>
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Transparent and flexible pricing based on your daily advertising spend.
                </p>
            </div>


            <!-- Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card v-for="(item, index) in rentalFees" :key="index"
                    class="group bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader class="text-center max-h-9">
                        <CardTitle class="text-lg font-semibold text-gray-800">{{ item.title }}</CardTitle>
                    </CardHeader>
                    <div class="relative">
                        <ImageWithFallback :src="item.image" :alt="item.title" class="w-full h-48 object-cover" />
                    </div>
                    <CardContent class="flex flex-col items-center text-center">
                        <p
                            class="text-5xl font-extrabold text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                            {{ item.fee }}</p>
                        <p class="text-gray-600 text-sm">{{ item.description }}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>
