export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const // this const is a ts utility meant to create immutable objects

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'All',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const