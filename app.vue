<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppHeader />
    <div class="flex">
      <!-- Conditionally Render Sidebar -->
      <AppSidebar v-if="showSidebar" />
      <main
        :class="showSidebar ? 'flex-1 p-6' : 'w-full p-6'"
        :style="showSidebar ? 'max-width: calc(100vw - 16rem);' : ''"
      >
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    AppHeader: () => import("./components/AppHeader.vue"),
    AppSidebar: () => import("./components/AppSidebar.vue"),
  },
  setup() {
    const route = useRoute();

    // List of routes where the sidebar should be hidden
    const routesWithoutSidebar = [
      "/seo-assistant",
      "/about",
      "/newsroom",
      "/affiliate",
      "/contacts",
      "/features",
      "/pricing",
      "/integrations",
      "/stats",
      "/traffic-analytics",
    ];

    // Compute whether to show the sidebar
    const showSidebar = computed(() => !routesWithoutSidebar.includes(route.path));

    // Debugging: Log the current route and sidebar visibility
    console.log("Current Route:", route.path);
    console.log("Show Sidebar:", showSidebar.value);

    return {
      showSidebar,
    };
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
