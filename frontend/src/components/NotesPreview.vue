<template>
  <section id="notes" class="page-section notes-section" aria-labelledby="notes-heading">
    <SectionHeading
      id="notes-heading"
      :eyebrow="notesSection.eyebrow"
      :title="notesSection.title"
      :intro="notesSection.intro"
    />

    <div class="notes-grid">
      <a v-for="note in fieldNotes" :key="note.title" class="note-card reveal" href="#contact">
        <span class="note-card__tag">{{ note.tag }}</span>
        <h3>{{ note.title }}</h3>
        <p>{{ note.excerpt }}</p>
        <span class="note-card__soon">Coming soon</span>
        <span class="note-card__scribble">filed for later reading</span>
      </a>
    </div>

    <p class="personal-line reveal">{{ personalLine }}</p>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { fieldNotes, notesSection, personalLine } from '@/lib/site-content'
</script>
