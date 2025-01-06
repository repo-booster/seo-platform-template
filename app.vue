<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AppHeader />
      <div class="flex">
        <AppSidebar />
        <main class="flex-1 p-6 max-w-[100vw]">
          <NuxtPage />
        </main>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* Fix for full width */
.max-w-[100vw] {
  max-width: calc(100vw - 16rem);
}
</style>