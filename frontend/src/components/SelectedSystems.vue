<template>
  <section id="systems" class="page-section selected-systems" aria-labelledby="systems-heading">
    <SectionHeading
      id="systems-heading"
      :eyebrow="selectedSystemsSection.eyebrow"
      :title="selectedSystemsSection.title"
      :intro="selectedSystemsSection.intro"
    />

    <div class="system-list">
      <article v-for="system in selectedSystems" :key="system.title" class="system-card reveal">
        <div class="system-card__content">
          <p class="system-card__category">{{ system.category }}</p>
          <h3>{{ system.title }}</h3>
          <p class="system-card__description">{{ system.description }}</p>

          <div class="system-card__mattered">
            <p>What mattered:</p>
            <ul>
              <li v-for="item in system.mattered" :key="item">{{ item }}</li>
            </ul>
          </div>

          <p class="system-card__texture">{{ system.texture }}</p>
          <p class="metadata-row">{{ system.meta }}</p>
        </div>

        <div class="system-sketch" :class="`system-sketch--${system.visual}`" aria-hidden="true">
          <div class="system-sketch__grid"></div>
          <div class="system-sketch__document system-sketch__document--one"></div>
          <div class="system-sketch__document system-sketch__document--two"></div>
          <span v-for="label in system.labels" :key="label" class="system-sketch__label">{{ label }}</span>
          <span class="system-sketch__node system-sketch__node--one"></span>
          <span class="system-sketch__node system-sketch__node--two"></span>
          <span class="system-sketch__node system-sketch__node--three"></span>
          <span class="system-sketch__line system-sketch__line--one"></span>
          <span class="system-sketch__line system-sketch__line--two"></span>
          <span class="system-sketch__line system-sketch__line--three"></span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { selectedSystems, selectedSystemsSection } from '@/lib/site-content'
</script>
