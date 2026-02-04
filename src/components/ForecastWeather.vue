<template>
  <div v-if="forecast" class="forecast-section fade-in">
    <h3>5-Day Forecast</h3>
    <div class="forecast-grid">
      <div 
        v-for="(day, index) in forecast.days" 
        :key="index" 
        class="forecast-card glass-panel"
      >
        <div class="day-date">{{ formatDate(day.dateIso) }}</div>
        <div class="day-condition">{{ day.condition }}</div>
        <div class="day-temp">
          <span class="max">{{ day.maxTempC }}°</span>
          <span class="min">{{ day.minTempC }}°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '../stores/weather';
import { formatDate } from '../utils/formatters';

const store = useWeatherStore();
const forecast = computed(() => store.forecast);
</script>
<style scoped>
.forecast-section {
  margin-top: 2rem;
}

h3 {
  margin-bottom: 1.5rem;
  font-weight: 500;
  opacity: 0.9;
}

.forecast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.forecast-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: transform 0.2s;
}

.forecast-card:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.15);
}

.day-date {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.day-condition {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  height: 40px; /* fixed height for alignment */
  display: flex;
  align-items: center;
}

.day-temp {
  display: flex;
  gap: 10px;
}

.max { font-weight: 700; }
.min { opacity: 0.6; }

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
