import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const ProductTypeStore = defineStore('productType', () => {
  const state = reactive({ list: [], load: true, errorMessage: '' })

 

  const SET_LIST = (list) => {
    state.list = list
  }

  const LIST = computed(() => state.list)

  return { LIST, SET_LIST }
})
