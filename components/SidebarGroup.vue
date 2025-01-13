<template>
  <div class="mb-6">
    <!-- Section Title -->
    <div v-if="title" class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
      {{ title }}
    </div>
    <!-- Slot for Links -->
    <div class="space-y-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<style scoped>
/* Group Title Styling */
.sidebar-group-title {
  text-transform: uppercase;
  color: #9ca3af;
}
</style>
