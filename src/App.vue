<template>
  <nav class="flex justify-between">
    <router-link to="/" class="font-bold text-3xl">We reads</router-link>

    <span v-if="user.jwt === ''">
      <router-link to="/login">Log in</router-link>
      <router-link to="/signup">Sign up</router-link>
    </span>
    <span v-else>
      {{ user.username }}
    </span>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useStore} from "vuex";

const store = useStore();
const user = reactive(store.getters.getUser);
</script>

<style scoped>
  a {
    margin-right: 20px;
  }
</style>
