<template>
  <div class="section-heading reveal">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="intro" class="section-heading__intro">{{ intro }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    default: '',
  },
})
</script>
