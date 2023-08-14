import { defineStore } from 'pinia'


export const usePageStore = defineStore('page', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      
    }
  },
  actions: {

    // TODO HANDLE COMPLETE PROCESSING TASK SUBTASK 


  },
  getters: {
    isOnlyTouchDevice() {
      try {
        return window && window.matchMedia("(any-hover: none)").matches &&
          ( 'ontouchstart' in window ) ||
          ( navigator.maxTouchPoints > 0 ) ||
          ( navigator.msMaxTouchPoints > 0 ) 
      } catch (e) {
        return false
      }
    }
  }
})
