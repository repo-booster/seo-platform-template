<template>
  <NuxtLink
    :to="href"
    class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group"
    :class="{
      'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 shadow-lg': isActive,
      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-300': !isActive
    }"
  >
    <component
      :is="icon"
      class="mr-3 h-5 w-5 transition-transform duration-200 group-hover:scale-110"
      :class="{
        'text-blue-500 dark:text-blue-300': isActive,
        'text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-300': !isActive
      }"
    />
    <span class="truncate">
      {{ name }}
    </span>
  </NuxtLink>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
  name: { type: String, required: true },
  href: { type: String, required: true },
  icon: { type: [String, Object], required: true },
});

// Active state
const isActive = ref(false);
const route = useRoute();

watch(
  () => route.path,
  () => {
    isActive.value = route.path === href;
  },
  { immediate: true }
);
</script>

<style scoped>
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
</style>
