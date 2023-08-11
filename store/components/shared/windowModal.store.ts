import { WindowPages } from "@/enums/pagesNames";
// import {
//   WindowControlTypes,
// } from '@/enums/windowModal'

import { defineStore } from 'pinia'

enum WindowStateParams {
  Closed = 'closed',
  Minimized = 'minimized',
  Fullscreen = 'fullscreen',
  Active = 'active',
}

interface WindowModalStore {
  allIds: Array<WindowPages>,
  byId: Record<WindowPages, Record<WindowStateParams, boolean>>
}

interface WindowModalState {
  active?: boolean,
  opened?: boolean,
  fullscreen?: boolean,
  minimized?: boolean,
  x?: number,
  y?: number,
}

const initialWindowModalState :WindowModalState = {
  active: false,
  opened: false,
  fullscreen: true,
  minimized: false,
  x: 100*(Math.round(Math.random() * 10)),
  y: 100*(Math.round(Math.random() * 10)) 
}

export const useWindowModalsStore = defineStore('windowModals', {
  state: () => ({
    byId: {},
    allIds: Object.values(WindowPages),
  } as WindowModalStore),
  actions: {
    setModalState (type :WindowPages, state :WindowModalState) :void {
      this.byId[type] = {
        ...this.byId[type],
        ...state,
      }
    },
    async initModalState(type :WindowPages) :Promise<void> {
      await this.setModalState(type, { 
        ...initialWindowModalState,
        opened: true,
      })
    },
  },
  getters: {
    getById () {
      return this.byId
    },
    getModalById () {
      return (id) => {
        return this.getById?.[id]
      }
    },
  }
})
