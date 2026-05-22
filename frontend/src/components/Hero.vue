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

    <aside class="hero-system-map reveal" aria-label="Build notes from production systems">
      <div class="hero-system-map__paper">
        <div class="map-grid" aria-hidden="true"></div>
        <div class="build-notes">
          <div class="build-notes__header">
            <span>build notes</span>
            <span>from production systems</span>
          </div>

          <p class="build-notes__lede">The work tends to involve less theatre and more plumbing.</p>

          <div class="build-notes__chips" aria-label="Common system ingredients">
            <span>CAD/DXF readers</span>
            <span>rule engines</span>
            <span>stock ledgers</span>
            <span>fee calculations</span>
            <span>certificate PDFs</span>
            <span>role hierarchy</span>
            <span>audit trails</span>
            <span>uptime pressure</span>
          </div>

          <div class="build-notes__rows">
            <article>
              <span>ArchVerity</span>
              <p>Drawings, scrutiny rules, inspections, payments, permissions, plinth certificates, and occupancy records.</p>
            </article>
            <article>
              <span>EOLS</span>
              <p>Permits, label registration, stock movement, ledgers, duties, fees, regulated imports, and district operations.</p>
            </article>
          </div>

          <div class="build-notes__footer" aria-hidden="true">
            <span>drawings / ledgers / duties / certificates</span>
            <span>roles / retries / reports / logs</span>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { hero } from '@/lib/site-content'
</script>
