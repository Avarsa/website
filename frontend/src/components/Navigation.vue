<template>
  <header class="site-nav-shell">
    <a class="skip-link" href="#main">Skip to content</a>
    <nav class="site-nav" aria-label="Main navigation">
      <a class="site-nav__name" href="#top" :aria-label="`${siteConfig.name} home`">
        <img
          :src="portraitSrc"
          alt=""
          width="34"
          height="34"
          aria-hidden="true"
        />
        <span>{{ siteConfig.name }}</span>
      </a>
      <div class="site-nav__links">
        <a v-for="item in navigation" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { navigation, siteConfig } from '@/lib/site-content'

const portraitSrc = '/assets/jinish_website/images/jinish-face.jpg'
</script>
