export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const // this const is a ts utility meant to create immutable objects

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'ToDos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const

// The line below is complex, it use a key from the obj TODO_FILTERS and add their type with typeof, once we have the keys we need the values, the first argument get: obj['prop']. Then the value is typed with typeof
export type filterType = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
