<template>
  <section id="work-now" class="page-section live-work" aria-labelledby="live-work-heading">
    <SectionHeading
      id="live-work-heading"
      :title="liveWork.title"
      :intro="liveWork.intro"
    />

    <div class="live-work__list">
      <article v-for="item in liveWork.items" :key="item.title" class="live-work__item reveal">
        <div class="live-work__heading">
          <h3>
            <a :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
          </h3>
          <span>{{ item.context }}</span>
        </div>

        <p>{{ item.body }}</p>

        <ul class="live-work__facts" aria-label="Production facts">
          <li v-for="fact in item.facts" :key="`${item.title}-${fact.label}`">
            <strong>{{ fact.value }}</strong>
            <a
              v-if="fact.href"
              :href="fact.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ fact.label }}
            </a>
            <span v-else>{{ fact.label }}</span>
          </li>
        </ul>
      </article>
    </div>

    <p class="live-work__closing reveal">{{ liveWork.closing }}</p>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { liveWork } from '@/lib/site-content'
</script>
