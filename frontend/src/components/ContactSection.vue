<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-heading">
    <div class="contact-section__inner reveal">
      <p class="section-heading__eyebrow">{{ contactSection.eyebrow }}</p>
      <h2 id="contact-heading">{{ contactSection.title }}</h2>
      <p class="contact-section__main">{{ contactSection.main }}</p>
      <p class="contact-section__support">{{ contactSection.support }}</p>

      <div class="contact-section__actions">
        <a class="button button--primary" :href="`mailto:${siteConfig.email}`">{{ contactSection.cta }}</a>
        <a v-if="siteConfig.links.resume" :href="siteConfig.links.resume" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contactSection, siteConfig } from '@/lib/site-content'
</script>
