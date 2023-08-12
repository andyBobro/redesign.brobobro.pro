import { defineStore } from 'pinia'
import { delay, TASKS } from '@/utils/constants'

export const useBroTermStore = defineStore('broTerm', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      history: [],
      isRunning: false,
      welcomeShown: false,
    }
  },
  actions: {

    // TODO HANDLE COMPLETE PROCESSING TASK SUBTASK 

    processInput(input) {
      const { tasks } = input

      tasks.forEach(async (task) => {
        await this.runTask(task)
      })
    },
    async runTask(rawTask) {
      const [taskName] = rawTask.split(' ')
      const lowerTaskName = taskName.toLowerCase()
      const taskData = TASKS[lowerTaskName]

      if (!taskData) {
        this.runSubtask({
          name: SUBTASKS_NAMES.WRITE,
          payload: `Command is \'${lowerTaskName}\' not supported`
        })
        return;
      }

      const { subtasks } = taskData

      subtasks.forEach(async (subtask) => {
        await delay()
        await this.runSubtask(subtask)
      })
    },
    async runSubtask(subtask) {
      await delay().then(() => {
        this.history.push(subtask)
      })
    },
    setWelcomeShown () {
      this.welcomeShown = true
    }
  },
  getters: {
  }
})
