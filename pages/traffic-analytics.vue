<!-- Update the analyze button -->
<template>
  <!-- ... other code ... -->
  <div class="flex space-x-2">
    <div class="w-40">
      <select class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
        <option>Worldwide</option>
      </select>
    </div>
    <div class="flex-1">
      <input 
        type="text" 
        placeholder="Enter domains, subdomains, or subfolders" 
        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <AnalyzeButton />
  </div>
  <!-- ... rest of the code ... -->
</template>