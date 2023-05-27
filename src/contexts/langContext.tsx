import { createContext, ReactNode, useContext, useState } from 'react'

export type LanguageProps = 'pt' | 'fr' | 'it' | 'es' | 'en';
const LanguageList: LanguageProps[] = ['pt', 'fr', 'it', 'es', 'en']

type ContextProps = {
  children: ReactNode | ReactNode[];
};

type ContextValue = {
  LanguageList: LanguageProps[];
  language: LanguageProps;
  handleChangeLanguage: (lang: LanguageProps) => void;
};

export const LangContext = createContext<ContextValue | null>(null)

export const LangProvider = ({ children }: ContextProps): JSX.Element => {
  const [language, setLanguage] = useState<LanguageProps>('en')

  const handleChangeLanguage = (selectedLanguage: LanguageProps) => {
    setLanguage(selectedLanguage)
  }
  return (
    <LangContext.Provider
      value={{
        LanguageList,
        handleChangeLanguage,
        language,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export function useLang () {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
