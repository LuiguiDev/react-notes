import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./consts"

export type LanguageType = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguageType = typeof AUTO_LANGUAGE
export type FromLanguageType = LanguageType | AutoLanguageType

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
  