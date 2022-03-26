<script setup>
import { onMounted } from "vue";
import { getData } from "@/api";

onMounted(() => {
  getData();
});
</script>

<template>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Homepage</RouterLink>
        </li>
        <li>
          <RouterLink to="/page">Page</RouterLink>
        </li>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>
