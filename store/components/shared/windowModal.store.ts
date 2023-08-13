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
  active: WindowPages,
  allIds: Array<WindowPages>,
  byId: Record<WindowPages, Record<WindowStateParams, boolean>>
}

export interface WindowModalState {
  name?: string,
  inited: boolean | null,
  opened?: boolean,
  fullscreen?: boolean,
  minimized?: boolean,
  x?: number,
  y?: number,
}

const initialWindowModalState :WindowModalState = {
  inited: false,
  opened: false,
  fullscreen: true,
  minimized: false,
  x: 100*(Math.round(Math.random() * 10)),
  y: 100*(Math.round(Math.random() * 10)) 
}

export const useWindowModalsStore = defineStore('windowModals', {
  state: () => ({
    active: null,
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
      if (this.getById[type]?.inited) {
        await this.setModalState(type, { 
          opened: true,
        })
      } else {
        await this.setModalState(type, { 
          ...initialWindowModalState,
          name: type,
          opened: true,
          inited: true,
        })
      }
      
      await this.setActive(type)
    },
    setActive (type :WindowPages) {
      this.active = type
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
    },
    isActive () {
      return (type) => {
        console.log(this.active === type);
        
        return this.active === type
      }
    }
  }
})
