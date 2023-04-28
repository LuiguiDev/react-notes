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