<template>
  <footer class="site-footer">
    <div class="footer-signal" aria-hidden="true">
      <span></span>
    </div>
    <p>{{ footer.line }}</p>
    <div class="site-footer__bottom">
      <span>© 2026 {{ siteConfig.name }}. {{ siteConfig.location }}.</span>
      <nav aria-label="Footer links">
        <a :href="`mailto:${siteConfig.email}`">Email</a>
        <a :href="siteConfig.links.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="siteConfig.links.github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { footer, siteConfig } from '@/lib/site-content'
</script>
