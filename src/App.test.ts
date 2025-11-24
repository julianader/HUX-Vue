import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from './App.vue'

describe('App.vue', () => {
  it('renders headline', () => {
    const wrapper = mount(App)
    expect(wrapper.find('h1').text()).toBe('Sudoku')
  })

  it('does not render the old documentation link', () => {
    const wrapper = mount(App)
    const link = wrapper.find('a')
    expect(link.exists()).toBe(false)
  })
})
