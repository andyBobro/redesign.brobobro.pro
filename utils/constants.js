export const ENTRY_MODES = ['simple', 'advanced']
export const THEMES = fromArrToByKey(['default'])
export const STORAGE_NAME = 'BRO_TERM_SESSION'
export const STORAGE_DEFAULTS = {
  historyByLines: [],
}
export const TASKS_NAMES = {
  GO: 'go',
  VIEW: 'view',
  HELP: 'help',
  WELCOME: 'welcome',
}
export const SUBTASKS_NAMES = {
  WRITE: 'WRITE',
}
export const TASKS_TYPES = {
  STATIC: 'STATIC',
}
export const EXEC_TYPES = {
  IMMEDIATE: 'IMMEDIATE',
  QUEUED: 'QUEUED',
}
export const EXEC_TIME = 100
export const EXEC_DELAY = 200

export const SUBTASKS = {
  [SUBTASKS_NAMES.WRITE]: {
    name: SUBTASKS_NAMES.WRITE,
    type: TASKS_TYPES.STATIC,
    exec_type: EXEC_TYPES.IMMEDIATE,
  }
}

export const TASKS = {
  [TASKS_NAMES.WELCOME]: {
    name: TASKS_NAMES.WELCOME,
    type: TASKS_TYPES.STATIC,
    exec_type: EXEC_TYPES.IMMEDIATE,
    subtasks: [
      {
        name: SUBTASKS_NAMES.WRITE,
        payload: 'Welcome'
      },
      {
        name: SUBTASKS_NAMES.WRITE,
        payload: 'You\'re using BroTerm'
      },
      {
        name: SUBTASKS_NAMES.WRITE,
        payload: 'for list of supported commands type \'help\''
      },
    ]
  },
  [TASKS_NAMES.HELP]: {
    name: TASKS_NAMES.HELP,
    type: TASKS_TYPES.STATIC,
    exec_type: EXEC_TYPES.IMMEDIATE,
    subtasks: Object.values(TASKS_NAMES).map((task) => {
      return {
        name: SUBTASKS_NAMES.WRITE,
        payload: `tasks.help.${task}`
      }
    })
  }
}

export function fromArrToByKey(arr) {
  return arr.reduce((_, item) => {
    _[item] = item
    return _
  }, {})
}

// export async function delayFor(arr, f, delay = EXEC_DELAY) {
//   for await (let  of arr) {
//     const item = 
//   }
// }

export function delay(delay = EXEC_DELAY) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  })
}
