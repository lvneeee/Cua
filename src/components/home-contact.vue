<script setup lang="ts">
import ContactForm from './contact-form.vue'
</script>

<template>
    <section id="contact-section" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">Let's discuss how we can help your business grow. Get
                    in touch with our team for a free consultation.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                <!-- Contact Form -->
                <div class="flex flex-col justify-center h-full">
                    <ContactForm />
                </div>

                <!-- Contact Information -->
                <div class="flex flex-col justify-center h-full">
                    <div class="space-y-8">
                        <!-- Contact Details -->
                        <div class="space-y-6">
                            <!-- Phone -->
                            <div class="flex items-start space-x-4">
                                <a href="tel:+84395356631">
                                    <div class=" flex items-start space-x-4">
                                        <div
                                            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <img src="/phone.svg" alt="Phone" class="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900">Phone</h4>
                                            <p class="text-gray-600 whitespace-pre-line">(+84) 395 356 631</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <!-- Email -->
                            <div class="flex items-start space-x-4">
                                <a href="mailto:hoangthithuylinh2207@gmail.com">
                                    <div class="flex items-start space-x-4">
                                        <div
                                            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <img src="/gmail.svg" alt="Email" class="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900">Email</h4>
                                            <p class="text-gray-600 whitespace-pre-line">hoangthithuylinh2207@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <!-- Telegram -->
                            <div class="flex items-start space-x-4">
                                <a href="https://t.me/lindaa027" target="_blank" rel="noopener noreferrer">
                                    <div class=" flex items-start space-x-4">
                                        <div
                                            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <img src="/telegram.svg" alt="Telegram" class="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900">Telegram</h4>
                                            <p class="text-gray-600 whitespace-pre-line">@Lindaa027</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <!-- Whatsapp -->
                            <div class="flex items-start space-x-4">
                                <a href="https://wa.me/84395356631" target="_blank" rel="noopener noreferrer">
                                    <div class="flex items-start space-x-4">
                                        <div
                                            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <img src="/whatsapp.svg" alt="Whatsapp" class="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900">Whatsapp</h4>
                                            <p class="text-gray-600 whitespace-pre-line">(+84) 395 356 631</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-blue-50 rounded-lg mt-6 p-6">
                        <h4 class="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
                        <p class="text-gray-600 text-sm">
                            We typically respond to all inquiries within 2 hours during business hours.
                            For urgent matters, please call us directly.
                        </p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-16 mb-8">
                <div>
                    <p class="text-gray-600 mb-8">Ready to transform your marketing strategy? Our team is here to help
                        you achieve your business goals through data-driven marketing solutions.</p>
                </div>
            </div>
        </div>
    </section>
</template>
