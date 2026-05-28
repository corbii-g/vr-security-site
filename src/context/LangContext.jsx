import { createContext, useContext, useState } from 'react'

export const LangContext = createContext('it')

export function LangProvider({ children }) {
  const [lang, setLang] = useState('it')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
