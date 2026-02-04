<template>
  <div v-if="weather" class="current-weather glass-panel fade-in">
    <div class="header flex-split">
      <div>
        <h2>{{ weather.city }}, {{ weather.country }}</h2>
        <p class="date">{{ new Date().toLocaleDateString() }}</p>
      </div>
      <div class="last-updated">
        Updated: {{ lastUpdated }}
      </div>
    </div>
    
    <div class="weather-body flex-split">
      <div class="temp-section">
        <div class="temperature">{{ weather.temperatureC }}°C</div>
        <div class="condition">{{ weather.condition }}</div>
      </div>
      
      <div class="details-grid">
        <div class="detail-item">
          <span class="label">Humidity</span>
          <span class="value">{{ weather.humidityPercent }}%</span>
        </div>
        <div class="detail-item">
          <span class="label">Wind</span>
          <span class="value">{{ weather.windKmph }} km/h</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '../stores/weather';

// Access store state directly
const store = useWeatherStore();
const weather = computed(() => store.currentWeather);
const lastUpdated = computed(() => store.lastUpdated);
</script>

<style scoped>
.current-weather {
  margin-bottom: 2rem;
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 1rem;
}

.header h2 {
  font-size: 2rem;
  margin: 0;
}

.date {
  opacity: 0.8;
  margin: 0.5rem 0 0;
}

.last-updated {
  font-size: 0.85rem;
  opacity: 0.6;
}

.temperature {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
}

.condition {
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: var(--color-accent);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: rgba(0,0,0,0.2);
  padding: 1rem 2rem;
  border-radius: 12px;
}

.detail-item {
  display: flex;
  flex-direction: column;
}

.detail-item .label {
  font-size: 0.85rem;
  opacity: 0.7;
}

.detail-item .value {
  font-size: 1.25rem;
  font-weight: 600;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .weather-body {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  .header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>
