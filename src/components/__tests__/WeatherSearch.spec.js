import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import WeatherSearch from '../WeatherSearch.vue'
import { useWeatherStore } from '../../stores/weather'

describe('WeatherSearch', () => {
    it('renders input and button', () => {
        setActivePinia(createPinia())
        const wrapper = mount(WeatherSearch)
        expect(wrapper.find('input').exists()).toBe(true)
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('shows loading state properly', async () => {
        const pinia = createPinia()
        setActivePinia(pinia)
        const store = useWeatherStore()

        // Initial state
        const wrapper = mount(WeatherSearch)
        expect(wrapper.find('button').text()).toBe('Search')

        // Set loading
        store.loading = true
        await wrapper.vm.$nextTick()

        expect(wrapper.find('button').text()).toBe('Searching...')
        expect(wrapper.find('button').element.disabled).toBe(true)
    })
})
