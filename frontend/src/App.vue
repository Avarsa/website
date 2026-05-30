<template>
  <div class="site-shell">
    <Navigation />
    <main id="main">
      <Hero />

      <LiveWork />

      <section id="approach" class="page-section build-section" aria-labelledby="build-heading">
        <SectionHeading
          id="build-heading"
          :eyebrow="buildSection.eyebrow"
          :title="buildSection.title"
          :intro="buildSection.intro"
        />
        <div class="work-note reveal">
          <article v-for="card in buildSection.cards" :key="card.title" class="work-note__item">
            <span>{{ card.label }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.body }}</p>
          </article>
        </div>
      </section>

      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'
import LiveWork from '@/components/LiveWork.vue'
import Navigation from '@/components/Navigation.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { buildSection } from '@/lib/site-content'
</script>
