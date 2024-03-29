<script setup>
import ViewTitle from '../components/ViewTitle.vue'
import ViewFooter from '../components/ViewFooter.vue'
</script>

<template>
  <ViewTitle title="header.title" subtitle="header.subtitle" />
  <div id="content">
    <div class="content-section">
      <h3>{{ $t("section1.title") }}</h3>
      <p>{{ $t("section1.paragraph1") }}</p>
      <p>{{ $t("section1.paragraph2") }}</p>
    </div>
  </div>
  <ViewFooter />
</template>
