<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gray-100 p-6 rounded-lg shadow">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-xl font-semibold text-gray-900 mb-2">Projects</h1>
          <p class="text-gray-700">Manage and monitor your SEO projects</p>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <input
              v-model="search"
              type="text"
              placeholder="Search projects..."
              class="px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
            <select
              v-model="filter"
              class="px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="all">All Projects</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <button
            @click="openProjectModal"
            class="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center space-x-2"
          >
            <PlusIcon class="h-5 w-5" />
            <span>Create project</span>
          </button>
        </div>
      </div>

      <!-- Project List -->
      <div class="space-y-4">
        <div
          v-for="project in filteredProjects"
          :key="project.domain"
          class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-medium text-gray-900">{{ project.domain }}</h3>
              <p class="text-sm text-gray-600">Last updated: {{ project.lastUpdated }}</p>
            </div>
            <div class="flex items-center space-x-6">
              <div class="text-sm">
                <div class="text-gray-500">Site Health</div>
                <div class="font-medium text-teal-600">{{ project.siteHealth }}%</div>
              </div>
              <div class="text-sm">
                <div class="text-gray-500">Visibility</div>
                <div class="font-medium text-teal-600">{{ project.visibility }}%</div>
              </div>
              <UDropdown :items="projectActions">
                <button class="text-gray-400 hover:text-gray-600">
                  <EllipsisVerticalIcon class="h-5 w-5" />
                </button>
              </UDropdown>
            </div>
          </div>

          <!-- Project Tools -->
          <div class="mt-4 grid grid-cols-4 gap-4">
            <div
              v-for="tool in project.tools"
              :key="tool.name"
              class="p-3 border border-gray-200 rounded-lg text-center hover:bg-gray-100 cursor-pointer transition"
            >
              <div class="text-sm font-medium text-gray-800">{{ tool.name }}</div>
              <div
                class="text-xs font-medium px-2 py-1 rounded"
                :class="getStatusColor(tool.status)"
              >
                {{ tool.status }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal
      ref="projectModal"
      @project-created="handleProjectCreated"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PlusIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline'

const search = ref('')
const filter = ref('all')
const projectModal = ref(null)
const projects = ref([
  {
    domain: 'repo-booster.com',
    lastUpdated: '2024-01-07',
    siteHealth: 74,
    visibility: 65,
    tools: [
      { name: 'Site Audit', status: 'Running' },
      { name: 'Position Tracking', status: 'Set up' },
      { name: 'Backlink Audit', status: 'Not configured' },
      { name: 'On Page SEO', status: 'Active' }
    ]
  }
])

const projectActions = [
  { label: 'Edit Project', icon: 'i-heroicons-pencil-square', click: () => {} },
  { label: 'Archive Project', icon: 'i-heroicons-archive-box', click: () => {} },
  { label: 'Delete Project', icon: 'i-heroicons-trash', click: () => {} }
]

const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    const matchesSearch = project.domain.toLowerCase().includes(search.value.toLowerCase())
    const matchesFilter = filter.value === 'all' ? true : project.status === filter.value
    return matchesSearch && matchesFilter
  })
})

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'running':
      return 'bg-green-100 text-green-600'
    case 'set up':
      return 'bg-teal-100 text-teal-600'
    case 'not configured':
      return 'bg-gray-100 text-gray-500'
    case 'active':
      return 'bg-green-100 text-green-600'
    default:
      return 'bg-gray-100 text-gray-500'
  }
}

const openProjectModal = () => {
  projectModal.value.show = true
}

const handleProjectCreated = (newProject) => {
  projects.value.unshift(newProject)
}
</script>
