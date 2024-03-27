<script setup>
import router from '@/router';
import { ref } from 'vue';

const items = ref(router.getRoutes());
console.log("Items:", items);
</script>

<template>
    <div class="pure-menu">
        <ul class="pure-menu-list">
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/">Me</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/my-projects">My Projects</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/my-links">My Links</router-link>
            </li>
        </ul>
    </div>
</template>