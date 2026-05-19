<template>
  <section id="top" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-section__copy reveal">
      <p class="hero-section__kicker">Operational software / India / Workflows with consequences</p>
      <h1 id="hero-title">{{ hero.line }}</h1>
      <p class="hero-section__subheading">{{ hero.subheading }}</p>
      <p class="hero-section__support">{{ hero.support }}</p>
      <div class="hero-section__actions" aria-label="Primary actions">
        <a class="button button--primary" href="#systems">{{ hero.primaryCta }}</a>
        <a class="button button--secondary" href="#contact">{{ hero.secondaryCta }}</a>
      </div>
    </div>

    <div class="hero-system-map reveal" aria-label="Operational workflow diagram">
      <div class="hero-system-map__paper">
        <div class="map-grid" aria-hidden="true"></div>
        <div class="workflow-board" role="img" aria-label="A structured workflow moving from intake to rule checks, review, ledger entry, and decision">
          <div class="workflow-board__header">
            <span>case file</span>
            <span>rules / records / people</span>
          </div>

          <div class="workflow-board__lanes" aria-hidden="true">
            <span>applicant</span>
            <span>system</span>
            <span>official</span>
            <span>record</span>
          </div>

          <div class="workflow-step workflow-step--intake">
            <span class="workflow-step__number">01</span>
            <strong>Intake</strong>
            <small>form + documents</small>
          </div>

          <div class="workflow-step workflow-step--rules">
            <span class="workflow-step__number">02</span>
            <strong>Rule checks</strong>
            <small>permissions, limits, fees</small>
          </div>

          <div class="workflow-step workflow-step--review">
            <span class="workflow-step__number">03</span>
            <strong>Review desk</strong>
            <small>notes + inspection</small>
          </div>

          <div class="workflow-step workflow-step--ledger">
            <span class="workflow-step__number">04</span>
            <strong>Ledger entry</strong>
            <small>payment + audit trail</small>
          </div>

          <div class="workflow-step workflow-step--decision">
            <span class="workflow-step__number">05</span>
            <strong>Decision</strong>
            <small>permit / record / certificate</small>
          </div>

          <div class="workflow-document workflow-document--left">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="workflow-document workflow-document--right">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <svg class="workflow-connectors" viewBox="0 0 520 420" aria-hidden="true">
            <defs>
              <marker id="arrowHead" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
                <path d="M0,0 L8,4 L0,8 Z" fill="#2F5D50" opacity="0.72" />
              </marker>
            </defs>
            <path class="workflow-connector workflow-connector--main" d="M72 144 L188 144 L188 246 L302 246 L302 144 L430 144" marker-end="url(#arrowHead)" />
            <path class="workflow-connector workflow-connector--ledger" d="M302 246 L426 246" marker-end="url(#arrowHead)" />
            <path class="workflow-connector workflow-connector--return" d="M430 178 C404 212 376 224 336 224" />
            <circle class="workflow-pulse workflow-pulse--one" r="5" />
            <circle class="workflow-pulse workflow-pulse--two" r="4" />
          </svg>

          <div class="workflow-stamp" aria-hidden="true">reviewed</div>
        </div>
        <div class="terminal-strip" aria-hidden="true">
          <span>case.opened</span>
          <span>rules: visible</span>
          <span>record.saved</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { hero } from '@/lib/site-content'
</script>
