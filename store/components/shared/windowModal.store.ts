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

export interface WindowModalState {
  name?: string,
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
        name: type,
        opened: true,
      })
    },
  },
  getters: {
    getAllIds () {
      return this.allIds
    },
    getById () {
      return this.byId
    },
    getModalById () {
      return (id) => {
        return this.getById?.[id]
      }
    },
    openedModals () {
      return this.getAllIds.reduce((_, id) => {
        if (this.getById[id] && this.getById[id].opened) {
          return [..._, this.getById[id]]
        }

        return _
      }, [])
      // return this.getAllIds.reduce((_, id) => {
        
      //   if (this.getById[id].value?.opened) {
      //     _.push(this.getById[id].value)

      //     return _
      //   }
      // }, [])
    }
  }
})
