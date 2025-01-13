<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="header-section">
      <h1 class="header-title">Optimize Your Business Listings</h1>
      <p class="header-subtitle">
        Stay visible with updated and consistent business listings across top platforms.
      </p>
    </div>

    <!-- Directory Listings Section -->
    <div class="content-section">
      <h2 class="section-title">Stay visible with business listings in top directories</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="platform in platforms"
          :key="platform.name"
          class="directory-item"
        >
          <UIcon
            :name="platform.icon"
            class="directory-icon"
            :class="platform.iconClass"
          />
          <span class="directory-label">{{ platform.name }}</span>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="content-section benefits-section">
      <h2 class="section-title">Why Business Listings Matter</h2>
      <ul class="benefits-list">
        <li>Improve local search visibility and drive traffic to your business.</li>
        <li>Enhance brand credibility with accurate and consistent listings.</li>
        <li>Engage with customers across multiple platforms seamlessly.</li>
        <li>Increase customer trust by providing up-to-date information.</li>
      </ul>
    </div>

    <!-- Call-to-Action Section -->
    <div class="cta-section">
      <h2 class="cta-title">
        Ready to Take Control of Your Listings?
      </h2>
      <p class="cta-text">
        Sync your business information across all major platforms in just a few clicks.
      </p>
      <button class="cta-button">
        Get Started
      </button>
    </div>
  </div>
</template>

<script setup>
const platforms = [
  { name: 'Google', icon: 'i-simple-icons-google', iconClass: 'text-blue-600' },
  { name: 'Facebook', icon: 'i-simple-icons-facebook', iconClass: 'text-blue-700' },
  { name: 'Yelp', icon: 'i-simple-icons-yelp', iconClass: 'text-red-600' },
  { name: 'Apple Maps', icon: 'i-simple-icons-apple', iconClass: 'text-gray-900' },
  { name: 'Stripe', icon: 'i-simple-icons-stripe', iconClass: 'text-purple-700' },
  { name: 'TripAdvisor', icon: 'i-simple-icons-tripadvisor', iconClass: 'text-green-700' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', iconClass: 'text-pink-600' },
  { name: 'LinkedIn', icon: 'i-simple-icons-linkedin', iconClass: 'text-blue-800' },
];
</script>

<style scoped>
/* Header Section Styles */
.header-section {
  background: linear-gradient(to right, #14b8a6, #3b82f6);
  color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  text-align: center;
}

.header-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.header-subtitle {
  font-size: 1.125rem;
  color: #dbeafe;
}

/* Content Section Styles */
.content-section {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Directory Item Styles */
.directory-item {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.directory-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.directory-icon {
  width: 2rem;
  height: 2rem;
  margin: 0 auto 0.5rem;
}

.directory-label {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Benefits Section Styles */
.benefits-section {
  background: #f9fafb;
}

.benefits-list {
  list-style: disc;
  padding-left: 1.5rem;
  color: #4b5563;
}

.benefits-list li {
  margin-bottom: 0.5rem;
}

/* Call-to-Action Section Styles */
.cta-section {
  background: #ccfbf1;
  text-align: center;
  padding: 2rem;
  border-radius: 0.75rem;
}

.cta-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #065f46;
  margin-bottom: 0.5rem;
}

.cta-text {
  font-size: 0.875rem;
  color: #064e3b;
  margin-bottom: 1rem;
}

.cta-button {
  background: #14b8a6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #0f766e;
}
</style>
