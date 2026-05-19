<template>
  <section id="principles" class="page-section principles-section" aria-labelledby="principles-heading">
    <SectionHeading
      id="principles-heading"
      :eyebrow="principlesSection.eyebrow"
      :title="principlesSection.title"
      :intro="principlesSection.intro"
    />

    <div class="principle-grid">
      <article v-for="principle in principles" :key="principle.title" class="principle-card reveal">
        <span class="principle-card__mark" aria-hidden="true"></span>
        <h3>{{ principle.title }}</h3>
        <p>{{ principle.body }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { principles, principlesSection } from '@/lib/site-content'
</script>
