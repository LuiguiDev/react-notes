import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./consts"

export type LanguageType = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguageType = typeof AUTO_LANGUAGE
export type FromLanguageType = LanguageType | AutoLanguageType

export interface stateType {
  fromLanguage: FromLanguageType
  toLanguage: LanguageType
  fromText: string
  result: string
  loading: boolean
}

export type actionType = 
  | { type: 'interchange_languages' }
  | { type: 'set_fromLanguage', payload: FromLanguageType }
  | { type: 'set_toLanguage', payload: LanguageType }
  | { type: 'set_fromText', payload: string }
  | { type: 'set_result', payload: string }
  
// to avoid 'magic strings' we use an enum
export enum SectionType {
  From = 'from',
  To = 'to'
}