<template>
  <section id="top" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-section__copy reveal">
      <h1 id="hero-title">{{ hero.line }}</h1>
      <p class="hero-section__subheading">{{ hero.subheading }}</p>
      <p class="hero-section__support">{{ hero.support }}</p>
      <div class="hero-section__actions" aria-label="Primary actions">
        <a class="button button--primary" href="#systems">{{ hero.primaryCta }}</a>
        <a class="button button--secondary" href="#contact">{{ hero.secondaryCta }}</a>
      </div>
    </div>

    <aside class="hero-system-map reveal" aria-label="Operating layer notes">
      <div class="hero-system-map__paper">
        <div class="map-grid" aria-hidden="true"></div>
        <div class="build-notes">
          <div class="build-notes__header">
            <span>learn / model</span>
            <span>ship / improve</span>
          </div>

          <p class="build-notes__lede">First learn how the work behaves. Then make the system carry what matters.</p>

          <div class="build-notes__chips" aria-label="Common system ingredients">
            <span>domain vocabulary</span>
            <span>object model</span>
            <span>rule model</span>
            <span>workflow states</span>
            <span>record history</span>
            <span>permissions</span>
            <span>integrations</span>
            <span>feedback loops</span>
          </div>

          <div class="build-notes__rows">
            <article>
              <span>Learn first</span>
              <p>Objects, records, rules, users, constraints, exceptions, and the places where the real process bends.</p>
            </article>
            <article>
              <span>Then systemize</span>
              <p>States, validations, calculations, approvals, logs, documents, recovery paths, and later improvements.</p>
            </article>
          </div>

          <div class="build-notes__footer" aria-hidden="true">
            <span>real objects / real users / real operations</span>
            <span>software with memory</span>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { hero } from '@/lib/site-content'
</script>
