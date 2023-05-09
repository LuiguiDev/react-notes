export interface stateType {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  loading: boolean
}

export type actionType = 
  | { type: 'interchange_languages' }
  | { type: 'set_fromLanguage', payload: string }
  | { type: 'set_toLanguage', payload: string }
  | { type: 'set_fromText', payload: string }
  | { type: 'set_result', payload: string }
  