<script setup lang="ts">
import HomeHero from '../components/home-hero.vue'
import HomeServices from '../components/home-services.vue'
import TestSection from '../components/home-contact.vue'
import HomeContact from '../components/home-contact.vue';
import HomeAbout from '../components/home-about.vue';
import HomeProduct from '../components/home-product.vue';
</script>

<template>
    <div class="min-h-screen">
        <main>
            <HomeHero />
            <HomeProduct/>
            <HomeServices />
            <HomeAbout />
            <HomeContact />
        </main>
    </div>
</template>
