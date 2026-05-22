<template>
  <section id="top" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-section__copy reveal">
      <h1 id="hero-title">{{ hero.line }}</h1>
      <p class="hero-section__subheading">{{ hero.subheading }}</p>
      <p class="hero-section__support">{{ hero.support }}</p>
      <div class="hero-section__actions" aria-label="Primary actions">
        <a class="button button--primary" href="#work-now">{{ hero.primaryCta }}</a>
        <a class="button button--secondary" href="#contact">{{ hero.secondaryCta }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { hero } from '@/lib/site-content'
</script>
