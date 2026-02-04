<template>
  <div class="search-container glass-panel">
    <input 
      v-model="city" 
      @keyup.enter="handleSearch"
      type="text" 
      placeholder="Enter city name..." 
      class="city-input"
    />
    <button @click="handleSearch" class="search-btn" :disabled="!city || loading">
      {{ loading ? 'Searching...' : 'Search' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '../stores/weather';
import { storeToRefs } from 'pinia';

const store = useWeatherStore();
const { loading } = storeToRefs(store);

const city = ref('');

const handleSearch = () => {
  if (city.value.trim()) {
    store.fetchWeatherData(city.value.trim());
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  gap: 12px;
  padding: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.city-input {
  flex: 1;
  background: var(--color-input-bg);
  border: 1px solid var(--color-card-border);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  outline: none;
  transition: background 0.3s;
}

.city-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.city-input:focus {
  background: rgba(255, 255, 255, 0.3);
}

.search-btn {
  background: var(--color-button-bg);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s, background 0.2s;
}

.search-btn:hover:not(:disabled) {
  background: var(--color-button-hover);
  transform: translateY(-2px);
}

.search-btn:disabled {
  opacity: 0.7;
  cursor: wait;
}
</style>
