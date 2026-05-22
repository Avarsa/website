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

        <div class="system-panel" aria-label="System notes">
          <div class="system-panel__grid" aria-hidden="true"></div>
          <div class="system-panel__inner">
            <p class="system-panel__eyebrow">{{ system.panel.eyebrow }}</p>

            <dl class="system-panel__facts">
              <div v-for="fact in system.panel.facts" :key="`${system.title}-${fact.label}`">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.value }}</dd>
              </div>
            </dl>

            <div class="system-panel__parts" aria-label="System parts">
              <span v-for="part in system.panel.parts" :key="`${system.title}-${part}`">{{ part }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { selectedSystems, selectedSystemsSection } from '@/lib/site-content'
</script>
