<script setup>
defineProps([
    'title',
    'subtitle',
])
</script>
<template>
    <div id="header">
        <h1 class="view-title">{{ title }}</h1>
        <h2 class="view-subtitle">{{ subtitle }}</h2>
    </div>
</template>