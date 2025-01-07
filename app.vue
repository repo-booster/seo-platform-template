<template>
  <NuxtLayout>
    <ClientOnly>
      <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AppHeader />
        <div class="flex">
          <AppSidebar />
          <main class="flex-1 p-6" style="max-width: calc(100vw - 16rem);">
            <NuxtPage />
          </main>
        </div>
      </div>
    </ClientOnly>
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
