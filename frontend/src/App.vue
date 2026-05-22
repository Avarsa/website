<template>
  <div class="site-shell">
    <Navigation />
    <main id="main">
      <Hero />

      <section class="identity-strip reveal" aria-label="Work metadata">
        <p>{{ identityStrip }}</p>
      </section>

      <section class="page-section build-section" aria-labelledby="build-heading">
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

      <SelectedSystems />
      <WorkPrinciples />
      <NotesPreview />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'
import Navigation from '@/components/Navigation.vue'
import NotesPreview from '@/components/NotesPreview.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import SelectedSystems from '@/components/SelectedSystems.vue'
import WorkPrinciples from '@/components/WorkPrinciples.vue'
import { buildSection, identityStrip } from '@/lib/site-content'
</script>
